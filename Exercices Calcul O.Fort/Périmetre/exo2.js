// let longueur = prompt("Entrez une longueur");
// const mesurelong = prompt("Entrer une unité de mesure (mm, cm, dm, m, dam, hm, km");
// let largeur = prompt("Entrez une largeur");
// const mesurelarg = prompt("Entrer une unité de mesure (mm, cm, dm, m, dam, hm, km");

// const arrayUnit = ['mm','cm','dm','m','dam','hm','km'];

// if(isNaN(longueur) || isNaN(largeur) || longueur <= 0 || largeur <= 0){
//     alert('Ceci n\'est pas un chiffre ou il n\'est pas positif');
// }else if(arrayUnit.indexOf(mesurelong) === -1 || arrayUnit.indexOf(mesurelarg) === -1){
//     alert('Veuillez rentrer une mesure conforme')
// }else{
//     switch(mesurelong){
//         case 'mm':
//             longueur /= 1000;
//             break;
//         case 'cm':
//             longueur /= 100;
//             break;
//         case 'dm':
//             longueur /= 10;
//             break;
//         case 'm':
//             longueur /= 1;
//             break;
//         case 'dam':
//             longueur /= 0.1;
//             break;
//         case 'hm':
//             longueur /= 0.01;
//             break;
//         case 'km':
//             longueur /= 0.001;
//             break;
//     }
//     switch(mesurelarg){
//         case 'mm':
//             largeur /= 1000;
//             break;
//         case 'cm':
//             largeur /= 100;
//             break;
//         case 'dm':
//             largeur /= 10;
//             break;
//         case 'm':
//             largeur /= 1;
//             break;
//         case 'dam':
//             largeur /= 0.1;
//             break;
//         case 'hm':
//             largeur /= 0.01;
//             break;
//         case 'km':
//             largeur /= 0.001;
//             break;
//     }
//     var resultat = (parseFloat(longueur) + parseFloat(largeur)) * 2;
//     alert(' Le Périmetre est égal à ' + resultat + ' mètres');
// }


let longueurP = document.getElementById('longueur');
let largeurP = document.getElementById('largeur');
let unitlong = document.getElementById('mesurelong');
let unitlarg = document.getElementById('mesurelarg');



longueurP.addEventListener('input', calcul);
unitlong.addEventListener('input', calcul);
largeurP.addEventListener('input', calcul);
unitlarg.addEventListener('input', calcul);

function calcul(){
    longueurPValue = longueurP.value;
    largeurPValue = largeurP.value;
    unitlongValue = unitlong.value;
    unitlargValue = unitlarg.value;
    switch(unitlongValue){
        case 'mm':
            longueurPValue /= 1000;
            break;
        case 'cm':
            longueurPValue /= 100;
            break;
        case 'dm':
            longueurPValue /= 10;
            break;
        case 'm':
            longueurPValue /= 1;
            break;
    }
    switch(unitlargValue){
        case 'mm':
            largeurPValue /= 1000;
            break;
        case 'cm':
            largeurPValue  /= 100;
            break;
        case 'dm':
            largeurPValue  /= 10;
            break;
        case 'm':
            largeurPValue  /= 1;
            break;
    }
    affiche = document.getElementById('resultat');
    affiche.textContent = (longueurPValue + largeurPValue)*2;
}


