let temperature = prompt("Veuillez saisir une température");
const unit = prompt("Veuillez saisir une unité (°C, °F, K)");

const UNIT = ["C", "F", "K"];

if (isNaN(temperature)) {
    alert("Veuillez saisir valeur numérique de température !");
} else if (UNIT.indexOf(unit) === -1) {
    alert("Veuillez saisir une unité acceptable (" + UNIT.join(" ou ") + ") !");
} else if (unit === "K" && temperature < 0) {
    alert("C'est n'importe quoi : les Kelvin sont forcément positif !");
} else {
    let tempC, tempF, tempK;
    temperature = parseFloat(temperature);
    switch (unit) {
        case "C":
            tempC = temperature;
            tempF = 9/5 * temperature + 32;
            tempK = temperature + 273.15;
            break;
        case "F":
            tempC = (temperature - 32) * 5/9;
            tempF = temperature;
            tempK = (temperature - 32) * 5/9 + 273.15;
            break;
        case "K":
            tempC = temperature - 273.15;
            tempF = (temperature - 273.15) * 9/5 + 32;
            tempK = temperature;
            break;
    }
    alert("Voici vos température :\n\t♦ " + tempC + "°C\n\t♦ " + tempF + "°F\n\t♦ " + tempK + "K");
}