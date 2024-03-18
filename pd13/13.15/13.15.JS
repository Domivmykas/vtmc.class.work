// Gauti duomenis iš vartotojo
var p = parseFloat(prompt("Įveskite nuolaidos procentą (p procentai): "));
var a = parseFloat(prompt("Įveskite sutaupytus pinigus (a eurų): "));
var t = parseFloat(prompt("Įveskite išmanausiojo telefono kainą be nuolaidos (t eurų): "));

// Apskaičiuoti telefono kainą su nuolaida
var tn = t * (1 - p / 100);

// Patikrinti, ar sutaupytų pinigų užtenka telefono įsigyti
if (a >= tn) {
    console.log("Austėjos sutaupytų pinigų užtenka įsigyti telefoną su nuolaida.");
    console.log("Telefono kaina su nuolaida: " + tn.toFixed(2) + " eurų.");
} else {
    console.log("Austėjos sutaupytų pinigų nepakanka telefono įsigyti.");
}
