<?php
/**
 * Contactformulier endpoint voor motouzani.com
 * - Server-side validatie
 * - Honeypot + eenvoudige rate-limit per IP
 * - Admin-notificatie + bevestigingsmail naar aanvrager
 * - Lead-log (JSON lines, afgeschermd via .htaccess)
 */

declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

const ADMIN_EMAIL = 'mo@digitalfarmers.be';
const FROM_EMAIL = 'no-reply@motouzani.com';
const LEAD_LOG = __DIR__ . '/leads/leads.jsonl';
const RATE_LIMIT_DIR = __DIR__ . '/leads/rate';
const RATE_LIMIT_SECONDS = 60;

function respond(int $status, array $payload): void
{
    http_response_code($status);
    echo json_encode($payload);
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    respond(405, ['ok' => false, 'error' => 'Methode niet toegestaan.']);
}

// Honeypot: bots vullen dit verborgen veld in.
if (!empty($_POST['company_site'])) {
    respond(200, ['ok' => true]);
}

// Eenvoudige rate-limit per IP (1 submission per minuut).
$ip = $_SERVER['REMOTE_ADDR'] ?? '0.0.0.0';
$ipHash = hash('sha256', $ip);
if (!is_dir(RATE_LIMIT_DIR)) {
    mkdir(RATE_LIMIT_DIR, 0750, true);
}
$rateFile = RATE_LIMIT_DIR . '/' . $ipHash;
if (is_file($rateFile) && (time() - (int) filemtime($rateFile)) < RATE_LIMIT_SECONDS) {
    respond(429, ['ok' => false, 'error' => 'Even geduld: probeer het over een minuut opnieuw.']);
}
touch($rateFile);

$name = trim((string) ($_POST['name'] ?? ''));
$email = trim((string) ($_POST['email'] ?? ''));
$topic = trim((string) ($_POST['topic'] ?? 'Algemeen'));
$message = trim((string) ($_POST['message'] ?? ''));

$allowedTopics = ['Consultancy', 'Training', 'Digitaal project', 'Algemeen'];
if (!in_array($topic, $allowedTopics, true)) {
    $topic = 'Algemeen';
}

if ($name === '' || mb_strlen($name) > 120) {
    respond(422, ['ok' => false, 'error' => 'Vul een geldige naam in.']);
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL) || mb_strlen($email) > 180) {
    respond(422, ['ok' => false, 'error' => 'Vul een geldig e-mailadres in.']);
}
if ($message === '' || mb_strlen($message) > 4000) {
    respond(422, ['ok' => false, 'error' => 'Vul een bericht in (max 4000 tekens).']);
}

// Header-injectie voorkomen.
foreach ([$name, $email, $topic] as $field) {
    if (preg_match('/[\r\n]/', $field)) {
        respond(422, ['ok' => false, 'error' => 'Ongeldige invoer.']);
    }
}

// Lead loggen.
$lead = [
    'submitted_at' => date('c'),
    'name' => $name,
    'email' => $email,
    'topic' => $topic,
    'message' => $message,
    'ip_hash' => $ipHash,
    'source_page' => (string) ($_SERVER['HTTP_REFERER'] ?? ''),
];
if (!is_dir(dirname(LEAD_LOG))) {
    mkdir(dirname(LEAD_LOG), 0750, true);
}
file_put_contents(LEAD_LOG, json_encode($lead, JSON_UNESCAPED_UNICODE) . PHP_EOL, FILE_APPEND | LOCK_EX);

$safeName = mb_substr($name, 0, 120);
$encoding = 'UTF-8';

// Admin-notificatie.
$adminSubject = mb_encode_mimeheader("Nieuwe aanvraag via motouzani.com: {$topic}", $encoding);
$adminBody = "Nieuwe aanvraag via motouzani.com\n\n"
    . "Naam: {$safeName}\n"
    . "E-mail: {$email}\n"
    . "Onderwerp: {$topic}\n\n"
    . "Bericht:\n{$message}\n";
$adminHeaders = implode("\r\n", [
    'From: Motouzani.com <' . FROM_EMAIL . '>',
    'Reply-To: ' . $email,
    'Content-Type: text/plain; charset=UTF-8',
    'X-Mailer: motouzani-site',
]);
$adminSent = mail(ADMIN_EMAIL, $adminSubject, $adminBody, $adminHeaders);

// Bevestiging naar aanvrager.
$confirmSubject = mb_encode_mimeheader('Je aanvraag is goed ontvangen', $encoding);
$confirmBody = "Dag {$safeName},\n\n"
    . "Bedankt voor je bericht via motouzani.com. Ik heb je aanvraag rond \"{$topic}\" goed ontvangen\n"
    . "en kom er gewoonlijk binnen 24 tot 48 uur op terug.\n\n"
    . "Wil je intussen al iets delen of is het dringend? Mail me rechtstreeks op mo@digitalfarmers.be.\n\n"
    . "Tot snel,\n"
    . "Mo Touzani\n"
    . "motouzani.com\n";
$confirmHeaders = implode("\r\n", [
    'From: Mo Touzani <' . FROM_EMAIL . '>',
    'Reply-To: ' . ADMIN_EMAIL,
    'Content-Type: text/plain; charset=UTF-8',
    'X-Mailer: motouzani-site',
]);
mail($email, $confirmSubject, $confirmBody, $confirmHeaders);

if (!$adminSent) {
    respond(500, ['ok' => false, 'error' => 'Versturen mislukte. Mail me rechtstreeks op mo@digitalfarmers.be.']);
}

respond(200, ['ok' => true]);
