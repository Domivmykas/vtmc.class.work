// Gauti dviženklį skaičių iš vartotojo
var skaicius = parseInt(prompt("Įveskite dviženklį skaičių: "));

// Patikrinti, ar įvestas skaičius yra dviejų skaitmenų
if (skaicius >= 10 && skaicius <= 99) {
    // Gauti pirmą ir antrą skaitmenį
    var pirmasSkaitmuo = Math.floor(skaicius / 10);
    var antrasSkaitmuo = skaicius % 10;

    // Patikrinti, kuris skaitmuo yra didesnis
    if (pirmasSkaitmuo > antrasSkaitmuo) {
        console.log("Pirmas skaitmuo (" + pirmasSkaitmuo + ") yra didesnis.");
    } else if (antrasSkaitmuo > pirmasSkaitmuo) {
        console.log("Antras skaitmuo (" + antrasSkaitmuo + ") yra didesnis.");
    } else {
        console.log("Abu skaitmenys yra lygūs.");
    }
} else {
    console.log("Įvestas skaičius nėra dviženklis.");
}
