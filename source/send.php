<?php

declare(strict_types=1);

// название источника лидов
$leadSource = 'hoteza.app';

// настройки тележки для бота Hoteza Bot
$botId = '692292950:AAFYx_WnU_hrilNf8j40xk4pclDtClIRSxo';

$userId = '187737885';   // Niko


header('Content-Type: application/json');

function sendMessage($payload, $botId)
{
    $url = 'https://api.telegram.org/bot' . $botId . '/sendMessage';

    $payload = json_encode($payload);

    $ch = curl_init();
    $headers[] = 'Content-Type: application/json';
    $headers[] = 'Content-Length: ' . strlen($payload);

    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_USERAGENT, 'Hoteza Client');
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_TIMEOUT, 20);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'POST');
    curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);

    $response = curl_exec($ch);

    return json_decode($response, true, JSON_THROW_ON_ERROR);
}

try {

    $sendMessage = false;

    $hotel = '';
    $location = '';
    $name = '';
    $type = '';
    $contact = '';

    if (empty($_POST['hotel']) === false) {
        $hotel = htmlspecialchars(trim($_POST['hotel']), ENT_QUOTES);
    }
    if (empty($_POST['location']) === false) {
        $location = htmlspecialchars(trim($_POST['location']), ENT_QUOTES);
    }
    if (empty($_POST['name']) === false) {
        $name = htmlspecialchars(trim($_POST['name']), ENT_QUOTES);
    }
    if (empty($_POST['type']) === false) {
        $type = htmlspecialchars(trim($_POST['type']), ENT_QUOTES);
    }
    if (empty($_POST['contact']) === false) {
        $contact = htmlspecialchars(trim($_POST['contact']), ENT_QUOTES);
    }

    if (
        empty($hotel) === true &&
        empty($location) === true &&
        empty($name) === true &&
        empty($type) === true &&
        empty($contact) === true
    ) {
        echo json_encode([
            'status' => 'error',
            'message' => 'Data empty'
        ]);
    }


    $message = <<<TXT
*New lead from $leadSource!*
Hotel: $hotel
Location: $location
Name: $name
Contact type: $type
Contact: $contact
TXT;

    $payload = [
        'chat_id' => $userId,
        'text' => $message,
        'parse_mode' => 'Markdown',
    ];

    $response = sendMessage($payload, $botId);

    if (empty($response['ok']) === false && $response['ok'] === true) {
        echo json_encode([
            'status' => 'success',
            'message' => 'OK',
//            'response' => $response,
        ]);
    } else {
        http_response_code(500);
        echo json_encode([
            'status' => 'error',
            'message' => 'Send error',
            'response' => $response,
        ]);
    }
} catch (Throwable $e) {
    http_response_code(500);
    echo json_encode([
        'status' => 'error',
        'message' => 'Exception'
    ]);
}