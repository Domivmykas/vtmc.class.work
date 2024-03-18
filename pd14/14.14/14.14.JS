// Pradiniai duomenys
var n = 30;
var m = 40;

// Tikriname, ar n yra nelyginis ir dalijasi iš 3 be liekanos
if (n % 2 !== 0 && n % 3 === 0 && n % 10 !== 3) {
    console.log(n); // Spausdiname pradinį skaičių, jei tenkinama sąlyga
}

// Ciklas, kuris eina nuo n iki m
for (var skaicius = n + 1; skaicius <= m; skaicius++) {
    // Tikriname, ar skaičius dalijasi iš 3 be liekanos ir paskutinis skaitmuo nelygus 3
    if (skaicius % 3 === 0 && skaicius % 10 !== 3) {
        console.log(skaicius); // Spausdiname skaičių, jei tenkinama sąlyga
    }
}
