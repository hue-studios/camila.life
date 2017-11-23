<?php 
	$host = 'localhost';
	$user = 'huestudios';
	$pass = 'Peter1980!';
	$database = 'camila_life';
	try {
		 $db = new PDO("mysql:host={$host};dbname={$database}",$user,$pass);
		 $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	} catch(PDOException $e) {
	   	echo "An Error occured: ". $e->getMessage();
	}


    $raw_query = "SELECT * FROM recipe_ingredients";
    $query = $db->prepare($raw_query);
	$query->execute();
	$ingredients = $query->fetchAll(PDO::FETCH_CLASS);

foreach($ingredients as $ingredient) {
    $ingredientName;
    $ingredientID = $ingredient->id;
    $raw_query1 = "SELECT * FROM ingredients WHERE id = ".$ingredient->ingredient;
    $query1 = $db->prepare($raw_query1);
    foreach ($db->query($raw_query1) as $results)  {
        $ingredientName = $results["name"]; 
        $raw_query2 = "UPDATE recipe_ingredients SET name = '$ingredientName' WHERE id='$ingredientID'";
        $query2 = $db->prepare($raw_query2);
	    $query2->execute();
    }
}
?>

