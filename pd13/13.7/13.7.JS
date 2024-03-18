// Gauti duomenis iš vartotojo
var a = parseInt(prompt("Įveskite skaičių a: "));
var b = parseInt(prompt("Įveskite skaičių b: "));

// Patikrinti, ar a yra b daliklis
if (b === 0) {
    console.log("Dalyba iš 0 negalima.");
} else if (a % b === 0) {
    console.log(a + " yra " + b + " daliklis.");
} else {
    console.log(a + " nėra " + b + " daliklis.");
}
