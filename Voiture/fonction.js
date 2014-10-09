$(document).ready(function() {
	$joueur = $("#player");
	
	$joueur.css("left", "375px");
	$joueur.css("top", "580px");
	
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
	
	
	$horloge = window.setInterval('voitureBleue();' , 300);
	
});

function voitureBleue(){
	$valeur = 25 + Math.floor(Math.random() * 15) * 50;
	$("#jeu").prepend('<p><img id="voiture" class="car" src="blue-car.png" /></p>');
	
	$voiture = $("#voiture");
	$voiture.css("left", $valeur);
	$voiture.animate({top:"700px"}, 3000, 
	/*{progress: function(now, fx){
		if(($voiture.position().left == $joueur.position().left) && ($voiture.position().top == $joueur.position().top)){
			alert("Game Over");
		}
	}},*/
	function(){	
		$("p:last").remove()
	});
}
