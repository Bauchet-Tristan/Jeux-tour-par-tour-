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
var i = 1;


//stat bouton_koh
var bouton_attack_joueur1 = document.getElementById("bouton_attack");
var attack_joueur1 = document.getElementById("ak");
var vie_joueur1 = document.getElementById("hk");



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

function attack(vie,attack,monstre)
{
  vie.innerHTML = vie.innerHTML - attack.innerHTML;

  if (vie.innerHTML <= 0)
  {
    monstre.style.visibility="hidden";
  }

}


function action()
{
  if (i == 1){
    monstre1.onclick = function(){attack(vie_monstre1,attack_joueur1,monstre1);}
    i=0;
  }
}



//Code--------------------------------------------------
bouton_attack_joueur1.onclick = function(){action();}



//monstre 1

//monstre 2
monstre2.onclick = function(){attack(vie_monstre2,attack_joueur1,monstre2);}

//monstre 3
monstre3.onclick = function(){attack(vie_monstre3,attack_joueur1,monstre3);}
