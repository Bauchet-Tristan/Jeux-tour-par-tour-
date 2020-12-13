//Variable----------------------------------------------
var joueur = 1;
var random = 1;
var perdu = 0;

var help = document.getElementById("help");

//bouton d'action premiere
var fight = document.getElementById("fight");
var magic = document.getElementById("magic");

//bouton d'action seconde
var bouton_attack = document.getElementById("bouton_attack");
var bouton_magic = document.getElementById("bouton_magic");
var bouton_defense = document.getElementById("bouton_defense");



// variable pour la capacité soin
var cible = parseInt(0);
var cible12 = parseInt(0);
var cible34 = parseInt(0);
var retenu_vie12 = parseInt(0);
var retenu_vie34 = parseInt(0);

//stat Koh joueur1
var name_joueur1 = document.getElementById("name_koh");
var last_move_joueur1 = "rien";

var vie_joueur1_no_int = document.getElementById("j1h");
var vie_joueur1 = parseInt(vie_joueur1_no_int.innerHTML);
var vie_joueur1_max = vie_joueur1;

var mana_joueur1 = document.getElementById("j1m");
var attack_joueur1 = document.getElementById("j1a");
var defense_joueur1 = document.getElementById("j1d");


//stat Hass joueur2
var name_joueur2 = document.getElementById("name_hass");
var last_move_joueur2 = "rien";

var vie_joueur2_no_int = document.getElementById("j2h");
var vie_joueur2 = parseInt(vie_joueur2_no_int.innerHTML);
var vie_joueur2_max = parseInt(vie_joueur2.innerHTML);

var mana_joueur2 = document.getElementById("j2m");
var attack_joueur2 = document.getElementById("j2a");
var defense_joueur2 = document.getElementById("j2d");


//stat Hass joueur3
var name_joueur3 = document.getElementById("name_muri");
var last_move_joueur3 = "rien";

var vie_joueur3_no_int = document.getElementById("j3h");
var vie_joueur3 = parseInt(vie_joueur3_no_int.innerHTML);
var vie_joueur3_max = parseInt(vie_joueur3.innerHTML);

var mana_joueur3 = document.getElementById("j3m");
var attack_joueur3 = document.getElementById("j3a");
var defense_joueur3 = document.getElementById("j3d");


//stat Hass joueur4
var name_joueur4 = document.getElementById("name_cham");
var last_move_joueur4 = "rien";

var vie_joueur4_no_int = document.getElementById("j4h");
var vie_joueur4 = parseInt(vie_joueur4_no_int.innerHTML);
var vie_joueur4_max = parseInt(vie_joueur4.innerHTML);

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
  bouton_magic.onclick = false;
  bouton_attack.style.color = "white";
  bouton_defense.style.color = "white";
  bouton_magic.style.color = "white";
  bouton_magic.innerHTML = "???";
  help.innerHTML = "Your actual character is in yellow. <br> Choose a action between Fight and Magic.";


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

  color_perso();

  if (vie_joueur1_no_int.innerHTML == 0 && joueur == 1)
  {
    joueur = joueur + 1;
  }

  if (vie_joueur2_no_int.innerHTML == 0 && joueur == 2)
  {
    joueur = joueur + 1;
  }

  if (vie_joueur3_no_int.innerHTML == 0 && joueur == 3)
  {
    joueur = joueur + 1;
  }

  if (vie_joueur4_no_int.innerHTML == 0 && joueur == 4)
  {
    joueur = joueur + 1;
  }

  if (joueur == 5)
  {
    joueur = 0;
    monsters_attack();
  }

}


function color_perso()
{
  if(joueur == 1)
  {
    name_joueur4.style.color= "white";
    name_joueur1.style.color= "yellow";
  }

  if(joueur == 2)
  {
    name_joueur1.style.color= "white";
    name_joueur2.style.color= "yellow";
  }

  if(joueur == 3)
  {
    name_joueur2.style.color= "white";
    name_joueur3.style.color= "yellow";
  }

  if(joueur == 4)
  {
    name_joueur3.style.color= "white";
    name_joueur4.style.color= "yellow";
  }

}


