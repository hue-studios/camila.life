
<?php
header("Access-Control-Allow-Origin: *");
	$username = $_REQUEST['username'];
$given_name = $_REQUEST['given_name'];
$family_name = $_REQUEST['family_name'];
	$email = $_REQUEST['email'];
$picture = $_REQUEST['picture'];
echo $email;
require 'sdk/autoload.php';
$config = [
    'database' => [
        'hostname' => 'localhost',
        'username' => 'huestudios',
        'password' => 'Peter1980!',
        'database' => 'camila_life',
        // Optional
        'port' => 8889,
        // 'charset' => 'utf8'
    ],
    'filesystem' => [
        'root' => 'images/storage/uploads'
    ]
];

	$client = \Directus\SDK\ClientFactory::create($config);	


$client->createItem('users', [
  'given_name' =>  $given_name,
  'family_name' =>  $family_name,
  'picture' =>  $picture,
	'email' => $email
]);



?>  