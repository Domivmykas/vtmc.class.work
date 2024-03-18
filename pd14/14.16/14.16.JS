// Pradiniai duomenys: pacientų skaičius n ir vizitų trukmės m1, m2, ...
var n = 3;
var trukmes = [18, 10, 10]; // Vizitų trukmės

// Skaičiuojame vidutinę vizitų trukmę
var sumaTrukmiu = 0;
for (var j = 0; j < trukmes.length; j++) {
    sumaTrukmiu += trukmes[j];
}
var vidutineTrukme = sumaTrukmiu / n;

// Skaičiuojame kiek ilgesnių nei 20 minučių vizitų
var ilgesniNei20Min = 0;
for (var k = 0; k < trukmes.length; k++) {
    if (trukmes[k] > 20) {
        ilgesniNei20Min++;
    }
}

// Išvedame rezultatus
console.log("Vidutinė vizitų trukmė: " + vidutineTrukme.toFixed(2) + " minutės");
console.log("Vizitų, ilgesnių nei 20 minučių, skaičius: " + ilgesniNei20Min);
