//function exercice3 (){
    
var long="ceci est un message assez long";
var taille = length(long);
var modif ="";
    
for (var i=0;i<taille;i++){
    if (long[i]==="e"){
      
        modif += "E";
        i++;
    }
    if (long[i]===" "){
        modif +="-";
        i++;
    }
    if (long[i]===" "){
        modif +="-";
        i++;
    }
}    
//}