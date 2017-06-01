var $l1c1=document.getElementById("ligne1-colonne1");
var $l1c2=document.getElementById("ligne1-colonne2");
var $l1c3=document.getElementById("ligne1-colonne3");

var $l2c1=document.getElementById("ligne2-colonne1");
var $l2c2=document.getElementById("ligne2-colonne2");
var $l2c3=document.getElementById("ligne2-colonne3");

var $l3c1=document.getElementById("ligne3-colonne1");
var $l3c2=document.getElementById("ligne3-colonne2");
var $l3c3=document.getElementById("ligne3-colonne3");



/*
		  colonne
		  |1|2|3|
		1
  ligne 2
		3

Voici comment j'ai déterminé mes div : ligneX-colonneX

 */

var tourJoueur = 1;
var $zoneDeJeu = document.getElementById("jeu");
var $messages = document.getElementById("messages");


$zoneDeJeu.addEventListener('click', function(e) {
	if (e.target.classList == "case") {
		switch(tourJoueur) {
			case 1 :
			e.target.classList.add("joueur1"); 
			tourJoueur = 2;
			break;
			case 2 :
			e.target.classList.add("joueur2");
			tourJoueur = 1;
			break;
			}
	} else {
		$messages.innerHTML="Cette case à déjà été jouée, choisissez en une autre...";
		setTimeout(function(){$messages.innerHTML=""}, 1500);
	}
	victoire();
	});


funtion victoire() {
	if ($l1c1.classList == $l1c2.classList && $l1c1.classList == $l1c3.classList) {
		$messages.innerHTML="Victoire";
	};
};



