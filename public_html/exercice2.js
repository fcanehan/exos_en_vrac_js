//function exercice2(){
    
var phrase = "bonjour à tous !";

var occurence=length[phrase];    
var espaces="";
var o="";
var positionO="";

for (var i=0;i<occurence;i++){
    if (phrase[i]===" "){
        espaces++;
        console.log("les espaces sont écrits :"+espaces+" fois");
    }
    if (phrase[i] === "o"){
        o++;
        positionO = i;
    }
    
    
}
console.log("les lettres 'o' sont écrits :"+o+" fois");
    console.log("les 'o'sont aux positions suivantes :"+ i);
//}