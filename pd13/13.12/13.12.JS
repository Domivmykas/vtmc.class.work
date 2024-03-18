// Gauti duomenis iš vartotojo
var n = parseInt(prompt("Įveskite prekių dėžių kiekį: "));
var m = parseInt(prompt("Įveskite, kiek dėžių telpa į mašiną: "));

// Apskaičiuoti, kiek kartų reikės nuvažiuoti į sandėlį
var kartai = Math.ceil(n / m);

// Atvaizduoti rezultatą
console.log("Vairuotojas turės nuvažiuoti į sandėlį " + kartai + " kartus, kad parvežtų visas prekių dėžes į parduotuvę.");
