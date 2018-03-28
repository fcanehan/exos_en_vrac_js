// extraction des mots de la chaine
// stockage des mots dans un tableau de string
// retourne le message correspondant au resultat de l'exo
function exercice05 (){
    
    var phrase = "ceci est une jolie phrase en mode message";
    var messageDeRetour="";
    var listeDeMots=[];                                 // tableau accueillant la chaine de carc sous forme de mots
    var whiteSpace= " ";
    var idx=0;                                          // servira d'index du tableau listeDeMots, son incrementation equivaudra a chq nv mot
    var idxWS= 0;       
    var idxWord=0;
    var wordlength=0;
    var firstLetter=true;
    var word ="";
    
    
    
    
    
    
    
    // extraction des mots de la chaine dans le tableau
    for (var i =0; i < /*=*/ length(phrase); i++){      // boucle pour éliminer les espaces de la chaine de caractères
        if ((phrase[i] === whiteSpace) ){ /* || (i === length(phrase))*/                // si au démarrage,  ou lors de la lecture à l'index i de la chaine, c'est un expace         
            listeDeMots[idx] = word;                    // le tableau "listeDemots" enregistre le contenu de "word"
            idx++;                                      // l'index s'incrémente
            word="";                                    // "word" se ré-initialise à 0 pour le prochain mot

        }else{
            word += phrase[i];                          // sinon "word" égale le contenu de la chaine de caractères
        /*    if (i ===length(phrase)-1){ */                // lorsque la boucle atteint le dernier caractère de la chaine
        /*    listeDeMots[idx] = word;        */            // un index debutant à 0, son index est le nombre de carac -1
       /* }  */                                             // le mot se rajoute dans le tableau. sans cette condition, le dernier mot est absent 
    }
    
    console.log("longueur du tableau de mots : " + length(listeDeMots));
    
    /*
     partie 1 de l'exo, afficher un mot sur deux à partir du second mot
    *
    *
    */
    
    for (var i=0;i<length(listeDeMots);i++){            //on parcoure le tableau et si l'index d'un mot est pair, messageDeRetour
        if(i%2 ===0){                                   // est égal au contenu du tableau avec index pair et s'affiche dans le console.log
            messageDeRetour += listeDeMots + " ";
        }
    }
    
    console.log("un mot sur deux : " + messageDeRetour);
    
    /*
     partie 2 de l'exo, cacher un mot sur deux à partir du second mot
    *
    *
    */  
    messageDeRetour ="";                                // réinitialisation de la variable pour entamer la nouvelle boucle
    for (var i=0;i<length(listeDeMots);i++){            // opération équivalente à la précédente pour des index impairs
        if(i%2 ===1){
            messageDeRetour += listeDeMots + " ";
        }
    }
    
    console.log("un mot sur deux : " + messageDeRetour);
    
    /*
     partie 3 de l'exo : supprimez tous les mots dont le nombre de caractères est infèrieur à 3
      
     */
    
    // boucler le tableau  et voir le 1er index, le dernier index. si 
    messageDeRetour ="";
        for (var i=0; i<listeDeMots[idx];i++ ){
        listeDeMots[idx] = idxWord;
        var idxIndex=0;
        for (var j=0;j<idxWord[idxIndex];j++){
            if (idxIndex > 3){
                break;
            } 
        }
        messageDeRetour += idxWord + " ";
    
// Partie 4 de l'exo 5 : afficher les mots qui ont un "e"
    messageDeRetour = "";                                   // messageDeRetour réinitialisé à 0
    var isOk = false;                                       
    for (var i=0; i< length(listeDeMots);i++){              // boucle sur l'index du tableau de mots pour en retirer chaque element individuellement
        var mot=listeDeMots[i];                             // chaque mot devient un tableau

        for (var j=0; j<length(mot);j++){                   // boucle sur le tableau pour scanner le mot a la recherche de "e"
            if(mot[j]=== "e"){                              // s'il y a un "e", isOk devient vrai, "break" sort de la boucle
                isOk = true;                                // 
                break;
            }
        }
        if (isOk) {                                         // affichage du mot s'il possede un "e"
            messageDeRetour += mot + " ";                   // rebasculage de isOk à false pour réinitialiser le traitement à
            isOk=false;                                     //  la prochaine itération
        }
    }
    
    
}

}
   var div = document.getElementById("exo05");
    var resultatDeLExo = messageDeRetour;
    var texte = document.createTextNode(resultatDeLExo);
    div.appendChild(texte); 
}
