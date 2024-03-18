let numberX = 10;
let numberY = '20';
console.log(numberX == numberY); // ?
console.log(numberX === numberY); // ?
console.log(numberX != numberY); // ?
console.log(numberX !== numberY); // ?
console.log(numberX > numberY); // ?
console.log(numberX >= numberY); // ?
console.log(numberX < numberY); // ?
console.log(numberX <= numberY); // ?
console.log((numberX != numberY)?'It is true':'It is false'); // ?

let numberX = 10;
let numberY = 20;
let numberZ = 10;
console.log(numberX == numberY); // Rezultatas: false (ar lygūs, be tipų patikrinimo)
console.log(numberX === numberZ); // Rezultatas: true (ar lygūs, su tipų patikrinimu)
console.log(numberX != numberY); // Rezultatas: true (ne lygūs, be tipų patikrinimo)
console.log(numberX !== numberZ); // Rezultatas: false (ne lygūs, su tipų patikrinimu)
console.log(numberX > numberY); // Rezultatas: false (ar didesni)
console.log(numberX >= numberZ); // Rezultatas: true (ar didesni arba lygūs)
console.log(numberX < numberY); // Rezultatas: true (ar mažesni)
console.log(numberX <= numberZ); // Rezultatas: true (ar mažesni arba lygūs)