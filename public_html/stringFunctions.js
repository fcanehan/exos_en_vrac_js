//function exerciceXX(){
//    
//}

//var div = document.getElementById("exoXX");
//var resultatDeLExo = "texte qui va bien";
//var texte = document.createTextNode(resultatDeLExo);
//div.appendChild(texte);


// APPEL FONCTION LONGUEUR

function length(chaine){                        // initialisation de la fonction nommée "lenght" avec argu "chaine"
    var longueur = 0;                           // initialisation de la variable "longeur" à 0
    while(true){                                // boucle infinie tant que "vrai"
        if(chaine[longueur] !== undefined){     // condition : si le caractère à l'index indiqué est différent de "undefinied", il s'incrémente
            longueur ++;
        }else{                                  // condition de sortie 
            break;
        }                                       
    }                       
    return longueur;                            // retour de la valeur après traitement, soit la longueur de "chaine"
}


function toUpperCase(char) {
   var tableau = [
       
           ["a","A"],
           ["b","B"],
           ["c","C"],
           ["d","D"],
           ["e","E"],
           ["f","F"],
           ["g","G"],
           ["h","H"],
           ["i","I"],
           ["j","J"],
           ["k","K"],
           ["l","L"],
           ["m","M"],
           ["n","N"],
           ["o","O"],
           ["p","P"],
           ["q","Q"],
           ["r","R"],
           ["s","S"],
           ["t","T"],
           ["u","U"],
           ["v","V"],
           ["w","W"],
           ["x","X"],
           ["y","Y"],
           ["z","Z"]
       ];
   for (var j = 0; j < 2; j++) {
     
       for (var i = 0; i < 26; i++) {
         
           if (char === tableau[i][j]) {
             
           return tableau[i][1];
         }
     }
   }
}
