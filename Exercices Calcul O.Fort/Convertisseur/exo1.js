

// var nombre = window.prompt('entrer chiffre euro');
// if(nombre > 0){
//     var resultat = (Math.round(nombre*1.1)/100)
//     window.alert(nombre + ' Euro est égal a ' + resultat + ' Dollard');
// }else{
//     window.alert('Ceci n\'est pas un chiffre ou il n\'est pas positif');
// }

let nombre = document.getElementById('euro'); // 1 --> on cible l'endroit ou on entre le chiffre

nombre.addEventListener('input', maFonction); // 2 --> on lance un event avec une fonction

function maFonction(){ 
    resultat = document.getElementById('result'); // 3 --> on cible l'id du resultat du DOM
    resultat.value = (nombre.value*1.1).toFixed(1); //4 --> on lui insère le résultat
}
