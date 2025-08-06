<?php
header('Content-Type: application/json');
header('X-Content-Type-Options: nosniff');
header('X-Frame-Options: DENY');
header('X-XSS-Protection: 1; mode=block');

// Define your allowed origins
$allowedOrigins = [
    'http://localhost', // For development on localhost without specific port
    'http://localhost:8000', // Example: if your dev server runs on port 8000
    'http://localhost:5005', // Example: if your dev server runs on port 8000
    'http://localhost:3000', // Example: if your React/Vue dev server runs on port 3000
    'http://127.0.0.1:5500', // <--- ADD THIS LINE
    'https://aurora-nexus.artisbay.com', // Your actual production domain
    'http://localhost/aurora-lp/'
];

// Check if the Origin header is present in the request
if (isset($_SERVER['HTTP_ORIGIN'])) {
    $origin = $_SERVER['HTTP_ORIGIN'];

    // Check if the requested origin is in our list of allowed origins
    if (in_array($origin, $allowedOrigins)) {
        header("Access-Control-Allow-Origin: " . $origin);
    }
}

header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}
?>