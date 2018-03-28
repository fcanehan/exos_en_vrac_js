function exercice02(){
    
var message = "bonjour à tous !";

var occurence=length[message];    
var espaces="";
var o="";
var positionO="";

for (var i=0;i<occurence;i++){
    if (message[i]===" "){
        espaces++;
    }
    if (message[i] === "o"){
        o++;
        positionO = i /*+ positionO*/;
    } 
//}
//console.log("les espaces sont écrits :"+espaces+" fois");
//console.log("les lettres 'o' sont écrits :"+o+" fois");
//console.log("les 'o'sont aux positions suivantes : "+ positionO);

}
var div = document.getElementById("exo02");
var resultatDeLExo = espaces;
var texte = document.createTextNode(resultatDeLExo);
div.appendChild(texte);
}