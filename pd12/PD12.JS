// Paskaitos laikas vienai paskaitai (minutėse)
const paskaitosLaikas = 45;

// Paskaitų skaičius per savaitę
const paskaitosPerSavaitę = 24; // Pakeiskite į savo paskaitų skaičių

// Skaičiuojame bendrą laiką minutėmis
const bendrasLaikasMinutėmis = paskaitosLaikas * paskaitosPerSavaitę;

// Išvedame rezultatą
console.log(`Per savaitę turite ${paskaitosPerSavaitę} paskaitas.`);
console.log(`Tai sudarys ${bendrasLaikasMinutėmis} minutės(-ių).`);

// Kiekvienoje dėžutėje telpa 3 puodeliai
const puodeliuPerDezu = 3;

// Iš viso puodelių, kuriuos reikia supakuoti
const visoPuodeliu = 7; // Pakeiskite į norimą puodelių skaičių

// Apskaičiuojame, kiek pilnų dėžučių telpa
const pilnosDezes = Math.floor(visoPuodeliu / puodeliuPerDezu);

// Apskaičiuojame, kiek puodelių liks nesupakuota
const likoPuodeliu = visoPuodeliu % puodeliuPerDezu;

// Išvedame rezultatus
console.log(`Pilnų dėžučių skaičius: ${pilnosDezes}`);
console.log(`Nesupakuotų puodelių skaičius: ${likoPuodeliu}`);

// Duomenys
const ilgisMetrais = 4; // Ilgis metrais
const aukstisMetrais = 3; // Aukštis metrais
const plytosIlgisCm = 20; // Plytos ilgis centimetrais
const plytosAukstisCm = 10; // Plytos aukštis centimetrais
const plytosKainaEUR = 0.5; // Plytos kaina vienai plytai EUR

// Sienos plotas kvadratinėmis centimetrų vienetais
const plotasCm2 = ilgisMetrais * 100 * aukstisMetrais * 100;

// Plytų skaičius, reikalingas sienai uždengti
const plytuSkaicius = Math.ceil(plotasCm2 / (plytosIlgisCm * plytosAukstisCm));

// Kaina už plytas
const plytuKainaEUR = plytuSkaicius * plytosKainaEUR;

// Išvedame rezultatus su šimtųjų tikslumu
console.log(`Plytų kiekis: ${plytuSkaicius}`);
console.log(`Plytos kainuos: ${plytuKainaEUR.toFixed(2)} Eur.`);

// Duomenys
const tunelioIlgisMetrais = 264; // Tunelio ilgis metrais
const automobilioGreitisKmh = 60; // Automobilio greitis km/h

// Greitis metrais per sekundę (m/s)
const greitisMs = automobilioGreitisKmh / 3.6;

// Laikas sekundėmis
const laikasS = tunelioIlgisMetrais / greitisMs;

// Išvedame rezultatą su šimtųjų tikslumu
console.log(`Automobilis tunelį pravažiuos per ${laikasS.toFixed(2)} s.`);

// Duomenys
const pradinisZuvuSkaicius = 5; // Pradinis žuvų skaičius
const pridetosZuvysPerDiena = 3; // Pridėtų žuvų kiekis kiekvieną dieną
const laikotarpisDienomis = 3; // Laikotarpis dienomis

// Skaičiuojame iš viso žuvų
const isVisoZuvu = pradinisZuvuSkaicius + (pridetosZuvysPerDiena * laikotarpisDienomis);

// Išvedame rezultatą su paaiškinamaisiais žodžiais
console.log(`Po ${laikotarpisDienomis} dienų akvariume gyvens ${isVisoZuvu} žuvų.`);

// Duomenys
const n = 6; // Eglučių skaičius
const aukstiai = [167, 134, 145, 156, 155, 176]; // Aukštiai kiekvienos eglutės

// Skaičiuojame aukščių sumą
const auksciuSuma = aukstiai.reduce((suma, aukstis) => suma + aukstis, 0);

// Skaičiuojame vidutinį aukštį
const vidutinisAukstis = auksciuSuma / n;

// Išvedame rezultatą
console.log(`Eglutės aukščio vidurkis: ${vidutinisAukstis.toFixed(1)} cm`);

// Duomenys
const n = 4; // Dalyvaujančių bėgikų skaičius
const laikai = [22, 20, 25, 25]; // Bėgikų laikai sekundėmis

// Skaičiuojame vidutinį laiką
const vidutinisLaikas = laikai.reduce((suma, laikas) => suma + laikas, 0) / n;

// Ieškome greičiausio bėgiko
const greiciausioIdx = laikai.indexOf(Math.min(...laikai));
const greiciausioLaikas = laikai[greiciausioIdx];

// Skaičiuojame kiek sekundžių greičiau buvo greičiausias bėgikas už vidutiniškai bėgusį
const sekundesGreiciau = Math.abs(greiciausioLaikas - vidutinisLaikas);

// Išvedame rezultatus
console.log(`Greičiausias bėgikas įveikė distanciją per ${greiciausioLaikas} sekundžių.`);
console.log(`Jis buvo ${sekundesGreiciau} sekundžių geresnis už vidutinį bėgiką.`);

