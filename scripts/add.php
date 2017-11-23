<?php 
header("Access-Control-Allow-Origin: *");
include("config.php"); 
$email = $_REQUEST['email'];
$table = $_REQUEST['table'];
$identity = $_REQUEST['identity'];
try {
    $conn = new PDO("mysql:host={$host};dbname={$database}",$user,$pass);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
if($identity !== 'facebook') {
  

$checkEmail = $conn->query("SELECT * FROM users WHERE email = '".$email."'")->fetchAll();
    if($checkEmail) {
       echo "The email ".$email. " is already registered.";
    } else {
    
    




  
  
  
    $sql = "INSERT INTO ".$table." (";
	$comma = "";
	foreach($_GET as $key => $val) {
		if(!empty($val) && ($key !== 'table') && ($key !== 'PHPSESSID') && ($key !== 'identity')) {
			$sql .= $comma.$key;
			$comma = ", ";
		}
	}
	$sql .= ") VALUES (";
	
	
	$comma = " ";
	foreach($_GET as $key => $val) {
		if(!empty($val) && ($key !== 'table') && ($key !== 'PHPSESSID') && ($key !== 'identity')) {
			$sql .= $comma."'" .$val."'";
			$comma = ", ";
		}
	}
	$sql .= ");";
    $conn->exec($sql);
    echo "Added successfully.";

    echo "SQL:: ".$sql;
}
  }
    }
catch(PDOException $e)
    {
    echo $sql . "<br>" . $e->getMessage();
    }

$conn = null;
?>