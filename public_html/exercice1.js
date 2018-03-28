
function exercice01(){
var message ="hello world!";                        

var taille=length(message);

for (i=0; i<taille;i++){
    //console.log(message[i]);
    //console.log("l'index courant est : "+i+" le caractère courant est :"+ message[i]);
}
var div = document.getElementById("exo01");
var resultatDeLExo = "l'index courant est : "+i+" le caractère courant est :"+ message[i];
var texte = document.createTextNode(resultatDeLExo);
div.appendChild(texte);
}