function action_fight()
{
  monstre1.onclick = false ;
  monstre2.onclick = false ;
  monstre3.onclick = false ;

  help.innerHTML = "Attack = Attack your ennemy with your actual character attack stat. <br> Defend = Monsters will not deal damage to your actual character.";
  bouton_magic.style.color = "white";
  bouton_magic.innerHTML = "???";

  bouton_attack.style.color = "Red";
  bouton_attack.onclick = function(){attack();}

  bouton_defense.style.color = "grey";
  bouton_defense.onclick = function(){defense();}

  fight.onclick = false;
  fight.onclick = function(){action_fight();}
}



function defense()
{
  help.innerHTML = "Your actual character is in yellow. <br> Choose a action between Fight and Magic.";

  if (joueur==1 && last_move_joueur1 != "defense")
  {
    last_move_joueur1 = "defense";
  }

  if (joueur==2 && last_move_joueur2 != "defense")
  {
    last_move_joueur2 = "defense";
  }

  if (joueur==3 && last_move_joueur3 != "defense")
  {
    last_move_joueur3 = "defense";
  }

  if (joueur==4 && last_move_joueur4 != "defense")
  {
    last_move_joueur4 = "defense";
  }

  bouton_defense.onclick = false;
  bouton_attack.onclick = false;
  switch_perso();

}



function attack()
{
  help.innerHTML = "Choose the monster you wanna attack by clicking on it.";

  if (joueur==1 && last_move_joueur1 != "attack")
  {
    last_move_joueur1 = "attack"
    monstre1.onclick = function(){cible_attack(vie_monstre1,attack_joueur1,monstre1);}
    monstre2.onclick = function(){cible_attack(vie_monstre2,attack_joueur1,monstre2);}
    monstre3.onclick = function(){cible_attack(vie_monstre3,attack_joueur1,monstre3);}
  }

  if (joueur==2 && last_move_joueur2 != "attack")
  {
    last_move_joueur2 = "attack"
    monstre1.onclick = function(){cible_attack(vie_monstre1,attack_joueur2,monstre1);}
    monstre2.onclick = function(){cible_attack(vie_monstre2,attack_joueur2,monstre2);}
    monstre3.onclick = function(){cible_attack(vie_monstre3,attack_joueur2,monstre3);}
  }

  if (joueur==3 && last_move_joueur3 != "attack")
  {
    last_move_joueur3 = "attack"
    monstre1.onclick = function(){cible_attack(vie_monstre1,attack_joueur3,monstre1);}
    monstre2.onclick = function(){cible_attack(vie_monstre2,attack_joueur3,monstre2);}
    monstre3.onclick = function(){cible_attack(vie_monstre3,attack_joueur3,monstre3);}
  }

  if (joueur==4 && last_move_joueur4 != "attack")
  {
    last_move_joueur4 = "attack"
    monstre1.onclick = function(){cible_attack(vie_monstre1,attack_joueur4,monstre1);}
    monstre2.onclick = function(){cible_attack(vie_monstre2,attack_joueur4,monstre2);}
    monstre3.onclick = function(){cible_attack(vie_monstre3,attack_joueur4,monstre3);}
  }

  bouton_attack.onclick = false;
  bouton_defense.onclick = false;
}


function cible_attack(vie,attack,monstre)
{
  help.innerHTML = "Your actual character is in yellow. <br> Choose a action between Fight and Magic.";

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
  monstre1.onclick = false ;
  monstre2.onclick = false ;
  monstre3.onclick = false ;

  bouton_magic.innerHTML = "???";
  bouton_magic.style.color = "white";
  bouton_attack.style.color = "white";
  bouton_defense.style.color = "white";
  help.innerHTML = "All your characters got a different magic spell. <br> If you have enought mana you can click on ??? to see the magic spell decription.";

  if(joueur == 1 && last_move_joueur1 != "magic" )
  {
    last_move_joueur1 = "magic"
    if (mana_joueur1.innerHTML >= 100)
    {
      bouton_magic.onclick = function(){kirin();}
    }
    else
    {
      bouton_magic.innerHTML ="mana insufisante";
    }
  }

  if(joueur == 2 && last_move_joueur2 != "magic" )
  {
    last_move_joueur2 = "magic"

    if (mana_joueur2.innerHTML >= 50)
    {

      bouton_magic.onclick = function(){wind();}
    }
    else
    {
      bouton_magic.innerHTML ="mana insufisante";
    }
  }

  if(joueur == 3 && last_move_joueur3 != "magic" )
  {
    last_move_joueur3 = "magic"

    if (mana_joueur3.innerHTML >= 50)
    {
      bouton_magic.innerHTML = "Poison = 50 mana";
      bouton_magic.onclick = function(){poison();}
    }
    else
    {
      bouton_magic.innerHTML ="mana insufisante";
    }
  }

  if(joueur == 4 && last_move_joueur4 != "magic")
  {
    last_move_joueur4 = "magic"

    if (mana_joueur4.innerHTML >= 50)
    {
      bouton_magic.innerHTML = "Soin = 50 mana";
      bouton_magic.onclick = function(){soin();}
    }
    else
    {
      bouton_magic.innerHTML ="mana insufisante";
    }
  }

  magic.onclick = false;
  magic.onclick = function(){action_magic();}
}


