// Sukurkite objektą saugoti temperatūros matavimus
var matavimai = {
    sausis: [-11.5, -10.3, -12, -6.5, -5, -15.5],
    vasaris: [-16, -14.5, -11, -10.3, -3.5, 0],
    kovas: [-3, -2.5, 0, 5, 9.5, 11.2]
    // Toliau seka kitų mėnesių temperatūros matavimai...
};

// Funkcija skaičiuoja mėnesio vidutinę temperatūrą
function vidutineTemperatura(menesis) {
    var temperaturos = matavimai[menesis];
    var suma = 0;

    for (var i = 0; i < temperaturos.length; i++) {
        suma += temperaturos[i];
    }

    return suma / temperaturos.length;
}

// Funkcija skaičiuoja bendrą vidutinę temperatūrą visam laikotarpiui
function bendraVidutineTemperatura() {
    var visosTemperaturos = [];

    for (var menesis in matavimai) {
        var vidTemperatura = vidutineTemperatura(menesis);
        visosTemperaturos.push(vidTemperatura);
    }

    var suma = visosTemperaturos.reduce(function (acc, current) {
        return acc + current;
    }, 0);

    return suma / visosTemperaturos.length;
}

// Atvaizduoti kiekvieno mėnesio vidutines temperatūras
for (var menesis in matavimai) {
    var vidTemperatura = vidutineTemperatura(menesis);
    console.log("Mėnesio " + menesis + " vidutinė temperatura yra " + vidTemperatura.toFixed(2));
}

// Atvaizduoti bendrą vidutinę temperatūrą
var bendraVidTemperatura = bendraVidutineTemperatura();
console.log("Bendra vidutinė temperatura visam laikotarpiui yra " + bendraVidTemperatura.toFixed(2));
