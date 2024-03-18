let isTrue = true;
let isFalse = false;
console.log(isTrue && isTrue); // ?
console.log(isTrue && isFalse); // ?
console.log(isFalse && isFalse); // ?
console.log(isTrue || isTrue); // ?
console.log(isTrue || isFalse); // ?
console.log(isFalse || isFalse); // ?
console.log(!isTrue); // ?
console.log(!isFalse); // ?
console.log(!isFalse && isTrue); // ?
console.log(!isFalse && !isTrue); // ?
console.log(!isFalse || isTrue); // ?

let a = 5;
let b = 10;
let c = "10";

console.log(a == b); // Rezultatas: false (lygina reikšmes be tipo patikrinimo)
console.log(b === c); // Rezultatas: false (lygina reikšmes su tipų patikrinimu)
console.log(a != b); // Rezultatas: true (ne lygina reikšmes be tipo patikrinimo)
console.log(b !== c); // Rezultatas: true (ne lygina reikšmes su tipų patikrinimu)
console.log(a > b); // Rezultatas: false
console.log(a >= b); // Rezultatas: false
console.log(a < b); // Rezultatas: true
console.log(a <= b); // Rezultatas: true
