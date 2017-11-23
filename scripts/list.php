<?php 
header('Access-Control-Allow-Origin: *');
include("config.php"); 
$email = $_REQUEST['email'];
$action = $_REQUEST['action'];
$product_id = $_REQUEST['product_id'];
$conn = new PDO("mysql:host={$host};dbname={$database}",$user,$pass);
$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
if($action == 'delete') {
  
  $query1 = "DELETE FROM list WHERE product_id='$product_id'";
  $stmt1 = $conn->prepare( $query1 );
  $stmt1->execute();
  echo "Deleted product ". $product_id ." successfully.";
  
} elseif ($action == 'add') {
  
  $query2 = "INSERT INTO list (";
  $comma = "";
  foreach ( $_GET as $key => $val ) {
    if ( !empty( $val ) && ( $key !== 'table' ) && ( $key !== 'PHPSESSID' ) && ( $key !== 'action' )) {
      $query2 .= $comma . $key;
      $comma = ", ";
    }
  }
  $query2 .= ") VALUES (";
  $comma = " ";
  foreach ( $_GET as $key => $val ) {
    if ( !empty( $val ) && ( $key !== 'table' ) && ( $key !== 'PHPSESSID' ) && ( $key !== 'action' )) {
      $query2 .= $comma . "'" . $val . "'";
      $comma = ", ";
    }
  }
  $query2 .= ");";
  echo "SQL:: " . $query2;
  $stmt2 = $conn->prepare( $query2 );
  $stmt2->execute();
  echo "Added successfully.";
}
$conn = null;
?>