function kirin()
{
  help.innerHTML = "You need 100 mana to activate this magic spell. <br> Kirin = You deal 100 damage.";
  bouton_magic.innerHTML = "Kirin";
  bouton_magic.style.color = "aqua";

  monstre1.onclick = function(){cible_kirin(vie_monstre1,monstre1);}
  monstre2.onclick = function(){cible_kirin(vie_monstre2,monstre2);}
  monstre3.onclick = function(){cible_kirin(vie_monstre3,monstre3);}

  magic.onclick = false;
  magic.onclick = function(){action_magic();}
}


function cible_kirin(vie,monstre)
{
  //mana cost
  mana_joueur1.innerHTML = mana_joueur1.innerHTML - 100;

  //effect fire
  vie.innerHTML = vie.innerHTML - 100;

  if (vie.innerHTML <= 0)
  {
    monstre.style.visibility="hidden";
  }

  monstre1.onclick = false ;
  monstre2.onclick = false ;
  monstre3.onclick = false ;

  switch_perso();
}


function wind()
{
  bouton_magic.innerHTML = "Wind = 50 mana";

  monstre1.onclick = function(){cible_wind(vie_monstre1,monstre1);}
  monstre2.onclick = function(){cible_wind(vie_monstre2,monstre2);}
  monstre3.onclick = function(){cible_wind(vie_monstre3,monstre3);}

  magic.onclick = false;
  magic.onclick = function(){action_magic();}

}


