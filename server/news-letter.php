<?php
// This PHP file handles newsletter subscriptions for Aurora Nexus.
// It connects to a MySQL database, validates the email, and stores it.
// It returns a JSON response to the client.

// Include the headers file for setting common HTTP security headers
require_once 'headers.php';

// Initialize response array
$response = ['success' => false, 'message' => 'An unexpected error occurred.'];
$conn = null; // Initialize connection variable

try {
    // Include the database connection file
    // This file is expected to set up the $conn variable or throw an exception on failure
    require_once 'db_con.php';

    // --- Handle POST Request ---
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Check if the 'email' field is present and not empty in the POST data
        if (isset($_POST['email']) && !empty($_POST['email'])) {
            $email = $_POST['email'];

            // Sanitize the email input:
            // 1. Escapes special characters for use in an SQL query to prevent SQL injection.
            $email = $conn->real_escape_string($email);
            // 2. Removes all illegal characters from an email address string.
            $email = filter_var($email, FILTER_SANITIZE_EMAIL);

            // Validate the email format:
            // Checks if the email address is syntactically valid.
            if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
                $response['message'] = "Please enter a valid email address.";
                echo json_encode($response);
                exit();
            }

            // --- Prepare SQL Statement ---
            // Using prepared statements prevents SQL injection by separating the SQL logic
            // from the data. The '?' acts as a placeholder for the email value.
            // Assumes you have a table named 'newsletter_subscribers' with 'email' and 'subscribe_date' columns.
            $stmt = $conn->prepare("INSERT INTO newsletter_subscribers (email, subscribe_date) VALUES (?, NOW())");

            // Check if statement preparation was successful
            if ($stmt === false) {
                error_log("Failed to prepare statement: " . $conn->error);
                throw new Exception("Failed to prepare statement for subscription. Please try again later.");
            }

            // Bind parameters:
            // 's' specifies that the parameter is a string.
            $stmt->bind_param("s", $email);

            // --- Execute the Statement ---
            if ($stmt->execute()) {
                // Subscription successful
                $response['success'] = true;
                $response['message'] = "Thank you for subscribing to our newsletter!";
            } else {
                // Handle specific database errors
                // MySQL error code 1062 typically indicates a duplicate entry for a UNIQUE key.
                if ($conn->errno == 1062) {
                    $response['message'] = "This email address is already subscribed.";
                } else {
                    // Log the detailed database error for debugging
                    error_log("Database insert error: " . $stmt->error);
                    throw new Exception("Failed to subscribe. Please try again later.");
                }
            }

            // Close the prepared statement
            $stmt->close();

        } else {
            // Email field was empty or not set
            $response['message'] = "Email address is required.";
        }
    } else {
        // Request method is not POST
        $response['message'] = "Invalid request method. Only POST requests are allowed for subscription.";
        // Set appropriate HTTP status code for method not allowed
        http_response_code(405);
    }

} catch (Exception $e) {
    // Catch any exceptions thrown during the process
    error_log("Newsletter subscription exception: " . $e->getMessage());
    // Provide a generic error message to the client
    $response['message'] = "An error occurred during subscription. Please try again later.";
    // Set appropriate HTTP status code for internal server error
    http_response_code(500);
} finally {
    // Ensure the database connection is closed, regardless of success or failure
    if ($conn instanceof mysqli) {
        $conn->close();
    }
    // Encode the response array as JSON and send it to the client
    echo json_encode($response);
}
?>
