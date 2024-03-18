// Gauti duomenis iš vartotojo
var a = parseFloat(prompt("Įveskite skaičių a: "));
var b = parseFloat(prompt("Įveskite skaičių b: "));
var c = parseFloat(prompt("Įveskite skaičių c: "));

// Rasti dviejų didžiausių skaičių sumą
var suma;

if (a >= b && a >= c) {
    suma = a + ((b >= c) ? b : c);
} else if (b >= a && b >= c) {
    suma = b + ((a >= c) ? a : c);
} else {
    suma = c + ((a >= b) ? a : b);
}

// Atvaizduoti rezultatą
console.log("Dviejų didžiausių skaičių suma yra " + suma + ".");
