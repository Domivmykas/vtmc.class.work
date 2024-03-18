// Gauti duomenis iš vartotojo
var apskritimoPlotas = parseFloat(prompt("Įveskite apskritimo plotą: "));
var kvadratoPlotas = parseFloat(prompt("Įveskite kvadrato plotą: "));
var staciakampioPlotas = parseFloat(prompt("Įveskite stačiakampio plotą: "));

// Patikrinti, kuri figūra turi didžiausią plotą
var didziausiasPlotas = 0;
var figura = "";

if (apskritimoPlotas >= kvadratoPlotas && apskritimoPlotas >= staciakampioPlotas) {
    didziausiasPlotas = apskritimoPlotas;
    figura = "apskritimas";
} else if (kvadratoPlotas >= apskritimoPlotas && kvadratoPlotas >= staciakampioPlotas) {
    didziausiasPlotas = kvadratoPlotas;
    figura = "kvadratas";
} else {
    didziausiasPlotas = staciakampioPlotas;
    figura = "stačiakampis";
}

// Atvaizduoti rezultatą
console.log("Didžiausios figūros plotas yra " + figura + " ir jis yra " + didziausiasPlotas + ".");
