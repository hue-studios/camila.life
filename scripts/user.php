<?php
header( "Access-Control-Allow-Origin: *" );
include( "config.php" );
$email = $_REQUEST[ 'email' ];
$table = $_REQUEST[ 'table' ];
$identity = $_REQUEST[ 'identity' ];
$social_id = $_REQUEST[ 'social_id' ];
echo $social_id;
try {
  $conn = new PDO( "mysql:host={$host};dbname={$database}", $user, $pass );
  $conn->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );
  if ( $identity !== 'facebook' ) {
    $sql1 = "SELECT * FROM users WHERE email = :email_var";
    $stmt1 = $conn->prepare( $sql1 );
    $stmt1->bindParam( ':email_var', $email );
    $stmt1->execute();
    $total = $stmt1->rowCount();
    echo "this is non-FB ".$total;
    if ( $total == 1 ) {
      $query1 = "UPDATE " . $table . " SET";
      $comma = " ";
      foreach ( $_GET as $key => $val ) {
        if ( !empty( $val ) && ( $key !== 'table' ) && ( $key !== 'id' ) && ( $key !== 'PHPSESSID' ) && ( $key !== '_ga' ) ) {
          $query1 .= $comma . $key . " = '" . htmlspecialchars( $val, ENT_QUOTES ) . "'";
          $comma = ", ";
        }
      }
      $query1 .= " WHERE email = '$email'";
      echo "SQL:: " . $query1;
      $stmt = $conn->prepare( $query1 );
      $stmt->execute();
      echo "Updated successfully.";

    } else {

      $sql2 = "INSERT INTO " . $table . " (";
      $comma = "";
      foreach ( $_GET as $key => $val ) {
        if ( !empty( $val ) && ( $key !== 'table' ) && ( $key !== 'PHPSESSID' )) {
          $sql2 .= $comma . $key;
          $comma = ", ";
        }
      }
      $sql2 .= ") VALUES (";
      $comma = " ";
      foreach ( $_GET as $key => $val ) {
        if ( !empty( $val ) && ( $key !== 'table' ) && ( $key !== 'PHPSESSID' ) ) {
          $sql2 .= $comma . "'" . $val . "'";
          $comma = ", ";
        }
      }
      $sql2 .= ");";
      echo "SQL:: " . $sql2;
      $conn->exec( $sql2 );
      echo "Added successfully.";
    }
  } else {
    $sql3 = "SELECT * FROM users WHERE social_id = :social_id_var";
    $stmt3 = $conn->prepare( $sql3 );
    $stmt3->bindParam( ':social_id_var', $social_id );
     $stmt3->execute();
    $total3 = $stmt3->rowCount();
    echo "this is FB ".$total3;
    if ( $total == 1) {
      $query3 = "UPDATE " . $table . " SET";
      $comma = " ";
      foreach ( $_GET as $key => $val ) {
        if ( !empty( $val ) && ( $key !== 'table' ) && ( $key !== 'id' ) && ( $key !== 'PHPSESSID' ) && ( $key !== '_ga' ) ) {
          $query3 .= $comma . $key . " = '" . htmlspecialchars( $val, ENT_QUOTES ) . "'";
          $comma = ", ";
        }
      }
      $query3 .= " WHERE email = '$email'";
      echo "SQL:: " . $query3;
      $stmt = $conn->prepare( $query3 );
      $stmt->execute();
      echo "Updated successfully.";
      
    } else {
      
      $sql4 = "INSERT INTO " . $table . " (";
      $comma = "";
      foreach ( $_GET as $key => $val ) {
        if ( !empty( $val ) && ( $key !== 'table' ) && ( $key !== 'PHPSESSID' ) ) {
          $sql4 .= $comma . $key;
          $comma = ", ";
        }
      }
      $sql4 .= ") VALUES (";
      $comma = " ";
      foreach ( $_GET as $key => $val ) {
        if ( !empty( $val ) && ( $key !== 'table' ) && ( $key !== 'PHPSESSID' )) {
          $sql4 .= $comma . "'" . $val . "'";
          $comma = ", ";
        }
      }
      $sql4 .= ");";
      echo "SQL:: " . $sql4;
      $conn->exec( $sql4 );
      echo "Added successfully.";

    }

  }
} catch ( PDOException $e ) {
  echo $sql . "<br>" . $e->getMessage();
}

$conn = null;
?>