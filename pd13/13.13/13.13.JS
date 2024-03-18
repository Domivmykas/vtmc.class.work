// Gauti duomenis iš vartotojo
var p1 = parseFloat(prompt("Įveskite pirmos prekės kainą (p1 eurų): "));
var p2 = parseFloat(prompt("Įveskite antros prekės kainą (p2 eurų): "));
var p = parseFloat(prompt("Įveskite nuolaidos procentą (p procentai): "));
var s = parseFloat(prompt("Įveskite, kiek pirkėjas nori išleisti (s eurų): "));

// Apskaičiuoti bendrą prekių kainą su nuolaida
var bendraKaina = (p1 + p2) * (1 - p / 100);

// Patikrinti, ar pirkėjui užtenka pinigų
if (s >= bendraKaina) {
    console.log("Pirkėjui užtenka pinigų abiems prekėms įsigyti.");
    console.log("Bendroji prekių kaina: " + bendraKaina.toFixed(2) + " eurų.");
} else {
    console.log("Pirkėjui nepakanka pinigų abiems prekėms įsigyti.");
}
