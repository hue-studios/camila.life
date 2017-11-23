<?php 
header("Access-Control-Allow-Origin: *");
include("config.php"); 
$email = $_REQUEST['email'];

    $conn = new PDO("mysql:host={$host};dbname={$database}",$user,$pass);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$checkEmail = $conn->query("SELECT * FROM users WHERE email = '".$email."'")->fetchAll();
if($checkEmail) {
   echo "it's there.";
} else {
  echo "it's not.";
}


$conn = null;
?>