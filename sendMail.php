<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Load PHP Mailer classes.

require 'PHPMailer-master/src/PHPMailer.php';
require 'PHPMailer-master/src/SMTP.php';
require 'PHPMailer-master/src/Exception.php';

// Pull form values.
$name = $_POST['name'] ?? '';
$email = $_POST['email'] ?? '';
$message = $_POST['message'] ?? '';

// Create the mailer.
$mail = new PHPMailer(true);

try {
    // SMTP settings
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'gatene@gmail.com';         // Your Gmail address
    $mail->Password   = 'bgfp iuxj lmmk xroi';           // NOT your Gmail password — use an App Password
    $mail->SMTPSecure = 'tls';
    $mail->Port       = 587;

    // Sender and recipient
    $mail->setFrom('Gatene1@iCloud.com', 'David Riley');
    $mail->addAddress('gatene1@icloud.com');            // Where you want the contact form to send

    // Email content
    $mail->isHTML(false);
    $mail->Subject = 'New Message from Contact Form';
    $mail->Body    = "Name: $name\nEmail: $email\n\n$message";

    $mail->send();
    header("Refresh: 3; URL=about.html");
    echo '<h2>✅ Message sent successfully! ... Redirecting</h2>';
} catch (Exception $e) {
    echo "❌ Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
?>
