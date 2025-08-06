<?php
// db_con.php
// This file handles the database connection for Aurora Nexus applications.

// --- Database Configuration ---
// IMPORTANT: For production environments, it is highly recommended to use
// environment variables or a secure configuration management system
// to store sensitive database credentials, rather than hardcoding them.
// Example: getenv('DB_SERVERNAME')
$servername = "localhost"; // Your database host (e.g., 'localhost', '127.0.0.1')
$username = "root"; // Your database username
$password = ""; // Your database password
$dbname = "aurora-nexus"; // The name of your database

$conn = null; // Initialize connection variable

try {
    // Attempt to create a new database connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check if connection was successful
    if ($conn->connect_error) {
        // Log the detailed error for debugging purposes (never show to user)
        error_log("Database connection failed: " . $conn->connect_error);
        // Throw an exception to be caught by the calling script's try-catch block
        throw new Exception("Database connection failed. Please try again later.");
    }
} catch (Exception $e) {
    // Re-throw the exception to ensure it's handled by the main script's error handling
    throw $e;
}
?>
