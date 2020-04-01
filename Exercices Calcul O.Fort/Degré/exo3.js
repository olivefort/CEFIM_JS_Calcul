const degres = parseFloat(prompt("Entrez une valeur"));
const unite = prompt('veuiller Entrer la lettre correspondant à l\'unité voulu : C pour Celsius, K pour Kelvin, F pour Farenheit');
if(isNaN(degres) || degres <= 0){
    alert("Veuillez rentrer un nombre positif !");
} else if(unite == "C"){
    window.alert(degres + ' Celsius est egal à ' + (degres*274.15).toFixed(1) + ' Kelvin et à ' + (degres*(9/5)+32).toFixed(1) + ' Farenheit')
} else if(unite == 'F'){
    window.alert(degres + ' Farenheit est egal à ' + ((degres-32)*(5/9)+273.15).toFixed(1) + ' Kelvin et à ' + ((degres-32)*(5/9)).toFixed(1) + ' Celsius')
}else if(unite == 'K'){
    window.alert(degres + ' Kelvin est egal à ' + ((degres-273.15)*(9/5)+32).toFixed(1) + ' Farenheit et à ' + (degres-273.15).toFixed(1) + ' Celcius')
}else{
    alert("L'unitée demandé n'est pas bonne, entrer un C pour Celsius, K pour Kelvin, F pour Farenheit")
}
