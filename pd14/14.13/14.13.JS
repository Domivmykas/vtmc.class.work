// Funkcija, kuri skaičiuoja kiek daliklių turi skaičius
function skaiciuotiDaliklius(sk) {
    var dalikliai = 0;
    for (var i = 1; i <= sk; i++) {
        if (sk % i === 0) {
            dalikliai++;
        }
    }
    return dalikliai;
}

// Masyvas, kuriame bus saugomi skaičiai su tik penkiais dalikliais
var penkiuDalikliuSkaičiai = [];

// Tikriname skaičius nuo 1 iki 300
for (var sk = 1; sk <= 300; sk++) {
    var dalikliai = skaiciuotiDaliklius(sk);
    if (dalikliai === 5) {
        penkiuDalikliuSkaičiai.push(sk);
    }
}

// Išvedame rezultatus
console.log("Sveikieji skaičiai nuo 1 iki 300, kurie turi tik penkis daliklius:");
console.log(penkiuDalikliuSkaičiai.join(", "));
