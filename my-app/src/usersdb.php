<?php

define('DB_SERVER', 'localhost');
define('DB_USERNAME', 'root');
define('DB_PASSWORD', '');
define('DB_NAME', 'gym');
 
/* Attempt to connect to MySQL database */
$conn = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);
 
// Check connection
if($conn->connect_error)
{
    die("Failed to connect to DB: " . $conn->connect_error);
}

$status = 200;
$Words = $_POST["WordValue"];

for ( $i = 0; $i < count( $WordValue ); $i++ )
{
    $WordValue = $Words[$i];

    if ( !empty( $Words ) )
    {
        $result = $mysqli->query("INSERT INTO words (Words) VALUES ('$Words')");

        if ( !$result )
        {
            $status = 300; // OK
        }
    }
    else
    {
        $status = 301;
    }
} 

echo json_encode( array('status'=>$status));
