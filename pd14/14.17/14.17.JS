// Funkcija, kuri patikrina, ar skaičius yra palindromas
function arPalindromas(skaicius) {
    var skaiciausEilute = skaicius.toString();
    var atvirkstinis = skaiciausEilute.split('').reverse().join('');
    return skaiciausEilute === atvirkstinis;
}

var skaicius = 1; // Pradinis skaičius, nuo kurio pradedame tikrinti kvadratus
var rasti = 0; // Kiek jau rasta palindrominių kvadratų

// Ieškome pirmųjų dešimties palindrominių kvadratų
while (rasti < 10) {
    var kvadratas = skaicius * skaicius;
    if (arPalindromas(kvadratas)) {
        console.log(skaicius + "^2 = " + kvadratas);
        rasti++;
    }
    skaicius++;
}
