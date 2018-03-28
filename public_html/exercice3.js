function exercice03 (){

// Declare mes var message + calcule ca taille

     var message = "ceci est un texte assez long";
     var longueur = length(message);
     var ligne = "";
     var maj = "";
     var iMaj = 0;
     
     
 // - Remplacez tous les « e » par des « E »
     for (var i = 0; i < longueur; i++)
     {
         if (message[i] === 'e') {
             ligne += 'E';
         }
 // - Remplacement de tous les espaces par des tirets
         else if (message[i] === ' ') {
             ligne += '-';
             iMaj = i;
         }
 // - Changer la première lettre de chaque mot par une majuscule      
         else if (i === parseInt(iMaj + 1) || i === 0) {
             maj = toUpperCase(message[i]);
             ligne += maj;
         } else {
             ligne += message[i];
         }
     }

    // console.log(ligne);
     
        var div = document.getElementById("exo03");
    var resultatDeLExo = ligne;
    var texte = document.createTextNode(resultatDeLExo);
    div.appendChild(texte);

}
 

//var message = "ceci est un texte assez long";
//var taille = length(message);
//   var change = "";
//   var majE = "E";
//   var esp = "-";
//   var flag=false;
//   //var up ="";
//   
//   for(i=0; i< taille; i++){
//       
////       if(message[i] === "e"){
////           change += majE;
////           i++;
////       }
////       if(message[i] === " "){
////           change += esp;
////           i++;
////       }
//       
//       if (message[i-1] === " ")  {
//           var up = toUpperCase (message[i]);
//           change += up;
//         }else{
//           change+= message[i]; 
//       }
//
////       for (message[i]=== 0;;){
////           var up = toUpperCase (message[i]);
////           change += up;
////       }
//       
////   change += message[i];
////   }
////console.log(change);
//var div = document.getElementById("exo03");
//var resultatDeLExo = "le résultat est : ";
//var texte = document.createTextNode(resultatDeLExo + change);
//div.appendChild(texte);
//    }
//        