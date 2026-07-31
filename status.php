<?php
/**
 * Levend register: meet server-side de echte status van elke rij.
 * Cache 10 min zodat bezoekers de sites niet belasten. PHP 7.4-compatibel.
 */

declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: public, max-age=300');

const CACHE_FILE = __DIR__ . '/leads/status-cache.json';
const CACHE_TTL = 600;

$domains = [
    'woodenheart.be',
    'shifacare.be',
    'torenhofevents.be',
    'chocotale.be',
    'tucho.be',
    'insureyou.be',
    'casaya-spa.be',
    'team-vlaanderen.be',
    'penthouse-antwerp.be',
    'tinycare.eu',
    'digitalfarmers.be',
];

if (is_file(CACHE_FILE) && (time() - (int) filemtime(CACHE_FILE)) < CACHE_TTL) {
    readfile(CACHE_FILE);
    exit;
}

$mh = curl_multi_init();
$handles = [];
foreach ($domains as $domain) {
    $ch = curl_init('https://' . $domain . '/');
    curl_setopt_array($ch, [
        CURLOPT_NOBODY => true,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_MAXREDIRS => 3,
        CURLOPT_TIMEOUT => 6,
        CURLOPT_CONNECTTIMEOUT => 4,
        CURLOPT_USERAGENT => 'motouzani-register/1.0',
    ]);
    curl_multi_add_handle($mh, $ch);
    $handles[$domain] = $ch;
}

do {
    $status = curl_multi_exec($mh, $running);
    if ($running) {
        curl_multi_select($mh);
    }
} while ($running && $status === CURLM_OK);

$sites = [];
foreach ($handles as $domain => $ch) {
    $code = (int) curl_getinfo($ch, CURLINFO_RESPONSE_CODE);
    $ms = (int) round(((float) curl_getinfo($ch, CURLINFO_TOTAL_TIME)) * 1000);
    $sites[$domain] = [
        'ok' => $code >= 200 && $code < 400,
        'ms' => $ms,
    ];
    curl_multi_remove_handle($mh, $ch);
}
curl_multi_close($mh);

$json = json_encode(['checked_at' => date('c'), 'sites' => $sites], JSON_UNESCAPED_SLASHES);
if (!is_dir(dirname(CACHE_FILE))) {
    mkdir(dirname(CACHE_FILE), 0750, true);
}
file_put_contents(CACHE_FILE, $json, LOCK_EX);
echo $json;
