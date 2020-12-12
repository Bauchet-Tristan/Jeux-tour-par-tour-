//Variable----------------------------------------------
var joueur = 1;
var random = 1;
var perdu = 0;

var fight = document.getElementById("fight");
var magic = document.getElementById("magic");

var bouton_attack_joueur = document.getElementById("bouton_attack");
var bouton_poison_joueur = document.getElementById("bouton_poison");




//stat Koh joueur1
var last_move_joueur1 = "rien";
var vie_joueur1 = document.getElementById("j1h");
var mana_joueur1 = document.getElementById("j1m");
var attack_joueur1 = document.getElementById("j1a");
var defense_joueur1 = document.getElementById("j1d");

//stat Hass joueur2
var last_move_joueur2 = "rien";
var vie_joueur2 = document.getElementById("j2h");
var mana_joueur2 = document.getElementById("j2m");
var attack_joueur2 = document.getElementById("j2a");
var defense_joueur2 = document.getElementById("j2d");

//stat Hass joueur3
var last_move_joueur3 = "rien";
var vie_joueur3 = document.getElementById("j3h");
var mana_joueur3 = document.getElementById("j3m");
var attack_joueur3 = document.getElementById("j3a");
var defense_joueur3 = document.getElementById("j3d");




//stat Hass joueur4
var last_move_joueur4 = "rien";
var vie_joueur4 = document.getElementById("j4h");
var mana_joueur4 = document.getElementById("j4m");
var attack_joueur4 = document.getElementById("j4a");
var defense_joueur4 = document.getElementById("j4d");






//stat monstre1
var valid_attack_monstre1 = 0;
var attack_monstre1 = document.getElementById("ma1");
var vie_monstre1 = document.getElementById("mh1");
var monstre1 = document.getElementById("m1");

//stat monstre 2
var valid_attack_monstre2 = 0;
var attack_monstre2 = document.getElementById("ma2");
var vie_monstre2 = document.getElementById("mh2");
var monstre2 = document.getElementById("m2");

//stat monstre 3
var valid_attack_monstre3 = 0;
var attack_monstre3 = document.getElementById("ma3");
var vie_monstre3 = document.getElementById("mh3");
var monstre3 = document.getElementById("m3");



//Fonction----------------------------------------------
function switch_perso ()
{
  if (vie_monstre1.innerHTML <= 0 && vie_monstre2.innerHTML <= 0 && vie_monstre3.innerHTML <= 0)
  {
    alert("vous avez gagnez pour recommencer recharger la page");
    joueur =6;
  }

  if(perdu == 1)
  {
    alert("vous avez perdu pour recommencer recharger la page");
    joueur =6;
  }

  joueur = joueur + 1;

  if (vie_joueur1.innerHTML == 0 && joueur == 1)
  {
    joueur = joueur + 1;
  }

  if (vie_joueur2.innerHTML == 0 && joueur == 2)
  {
    joueur = joueur + 1;
  }

  if (vie_joueur3.innerHTML == 0 && joueur == 3)
  {
    joueur = joueur + 1;
  }

  if (vie_joueur4.innerHTML == 0 && joueur == 4)
  {
    joueur = joueur + 1;
  }

  if (joueur == 5)
  {
    joueur = 0;
    monsters_attack();
  }


}





function action_fight()
{
  bouton_attack_joueur.onclick = function(){attack();}
}


