// Pradinis amebos skaičius
var ameba = 1;

// Laikas valandomis
var laikas = 0;

// Ciklas, kuris vyksta nuo 3 iki 24 valandų su žingsniu 3 valandos
for (laikas = 3; laikas <= 24; laikas += 3) {
    ameba *= 2; // Dalijasi į 2 ląsteles
    console.log("Po " + laikas + " valandų bus " + ameba + " amebos ląstelių.");
}