function cible_wind(vie,monstre)
{
  mana_joueur2.innerHTML = mana_joueur2.innerHTML - 50;
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


function poison()
{

  monstre1.onclick = function(){cible_poison(vie_monstre1,monstre1);}
  monstre2.onclick = function(){cible_poison(vie_monstre2,monstre2);}
  monstre3.onclick = function(){cible_poison(vie_monstre3,monstre3);}

  bouton_magic.onclick = false;
  magic.onclick = false;
  magic.onclick = function(){action_magic();}

}


function cible_poison(vie,monstre)
{
  mana_joueur3.innerHTML = mana_joueur3.innerHTML - 50;
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


function soin()
{
  //Mana cost
  mana_joueur4.innerHTML = mana_joueur4.innerHTML - 50;

  //Trouve le pus petit
  cible = cible_soin();
  alert(cible);

  //Effet Soin
  if (cible == parseInt(1))
  {

    vie_joueur1 = vie_joueur1 - (-50);

    if (vie_joueur1 > vie_joueur1_max)
    {
      vie_joueur1 = vie_joueur1_max;
    }
  }


  if (cible == parseInt(2))
  {

    vie_joueur2 = vie_joueur2 - (-50);

    if (vie_joueur2 > vie_joueur2_max)
    {
      vie_joueur2 = vie_joueur2_max;
    }
  }

  if (cible == parseInt(3))
  {

    vie_joueur3 = vie_joueur3 - (-50);

    if (vie_joueur3 > vie_joueur3_max)
    {
      vie_joueur3 = vie_joueur3_max;
    }
  }

  if (cible == parseInt(4))
  {

    vie_joueur4 = vie_joueur4 - (-50);

    if (vie_joueur4 > vie_joueur4_max)
    {
      vie_joueur4 = vie_joueur4_max;
    }
  }

  bouton_magic.onclick = false;
  magic.onclick = false;
  magic.onclick = function(){action_magic();}
  switch_perso();
}


function cible_soin()
{

  if(vie_joueur1 <= vie_joueur2)
  {
    retenu_vie12= vie_joueur1;
    cible12 = parseInt(1);
  }
  else
  {
    retenu_vie12=vie_joueur2;
    cible12 = parseInt(2);
  }


  if(vie_joueur3 <= vie_joueur4)
  {
    retenu_vie34 = vie_joueur3;
    cible34 = parseInt(3);
  }
  else
  {
    retenu_vie34 = vie_joueur4;
    cible34 = parseInt(4);
  }


  if (retenu_vie12 <= retenu_vie34)
  {
    return cible12;
  }
  else
  {
    return cible34;
  }

}




function monsters_attack ()
{

  // monstre 1 attack
  while (valid_attack_monstre1 == 0 && vie_monstre1.innerHTML > 0 )
  {
    alert("monstre1");
    random = Math.floor(Math.random() * (4 - 1 + 1) + 1);
    valid_attack_monstre1 = cible_monsters_attack (attack_monstre1,valid_attack_monstre1);
  }


  // monstre 2 attack
  while (valid_attack_monstre2 == 0 && vie_monstre2.innerHTML > 0 )
  {
    alert("monstre2");
    random = Math.floor(Math.random() * (4 - 1 + 1) + 1);
    valid_attack_monstre2 = cible_monsters_attack (attack_monstre2,valid_attack_monstre2);
  }


  // monstre 3 attack
  while (valid_attack_monstre3 == 0 && vie_monstre3.innerHTML > 0 )
  {
    alert("monstre3");
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

  if(random == 1 && vie_joueur1_no_int.innerHTML > 0)
  {
    if(last_move_joueur1 != "defense")
    {
      alert("attack joueur1")
      vie_joueur1_no_int.innerHTML = vie_joueur1_no_int.innerHTML - (attack_monstre.innerHTML - defense_joueur1.innerHTML);
    }
    valid_attack_monstre = 1;
  }

  if(random == 2 && vie_joueur2_no_int.innerHTML > 0)
  {
    if(last_move_joueur2 != "defense")
    {
      alert("attack joueur2");
      vie_joueur2_no_int.innerHTML = vie_joueur2_no_int.innerHTML - (attack_monstre.innerHTML - defense_joueur2.innerHTML);
    }
    valid_attack_monstre = 1;
  }

  if(random == 3 && vie_joueur3_no_int.innerHTML > 0)
  {
    if(last_move_joueur3 != "defense")
    {
      alert("attack joueur3");
      vie_joueur3_no_int.innerHTML = vie_joueur3_no_int.innerHTML - (attack_monstre.innerHTML - defense_joueur3.innerHTML);
    }
    valid_attack_monstre = 1;
  }

  if(random == 4 && vie_joueur4_no_int.innerHTML > 0)
  {
    if(last_move_joueur4 != "defense")
    {
      alert("attack joueur4");
      vie_joueur4_no_int.innerHTML = vie_joueur4_no_int.innerHTML - (attack_monstre.innerHTML - defense_joueur4.innerHTML);
    }
    valid_attack_monstre = 1;
  }


  mort_perso();

  if (vie_joueur4_no_int.innerHTML == 0 && vie_joueur3_no_int.innerHTML == 0 && vie_joueur2.innerHTML == 0 && vie_joueur1_no_int.innerHTML == 0)
  {
    valid_attack_monstre = 1;
    perdu = 1;
  }

  return valid_attack_monstre;

}




function mort_perso ()
{

  if (vie_joueur1_no_int.innerHTML<= 0)
  {
    vie_joueur1_no_int.innerHTML = 0;
  }

  if (vie_joueur2_no_int.innerHTML<= 0)
  {
    vie_joueur2_no_int.innerHTML = 0;
  }

  if (vie_joueur3_no_int.innerHTML<= 0)
  {
    vie_joueur3_no_int.innerHTML = 0;
  }

  if (vie_joueur4_no_int.innerHTML<= 0)
  {
    vie_joueur4_no_int.innerHTML = 0;
  }

}

//Code--------------------------------------------------
color_perso();
help.innerHTML = "Your actual character is in yellow. <br> Choose a action between Fight and Magic.";

fight.onclick = function(){action_fight();}

magic.onclick = function(){action_magic();}