function attack()
{

    if (joueur==1 && last_move_joueur1 != "attack")
    {
      last_move_joueur1 = "attack"
      monstre1.onclick = function(){cible_attack(vie_monstre1,attack_joueur1,monstre1);}
      monstre2.onclick = function(){cible_attack(vie_monstre2,attack_joueur1,monstre2);}
      monstre3.onclick = function(){cible_attack(vie_monstre3,attack_joueur1,monstre3);}
    }

    if (joueur==2)
    {
      last_move_joueur2 = "attack"
      monstre1.onclick = function(){cible_attack(vie_monstre1,attack_joueur2,monstre1);}
      monstre2.onclick = function(){cible_attack(vie_monstre2,attack_joueur2,monstre2);}
      monstre3.onclick = function(){cible_attack(vie_monstre3,attack_joueur2,monstre3);}
    }

    if (joueur==3)
    {
      last_move_joueur2 = "attack"
      monstre1.onclick = function(){cible_attack(vie_monstre1,attack_joueur3,monstre1);}
      monstre2.onclick = function(){cible_attack(vie_monstre2,attack_joueur3,monstre2);}
      monstre3.onclick = function(){cible_attack(vie_monstre3,attack_joueur3,monstre3);}
    }

    if (joueur==4)
    {
      last_move_joueur4 = "attack"
      monstre1.onclick = function(){cible_attack(vie_monstre1,attack_joueur4,monstre1);}
      monstre2.onclick = function(){cible_attack(vie_monstre2,attack_joueur4,monstre2);}
      monstre3.onclick = function(){cible_attack(vie_monstre3,attack_joueur4,monstre3);}
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

  switch_perso();
}








function action_magic()
{
  bouton_poison_joueur.onclick = function(){poison();}
}


function poison()
{
    if (joueur==1 || joueur==2 || joueur==3 || joueur==4)
    {
      monstre1.onclick = function(){cible_poison(vie_monstre1,monstre1);}
      monstre2.onclick = function(){cible_poison(vie_monstre2,monstre2);}
      monstre3.onclick = function(){cible_poison(vie_monstre3,monstre3);}

      bouton_poison_joueur.onclick = false;
    }
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

  switch_perso();
}









function monsters_attack ()
{
  // monstre 1 attack
  while (valid_attack_monstre1 == 0 && vie_monstre1.innerHTML > 0 )
  {
    random = Math.floor(Math.random() * (4 - 1 + 1) + 1);
    valid_attack_monstre1 = cible_monsters_attack (attack_monstre1,valid_attack_monstre1);
  }


  // monstre 2 attack
  while (valid_attack_monstre2 == 0 && vie_monstre2.innerHTML > 0 )
  {
    random = Math.floor(Math.random() * (4 - 1 + 1) + 1);
    valid_attack_monstre2 = cible_monsters_attack (attack_monstre2,valid_attack_monstre2);
  }


  // monstre 3 attack
  while (valid_attack_monstre3 == 0 && vie_monstre3.innerHTML > 0 )
  {
    random = Math.floor(Math.random() * (4 - 1 + 1) + 1);
    valid_attack_monstre3 = cible_monsters_attack (attack_monstre3,valid_attack_monstre3);
  }

  valid_attack_monstre1 = 0;

  valid_attack_monstre2 = 0;

  valid_attack_monstre3 = 0;

  switch_perso();
}



function cible_monsters_attack (attack_monstre,valid_attack_monstre)
{
  if(random == 1 && vie_joueur1.innerHTML > 0)
  {
    vie_joueur1.innerHTML = vie_joueur1.innerHTML - (attack_monstre.innerHTML - defense_joueur1.innerHTML);
    valid_attack_monstre = 1;
  }

  if(random == 2 && vie_joueur2.innerHTML > 0)
  {
    vie_joueur2.innerHTML = vie_joueur2.innerHTML - (attack_monstre.innerHTML - defense_joueur2.innerHTML);
    valid_attack_monstre = 1;
  }

  if(random == 3 && vie_joueur3.innerHTML > 0)
  {
    vie_joueur3.innerHTML = vie_joueur3.innerHTML - (attack_monstre.innerHTML - defense_joueur3.innerHTML);
    valid_attack_monstre = 1;
  }

  if(random == 4 && vie_joueur4.innerHTML > 0)
  {
    vie_joueur4.innerHTML = vie_joueur4.innerHTML - (attack_monstre.innerHTML - defense_joueur4.innerHTML);
    valid_attack_monstre = 1;
  }

  mort_perso();

  if (vie_joueur4.innerHTML == 0 && vie_joueur3.innerHTML == 0 && vie_joueur2.innerHTML == 0 && vie_joueur1.innerHTML == 0)
  {
    valid_attack_monstre = 1;
    perdu = 1;
  }

  return valid_attack_monstre;

}




function mort_perso ()
{

  if (vie_joueur1.innerHTML<= 0)
  {
    vie_joueur1.innerHTML = 0;
  }

  if (vie_joueur2.innerHTML<= 0)
  {
    vie_joueur2.innerHTML = 0;
  }

  if (vie_joueur3.innerHTML<= 0)
  {
    vie_joueur3.innerHTML = 0;
  }

  if (vie_joueur4.innerHTML<= 0)
  {
    vie_joueur4.innerHTML = 0;
  }

}
//Code--------------------------------------------------

fight.onclick = function(){action_fight();}

magic.onclick = function(){action_magic();}
