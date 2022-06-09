//Recupération des élements du dom
let img = document.querySelectorAll("img");
let resultat = document.getElementById("result");
let idUser =document.getElementById("user");
let idOrdi =document.getElementById("ordi");
let pointU = document.getElementById("pointU");
let pointO = document.getElementById("pointO");

// Variables qui récupère le choix de l'utilisateur et du computer
let recupChoixUser;
let recupChoixComputer;

// Declaration de la variable qui recupère l'index 
let indexComputer;

//Compteur des points utilisateurs et computer
let pointUser = 0;
let pointComputer = 0;

//choix du computer
let itemComputer = ["Pierre", "Feuille", "Ciseaux"];

//Function qui recupère le choix de l'utilisateur
const choixDuJoueur = (event) => {
   
  recupChoixUser = event.target.id;

  if (recupChoixUser === "Pierre") {
   idUser.innerHTML = recupChoixUser
  } else if (recupChoixUser === "Feuille") {
   idUser.innerHTML = recupChoixUser
  } else if (recupChoixUser === "Ciseaux") {
   idUser.innerHTML = recupChoixUser
  }
  
  choixDuComputer();

  return event.target.id;
};
//Ecoute d'évènement 
window.addEventListener("click", choixDuJoueur);

//Function du choix du computer
const choixDuComputer = () => {
  indexComputer = Math.floor(Math.random() * itemComputer.length);
  recupChoixComputer = itemComputer[indexComputer];

  idOrdi.innerHTML = recupChoixComputer
  comparaison(recupChoixComputer);
  
};
const remettreAzero = () => {

   pointUser = 0;
   pointComputer = 0;
   pointO.innerHTML = pointComputer;
   pointU.innerHTML = pointUser;
  
}


//Function de comparaison entre le choix utilisateur et computer
const comparaison = (recupChoixComputer) => {
  if (recupChoixUser === recupChoixComputer) {
   resultat.innerHTML = "Egalité !!";
  } else if (
    (recupChoixUser === "Pierre" && recupChoixComputer === "Ciseaux") ||
    (recupChoixUser === "Feuille" && recupChoixComputer === "Pierre") ||
    (recupChoixUser === "Ciseaux" && recupChoixComputer === "Feuille")
  ) {
   pointUser++;
   pointU.innerHTML = pointUser;
    console.log(pointUser);
    resultat.innerHTML ="Vous avez gagné !!";
  } else if (
    (recupChoixComputer === "Pierre" && recupChoixUser === "Ciseaux") ||
    (recupChoixComputer === "Feuille" && recupChoixUser === "Pierre") ||
    (recupChoixComputer === "Ciseaux" && recupChoixUser === "Feuille")
  ) {
   pointComputer++;
   pointO.innerHTML = pointComputer;
    console.log(pointComputer);
    resultat.innerHTML = "L'ordinateur gagne !!" ;
  }
  if(pointUser == 2 || pointComputer == 2){
     setTimeout(() => remettreAzero(),1000)
  
  }
  
};



  

