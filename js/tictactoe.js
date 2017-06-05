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

var tourJoueur;
var $zoneDeJeu = document.getElementById("jeu");
var $messages = document.getElementById("messages");
var coupsjoués = 0;

/*Définit le tour du joueur*/

tourJoueur = Math.floor(2*Math.random()+1)

/*Couleur du fond de la couleur du joueur du quel c'est le tour*/

function couleurJoueur(tourJoueur) {
switch(tourJoueur) {
	case 1 :
	$zoneDeJeu.classList.remove("j1", "j2"); //réinisialise la classe
	$zoneDeJeu.classList.add("j1"); 
	break;
	case 2 :
	$zoneDeJeu.classList.remove("j1", "j2"); //réinisialise la classe
	$zoneDeJeu.classList.add("j2");
	break;
	};
}

couleurJoueur(tourJoueur);

/*Action au clic*/

$zoneDeJeu.addEventListener('click', function(e) {


/*Teste le tour du joueur et ajoute une class CSS*/
	
	if (e.target.classList == "case") {
		switch(tourJoueur) {
			case 1 :
			e.target.classList.add("joueur1");
			break;
			case 2 :
			e.target.classList.add("joueur2");
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

	$l1c1.classList.contains("joueur1") === $l1c2.classList.contains("joueur1") &&
	$l1c1.classList.contains("joueur1") === $l1c3.classList.contains("joueur1") &&
	$l1c1.classList.contains("joueur1") === true ||
		
/*		  1 2 3
		1
        2 X X X
		3         */

	$l2c1.classList.contains("joueur1") === $l2c2.classList.contains("joueur1") &&
	$l2c1.classList.contains("joueur1") === $l2c3.classList.contains("joueur1") &&
	$l2c1.classList.contains("joueur1") === true ||


/*		  1 2 3
		1
		2 
		3 X X X    */

	$l3c1.classList.contains("joueur1") === $l3c2.classList.contains("joueur1") &&
	$l3c1.classList.contains("joueur1") === $l3c3.classList.contains("joueur1") &&
	$l3c1.classList.contains("joueur1") === true ||


//Les Colonnes//

/*		  1 2 3
		1 X 
        2 X
		3 X        */

	$l1c1.classList.contains("joueur1") === $l2c1.classList.contains("joueur1") &&
	$l1c1.classList.contains("joueur1") === $l3c1.classList.contains("joueur1") &&
	$l1c1.classList.contains("joueur1") === true ||
		
/*		  1 2 3
		1   X
        2   X
		3   X     */

	$l1c2.classList.contains("joueur1") === $l2c2.classList.contains("joueur1") &&
	$l1c2.classList.contains("joueur1") === $l3c2.classList.contains("joueur1") &&
	$l1c2.classList.contains("joueur1") === true ||

/*		  1 2 3
		1     X
		2     X
		3     X    */

	$l3c1.classList.contains("joueur1") === $l3c2.classList.contains("joueur1") &&
	$l3c1.classList.contains("joueur1") === $l3c3.classList.contains("joueur1") &&
	$l3c1.classList.contains("joueur1") === true ||

//Les Diagonales//

/*		  1 2 3
		1 X 
        2   X
		3     X        */

	$l1c1.classList.contains("joueur1") === $l2c2.classList.contains("joueur1") &&
	$l1c1.classList.contains("joueur1") === $l3c3.classList.contains("joueur1") &&
	$l1c1.classList.contains("joueur1") === true ||
		
/*		  1 2 3
		1     X
        2   X
		3 X     */

	$l1c3.classList.contains("joueur1") === $l2c2.classList.contains("joueur1") &&
	$l1c3.classList.contains("joueur1") === $l3c1.classList.contains("joueur1") &&
	$l1c3.classList.contains("joueur1") === true ||
		
////////////
//joueur 2//
////////////

//Les Lignes//

/*		  1 2 3
		1 X X X
        2
		3         */

	$l1c1.classList.contains("joueur2") === $l1c2.classList.contains("joueur2") &&
	$l1c1.classList.contains("joueur2") === $l1c3.classList.contains("joueur2") &&
	$l1c1.classList.contains("joueur2") === true ||
		
/*		  1 2 3
		1
        2 X X X
		3         */

	$l2c1.classList.contains("joueur2") === $l2c2.classList.contains("joueur2") &&
	$l2c1.classList.contains("joueur2") === $l2c3.classList.contains("joueur2") &&
	$l2c1.classList.contains("joueur2") === true ||

/*		  1 2 3
		1
		2 
		3 X X X    */

	$l3c1.classList.contains("joueur2") === $l3c2.classList.contains("joueur2") &&
	$l3c1.classList.contains("joueur2") === $l3c3.classList.contains("joueur2") &&
	$l3c1.classList.contains("joueur2") === true ||

//les colonnes//

/*		  1 2 3
		1 X 
        2 X
		3 X        */

	$l1c1.classList.contains("joueur2") === $l2c1.classList.contains("joueur2") &&
	$l1c1.classList.contains("joueur2") === $l3c1.classList.contains("joueur2") &&
	$l1c1.classList.contains("joueur2") === true ||
		
/*		  1 2 3
		1   X
        2   X
		3   X     */

	$l1c2.classList.contains("joueur2") === $l2c2.classList.contains("joueur2") &&
	$l1c2.classList.contains("joueur2") === $l3c2.classList.contains("joueur2") &&
	$l1c2.classList.contains("joueur2") === true ||
/*		  1 2 3
		1     X
		2     X
		3     X    */

	$l3c1.classList.contains("joueur2") === $l3c2.classList.contains("joueur2") &&
	$l3c1.classList.contains("joueur2") === $l3c3.classList.contains("joueur2") &&
	$l3c1.classList.contains("joueur2") === true ||

//Les Diagonales//

/*		  1 2 3
		1 X 
        2   X
		3     X        */

	$l1c1.classList.contains("joueur2") === $l2c2.classList.contains("joueur2") &&
	$l1c1.classList.contains("joueur2") === $l3c3.classList.contains("joueur2") &&
	$l1c1.classList.contains("joueur2") === true ||
		
/*		  1 2 3
		1     X
        2   X
		3 X     */

	$l1c3.classList.contains("joueur2") === $l2c2.classList.contains("joueur2") &&
	$l1c3.classList.contains("joueur2") === $l3c1.classList.contains("joueur2") &&
	$l1c3.classList.contains("joueur2") === true 
		


////////////
//résultat//
////////////
		) {$messages.innerHTML="Victoire, La partie va recommencer...";
		setTimeout(function(){$messages.innerHTML=""; restart(); }, 1500);
		};

		coupsjoués++;

		if (coupsjoués === 9) {
			$messages.innerHTML="Match nul ! La partie va recommencer...";
			setTimeout(function(){$messages.innerHTML=""; restart(); }, 1500);
		}

/* Changer de joueur */

		switch(tourJoueur) {
			case 1 :
			tourJoueur = 2 ;
			break ;
			case 2 : 
			tourJoueur = 1 ;
			break ;
		}

couleurJoueur(tourJoueur)
	
	});


/*Action de réinitialisation, se lance au moment du résultat d'un test réussis*/

function restart() {
	$l1c1.classList.remove("joueur1", "joueur2");
	$l1c2.classList.remove("joueur1", "joueur2");
	$l1c3.classList.remove("joueur1", "joueur2");
	$l2c1.classList.remove("joueur1", "joueur2");
	$l2c2.classList.remove("joueur1", "joueur2");
	$l2c3.classList.remove("joueur1", "joueur2");
	$l3c1.classList.remove("joueur1", "joueur2");
	$l3c2.classList.remove("joueur1", "joueur2");
	$l3c3.classList.remove("joueur1", "joueur2");
};




