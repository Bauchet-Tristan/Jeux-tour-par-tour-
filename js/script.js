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
var joueur = 1;

var fight = document.getElementById("fight");
var magic = document.getElementById("magic");

var bouton_attack_joueur = document.getElementById("bouton_attack");
var bouton_poison_joueur = document.getElementById("bouton_poison");




//stat Koh joueur1
var attack_joueur1 = document.getElementById("j1a");
var vie_joueur1 = document.getElementById("j1h");


//stat Hass joueur2
var attack_joueur2 = document.getElementById("j2a");
var vie_joueur2 = document.getElementById("j2h");




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


function action_fight()
{
  bouton_attack_joueur.onclick = function(){attack();}
}


function attack()
{
    if (joueur==1)
    {
      monstre1.onclick = function(){cible_attack(vie_monstre1,attack_joueur1,monstre1);}
      monstre2.onclick = function(){cible_attack(vie_monstre2,attack_joueur1,monstre2);}
      monstre3.onclick = function(){cible_attack(vie_monstre3,attack_joueur1,monstre3);}
    }

    if (joueur==2)
    {
      monstre1.onclick = function(){cible_attack(vie_monstre1,attack_joueur2,monstre1);}
      monstre2.onclick = function(){cible_attack(vie_monstre2,attack_joueur2,monstre2);}
      monstre3.onclick = function(){cible_attack(vie_monstre3,attack_joueur2,monstre3);}
    }

  bouton_attack_joueur.onclick = false;
}


function cible_attack(vie,attack,monstre)
{
  vie.innerHTML = vie.innerHTML - attack.innerHTML;

  if (vie.innerHTML <= 0)
  {
    monstre.style.visibility="hidden";
  }

  monstre1.onclick = false ;
  monstre2.onclick = false ;
  monstre3.onclick = false ;
}








function action_magic()
{
  bouton_poison_joueur.onclick = function(){poison();}
}


function poison()
{
    monstre1.onclick = function(){cible_poison(vie_monstre1,monstre1);}
    monstre2.onclick = function(){cible_poison(vie_monstre2,monstre2);}
    monstre3.onclick = function(){cible_poison(vie_monstre3,monstre3);}

    bouton_poison_joueur.onclick = false;
}


function cible_poison(vie,monstre)
{
  vie.innerHTML = vie.innerHTML - 50;

  if (vie.innerHTML <= 0)
  {
    monstre.style.visibility="hidden";
  }

  monstre1.onclick = false ;
  monstre2.onclick = false ;
  monstre3.onclick = false ;
}


//Code--------------------------------------------------

fight.onclick = function(){action_fight();}

magic.onclick = function(){action_magic();}
