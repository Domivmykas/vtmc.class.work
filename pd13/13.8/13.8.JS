// Gauti tris skaičius iš vartotojo
var a = parseFloat(prompt("Įveskite skaičių a: "));
var b = parseFloat(prompt("Įveskite skaičių b: "));
var c = parseFloat(prompt("Įveskite skaičių c: "));

// Patikrinti, ar tenkinama nelygybė a < b < c arba b > a > c
if ((a < b && b < c) || (b > a && a > c)) {
    console.log("Nelygybė a < b < c arba b > a > c tenkinama.");
} else {
    console.log("Nelygybė a < b < c arba b > a > c netenkinama.");
}
