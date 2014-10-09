$(document).ready(function() {
	$joueur = $("#player");
	
	$joueur.css("left", "375px");
	$joueur.css("top", "650px");
	
	$(document).keyup( function(event) { 
		$keyCode = event.which;
		console.log($keyCode);
		$place = $joueur.position().left;
		
		if (($keyCode == 37) && ($place > 50)){
			$place -= 50;
			$joueur.css("left", $place);
		}
		
		if (($keyCode == 39) && ($place < 700)){
			$place += 50;
			$joueur.css("left", $place);
		}
	});
	
	$valeur = 25 + Math.floor(Math.random() * 15) * 50;
	$("#jeu").append('<img id="voiture" class="car" src="blue-car.png" />');
	$("#voiture").css("left", $valeur);
	$("#voiture").animate({height:"650px"});
});