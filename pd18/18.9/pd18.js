class Skaiciuotuvas {
  constructor() {
    this.operacijos = {
      sudetis: (a, b) => a + b,
      atimtis: (a, b) => a - b,
      daugyba: (a, b) => a * b,
      dalyba: (a, b) => a / b
    };
  }

  pridetiOperacija(pavadinimas, funkcija) {
    this.operacijos[pavadinimas] = funkcija;
  }

  atliktiOperacija(pavadinimas, ...args) {
    if (typeof this.operacijos[pavadinimas] === 'function') {
      return this.operacijos[pavadinimas](...args);
    } else {
      throw new Error(`Operacija '${pavadinimas}' nerasta`);
    }
  }
}

// Sukuriamas skaičiuotuvo objektas
const skaiciuotuvas = new Skaiciuotuvas();

// Pridedamos naujos matematinės operacijos
skaiciuotuvas.pridetiOperacija('sin', Math.sin);
skaiciuotuvas.pridetiOperacija('cos', Math.cos);
skaiciuotuvas.pridetiOperacija('log', Math.log);

// Pavyzdys, kaip skaičiuotuvas naudojamas atlikti operacijoms
try {
  const rezultatasSin = skaiciuotuvas.atliktiOperacija('sin', Math.PI / 2);
  console.log('sin(π/2):', rezultatasSin);

  const rezultatasCos = skaiciuotuvas.atliktiOperacija('cos', Math.PI);
  console.log('cos(π):', rezultatasCos);

  const rezultatasLog = skaiciuotuvas.atliktiOperacija('log', 10);
  console.log('log(10):', rezultatasLog);
} catch (error) {
  console.error(error.message);
}