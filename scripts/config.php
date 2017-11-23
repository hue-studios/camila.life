<?php 

$host = 'localhost';
$user = 'huestudios';
$pass = 'Peter1980!';
$database = 'camila_life';


function truncate($text, $chars = 200) {
    $text = $text." ";
    $text = substr($text,0,$chars);
    $text = substr($text,0,strrpos($text,' '));
    $text = $text."...";
	$text = str_replace("<em>","", $text);
    return $text;
}

?>