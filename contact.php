<?php
/**
 * Contactformulier endpoint voor motouzani.com
 * - Server-side validatie, honeypot, rate-limit per IP
 * - Branded HTML admin-notificatie + bevestigingsmail (multipart/alternative)
 * - Lead-log (JSON lines, afgeschermd via .htaccess)
 */

declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

const ADMIN_EMAIL = 'contact@motouzani.com';
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

if (!empty($_POST['company_site'])) {
    respond(200, ['ok' => true]);
}

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

$allowedTopics = ['Consultancy', 'Training', 'Digitaal project', 'Digital project', 'Algemeen'];
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

foreach ([$name, $email, $topic] as $field) {
    if (preg_match('/[\r\n]/', $field)) {
        respond(422, ['ok' => false, 'error' => 'Ongeldige invoer.']);
    }
}

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

/* ---------- branded HTML mail (Motouzani groen, DF-signature) ---------- */

function motoMailHtml(string $heading, string $intro, array $rows, string $footNote): string
{
    $rowsHtml = '';
    foreach ($rows as $label => $value) {
        $safeLabel = htmlspecialchars($label, ENT_QUOTES, 'UTF-8');
        $safeValue = nl2br(htmlspecialchars($value, ENT_QUOTES, 'UTF-8'));
        $rowsHtml .= '<tr>'
            . '<td style="padding:10px 14px;font:700 11px/1.4 \'Courier New\',monospace;letter-spacing:1px;text-transform:uppercase;color:#0b5a3c;vertical-align:top;white-space:nowrap;">' . $safeLabel . '</td>'
            . '<td style="padding:10px 14px;font:400 14px/1.6 Arial,Helvetica,sans-serif;color:#10201a;">' . $safeValue . '</td>'
            . '</tr>';
    }

    $safeHeading = htmlspecialchars($heading, ENT_QUOTES, 'UTF-8');
    $safeIntro = htmlspecialchars($intro, ENT_QUOTES, 'UTF-8');
    $safeFoot = htmlspecialchars($footNote, ENT_QUOTES, 'UTF-8');

    return '<!doctype html><html><body style="margin:0;padding:0;background:#f4f5ef;">'
        . '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f5ef;padding:28px 0;"><tr><td align="center">'
        . '<table role="presentation" width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;">'
        . '<tr><td style="background:#050d0a;border-radius:16px 16px 0 0;padding:26px 30px;">'
        . '<span style="display:inline-block;width:12px;height:12px;border-radius:3px;background:#3fe38f;margin-right:10px;vertical-align:middle;"></span>'
        . '<span style="font:800 16px Arial,Helvetica,sans-serif;color:#eaf6ef;vertical-align:middle;">motouzani<span style="color:#9fbcac;">.com</span></span>'
        . '<div style="font:700 26px Georgia,serif;color:#eaf6ef;margin-top:18px;">' . $safeHeading . '</div>'
        . '<div style="font:400 14px/1.6 Arial,Helvetica,sans-serif;color:#9fbcac;margin-top:8px;">' . $safeIntro . '</div>'
        . '</td></tr>'
        . '<tr><td style="background:#ffffff;padding:16px;">'
        . '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">' . $rowsHtml . '</table>'
        . '</td></tr>'
        . '<tr><td style="background:#ffffff;border-radius:0 0 16px 16px;border-top:1px solid rgba(11,90,60,0.15);padding:18px 30px;">'
        . '<div style="font:400 12px/1.6 Arial,Helvetica,sans-serif;color:#4c635a;">' . $safeFoot . '</div>'
        . '<div style="font:400 12px Arial,Helvetica,sans-serif;color:#4c635a;margin-top:10px;">Designed &amp; developed by '
        . '<a href="https://digitalfarmers.be" style="text-decoration:none;font-weight:800;"><span style="color:#1f3c88;">Digital</span> <span style="color:#e68404;">Farmers</span></a></div>'
        . '</td></tr>'
        . '</table></td></tr></table></body></html>';
}

function motoSendMail(string $to, string $subject, string $plain, string $html, string $fromName, string $replyTo): bool
{
    $boundary = 'moto-' . bin2hex(random_bytes(12));
    $headers = implode("\r\n", [
        'From: ' . $fromName . ' <' . FROM_EMAIL . '>',
        'Reply-To: ' . $replyTo,
        'MIME-Version: 1.0',
        'Content-Type: multipart/alternative; boundary="' . $boundary . '"',
        'X-Mailer: motouzani-site',
    ]);
    $body = "--{$boundary}\r\n"
        . "Content-Type: text/plain; charset=UTF-8\r\n"
        . "Content-Transfer-Encoding: 8bit\r\n\r\n"
        . $plain . "\r\n\r\n"
        . "--{$boundary}\r\n"
        . "Content-Type: text/html; charset=UTF-8\r\n"
        . "Content-Transfer-Encoding: 8bit\r\n\r\n"
        . $html . "\r\n\r\n"
        . "--{$boundary}--";

    return mail($to, mb_encode_mimeheader($subject, 'UTF-8'), $body, $headers);
}

$safeName = mb_substr($name, 0, 120);

$adminHtml = motoMailHtml(
    'Nieuw bericht binnengebracht',
    'Via het formulier op motouzani.com.',
    [
        'naam' => $safeName,
        'e-mail' => $email,
        'waarover' => $topic,
        'bericht' => $message,
    ],
    'Antwoorden kan rechtstreeks: reply gaat naar de afzender.'
);
$adminPlain = "Nieuw bericht via motouzani.com\n\nNaam: {$safeName}\nE-mail: {$email}\nWaarover: {$topic}\n\nBericht:\n{$message}";
$adminSent = motoSendMail(ADMIN_EMAIL, "Binnengebracht via motouzani.com: {$topic}", $adminPlain, $adminHtml, 'motouzani.com', $email);

$confirmHtml = motoMailHtml(
    'Goed ontvangen.',
    'Je bericht is binnen. Zo gaat het verder:',
    [
        'status' => 'ontvangen en gelogd',
        'reactie' => 'binnen 24 tot 48 uur, persoonlijk',
        'waarover' => $topic,
        'jouw bericht' => $message,
    ],
    'Wil je intussen iets toevoegen? Antwoord gewoon op deze mail, die komt rechtstreeks bij Mo terecht.'
);
$confirmPlain = "Dag {$safeName},\n\nJe bericht via motouzani.com is goed ontvangen.\nReactie volgt binnen 24 tot 48 uur, persoonlijk.\n\nWaarover: {$topic}\nJouw bericht:\n{$message}\n\nIets toevoegen? Antwoord gewoon op deze mail.\n\nMo Touzani\nmotouzani.com";
motoSendMail($email, 'Goed ontvangen: jouw bericht aan motouzani.com', $confirmPlain, $confirmHtml, 'Mo Touzani', ADMIN_EMAIL);

if (!$adminSent) {
    respond(500, ['ok' => false, 'error' => 'Versturen mislukte. Mail rechtstreeks naar contact@motouzani.com.']);
}

respond(200, ['ok' => true]);
