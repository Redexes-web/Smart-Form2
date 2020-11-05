
//cette variable contient l'element qui a l'ID "hamburger"
var hamburger = document.getElementById("hamburger")

//addEventListener est une fonction, elle permet d'ecouter un evenement sur un element specifique et si l'evenement survient une action peut-etre effectué

//Dans notre cas on va ecouter l'evenement click sur l'element #hamburger et lorsque le click surviendra le addEventListener lancera la fonction qui suit l'evenement
hamburger.addEventListener("click", function(){
  //Dans un premier temps la fonction recupere l'element avec l'ID topNav
  var navbar = document.getElementById("topNav");
  //Ensuite elle dis que
  //si navbar a la classe visible 
  if(navbar.classList.contains("visible"))
  {
    //il faut l'enlever
    navbar.classList.remove("visible");
  }
  //sinon (si elle ne l'a pas)
  else
  {
    //il faut ajouter cette classe visible
    navbar.classList.add("visible");
  }
}
);

//Pour resumer on ecoute chaque click effectué sur le petit logo hamburger et a chaque click on enleve ou on ajoute la classe visible (contenant seulement un display flex)sur la navbar qui permetra de la faire s'afficher ou disparaitre a chaque click sur le hamburger
