<?php
if(!isset($_POST['submit']))
{
    //Error
    echo "error; form needed";
}
//Collect
$name = $_POST['name'];
$user_email = $_POST['email'];
$message = $_POST['comment'];

//Validate
if(empty($name)| empty($user_email))
{
    echo "Name and email required!";
    exit;
}

$email_from = 'jeremybleau@outlook.com';
$email_subject = "Portfolio 2021 form mail";
$email_body = "New message from $name.\n".
                "email address: $user_email\n".
                "Comment:\n $message".

$to = "jeremybleau@outlook.com";
$headers = "From: $email_from \r\n";

//Send email
mail($to,$email_subject,$email_body,$headers);