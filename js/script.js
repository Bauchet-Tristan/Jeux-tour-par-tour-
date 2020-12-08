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
var attack_koh = document.getElementById("ak");

var vie_monstre = document.getElementById("mh");

var monstre1 = document.getElementById("m1");


//Fonction----------------------------------------------

function attack()
{
  attack_koh = document.getElementById("ak");

  vie_monstre = document.getElementById("mh");

  vie_monstre.innerHTML = vie_monstre.innerHTML - attack_koh.innerHTML;


  if (vie_monstre.innerHTML <= 0)
{
  monstre1.style.visibility="hidden";
}

}

//Code--------------------------------------------------

monstre1.onclick = attack;
