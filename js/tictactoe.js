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


/*Teste le tour du joueur et ajoute une class CSS*/
	
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

/*teste les class pour voire si une condition de victoire est présente pour chacun des joueurs*/

	if (

////////////
//joueur 1//
////////////

//Les Lignes//

/*		  1 2 3
		1 X X X
        2
		3         */

	$l1c1.classList.contains("joueur1") == $l1c2.classList.contains("joueur1") &&
	$l1c1.classList.contains("joueur1") == $l1c3.classList.contains("joueur1") ||
		
/*		  1 2 3
		1
        2 X X X
		3         */

	$l2c1.classList.contains("joueur1") == $l2c2.classList.contains("joueur1") &&
	$l2c1.classList.contains("joueur1") == $l2c3.classList.contains("joueur1") ||

/*		  1 2 3
		1
		2 
		3 X X X    */

	$l3c1.classList.contains("joueur1") == $l3c2.classList.contains("joueur1") &&
	$l3c1.classList.contains("joueur1") == $l3c3.classList.contains("joueur1") ||

//Les Colonnes//

/*		  1 2 3
		1 X 
        2 X
		3 X        */

	$l1c1.classList.contains("joueur1") == $l2c1.classList.contains("joueur1") &&
	$l1c1.classList.contains("joueur1") == $l3c1.classList.contains("joueur1") ||
		
/*		  1 2 3
		1   X
        2   X
		3   X     */

	$l1c2.classList.contains("joueur1") == $l2c2.classList.contains("joueur1") &&
	$l1c2.classList.contains("joueur1") == $l3c2.classList.contains("joueur1") ||

/*		  1 2 3
		1     X
		2     X
		3     X    */

	$l3c1.classList.contains("joueur1") == $l3c2.classList.contains("joueur1") &&
	$l3c1.classList.contains("joueur1") == $l3c3.classList.contains("joueur1") ||

//Les Diagonales//

/*		  1 2 3
		1 X 
        2   X
		3     X        */

	$l1c1.classList.contains("joueur1") == $l2c2.classList.contains("joueur1") &&
	$l1c1.classList.contains("joueur1") == $l3c3.classList.contains("joueur1") ||
		
/*		  1 2 3
		1     X
        2   X
		3 X     */

	$l1c3.classList.contains("joueur1") == $l2c2.classList.contains("joueur1") &&
	$l1c3.classList.contains("joueur1") == $l3c1.classList.contains("joueur1") ||
		
////////////
//joueur 2//
////////////

//Les Lignes//

/*		  1 2 3
		1 X X X
        2
		3         */

	$l1c1.classList.contains("joueur2") == $l1c2.classList.contains("joueur2") &&
	$l1c1.classList.contains("joueur2") == $l1c3.classList.contains("joueur2") ||
		
/*		  1 2 3
		1
        2 X X X
		3         */

	$l2c1.classList.contains("joueur2") == $l2c2.classList.contains("joueur2") &&
	$l2c1.classList.contains("joueur2") == $l2c3.classList.contains("joueur2") ||

/*		  1 2 3
		1
		2 
		3 X X X    */

	$l3c1.classList.contains("joueur2") == $l3c2.classList.contains("joueur2") &&
	$l3c1.classList.contains("joueur2") == $l3c3.classList.contains("joueur2") ||

//Les Colonnes//

/*		  1 2 3
		1 X 
        2 X
		3 X        */

	$l1c1.classList.contains("joueur2") == $l2c1.classList.contains("joueur2") &&
	$l1c1.classList.contains("joueur2") == $l3c1.classList.contains("joueur2") ||
		
/*		  1 2 3
		1   X
        2   X
		3   X     */

	$l1c2.classList.contains("joueur2") == $l2c2.classList.contains("joueur2") &&
	$l1c2.classList.contains("joueur2") == $l3c2.classList.contains("joueur2") ||

/*		  1 2 3
		1     X
		2     X
		3     X    */

	$l3c1.classList.contains("joueur2") == $l3c2.classList.contains("joueur2") &&
	$l3c1.classList.contains("joueur2") == $l3c3.classList.contains("joueur2") ||

//Les Diagonales//

/*		  1 2 3
		1 X 
        2   X
		3     X        */

	$l1c1.classList.contains("joueur2") == $l2c2.classList.contains("joueur2") &&
	$l1c1.classList.contains("joueur2") == $l3c3.classList.contains("joueur2") ||
		
/*		  1 2 3
		1     X
        2   X
		3 X     */

	$l1c3.classList.contains("joueur2") == $l2c2.classList.contains("joueur2") &&
	$l1c3.classList.contains("joueur2") == $l3c1.classList.contains("joueur2") 
		


////////////
//résultat//
////////////
		)
		{$messages.innerHTML="Victoire";
		setTimeout(function(){$messages.innerHTML=""}, 1500);
		};
	
	});



	




