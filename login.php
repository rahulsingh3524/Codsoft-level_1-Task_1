<?php
// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $username = $_POST["username"];
    $password = $_POST["password"];

    // Perform basic input validation (you can add more validation as needed)
    if (empty($username) || empty($password)) {
        die("Please enter both username and password.");
    }

    // Hash the password using bcrypt
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    // In a real-world scenario, you would check the hashed password against the one stored in the database
    // For this example, let's assume the correct username and hashed password
    $correctUsername = "exampleUser";
    $correctHashedPassword = password_hash("examplePassword", PASSWORD_DEFAULT);

    if ($username === $correctUsername && password_verify($password, $correctHashedPassword)) {
        // Successful login, redirect to the dashboard or other pages
        header("Location: dashboard.php");
        exit();
    } else {
        echo "Invalid username or password. Please try again.";
    }
}
?>
