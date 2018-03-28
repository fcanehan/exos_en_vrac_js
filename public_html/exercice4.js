function exercice04 (){
    
var message ="ceci est un texte long";
var taille=length(message);
var nbMots =1;
var momot =0;
var tailleMot =0;



for (i=0;i<=taille;i++){
    
    // nombre de mots
    if (message[i] === " "){
        nbMots++;
    }
    
//position de chaque mot
//    if (message[i] !== " "){
//        console.log(message[i);
//    }else if(i ==  taille) || (message[i] === " "){
//        momot++;
//        console.log(" est en position " + momot)
//    }

    
/* longueur de chaque mot
        if (message[i] === " "){
        taillemot++;
        console.log(message[i] + " fait "+" tailleMot +" lettres.")
    }else if(message[i] == taille){
        taillemot++;
        console.log(message[i] + " fait "+" tailleMot +" lettres.")
    }
    }
 */

}
var div = document.getElementById("exo04");
var resultatDeLExo = "...";
var texte = document.createTextNode(resultatDeLExo);
div.appendChild(texte);
    
}


