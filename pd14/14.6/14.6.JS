function atvirksciaiSpausdintiEilute(tekstas) {
    var stekas = [];

    // Pridėti kiekvieną simbolį į steką
    for (var i = 0; i < tekstas.length; i++) {
        stekas.push(tekstas[i]);
    }

    // Išspausdinti simbolius iš steko atvirkščiai
    while (stekas.length > 0) {
        var simbolis = stekas.pop();
        process.stdout.write(simbolis);
    }
    console.log(); // Naujos eilutės simbolis, kad būtų aišku, kada eilutė baigiasi
}

var eilute = "Hello, world!";
atvirksciaiSpausdintiEilute(eilute);
