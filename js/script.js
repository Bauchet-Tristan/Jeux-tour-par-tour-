// Write JavaScript here

// variable


/*var teste = document.getElementById("teste"); // variable de teste en direct
teste.innerHTML = 1; // variable de teste en direct

teste.onclick = showAlert ; // onclick teste

function showAlert() // teste de fonction
{
  teste.innerHTML = 2;
}
  if(vie.innerHTML > attack_koh.innerHTML)
    vie.innerHTML = "boby";*/



//Variable----------------------------------------------
var joueur = 0;
var fight = document.getElementById("fight");
var change = document.getElementById("change");
var bouton_attack_joueur = document.getElementById("bouton_attack");

//stat Hass joueur2
var attack_joueur2 = document.getElementById("j2a");
var vie_joueur2 = document.getElementById("j2h");


//stat Koh joueur1
var attack_joueur1 = document.getElementById("j1a");
var vie_joueur1 = document.getElementById("j1h");



//stat monstre1
var vie_monstre1 = document.getElementById("mh1");
var monstre1 = document.getElementById("m1");

//stat monstre 2
var vie_monstre2 = document.getElementById("mh2");
var monstre2 = document.getElementById("m2");

//stat monstre 3
var vie_monstre3 = document.getElementById("mh3");
var monstre3 = document.getElementById("m3");


//Fonction----------------------------------------------

function cible_attack(vie,attack,monstre)
{
  vie.innerHTML = vie.innerHTML - attack.innerHTML;

  if (vie.innerHTML <= 0)
  {
    monstre.style.visibility="hidden";
  }
  joueur = 1;
}


function attack()
{
  monstre1.onclick = function(){cible_attack(vie_monstre1,attack_joueur1,monstre1);}
  monstre2.onclick = function(){cible_attack(vie_monstre2,attack_joueur1,monstre2);}
  monstre3.onclick = function(){cible_attack(vie_monstre3,attack_joueur1,monstre3);}

  if (joueur==1)
  {
    alert("boby");
    v=0;
    action_choix();
  }

}


function action_choix()
{
  bouton_attack_joueur.onclick = function(){attack();}
}


//Code--------------------------------------------------

fight.onclick = function(){action_choix();}
