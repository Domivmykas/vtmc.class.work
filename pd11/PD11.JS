let bitNumberOne = 10;
let bitNumberTwo = 20;
console.log(bitNumberOne & bitNumberTwo); // ?
console.log(bitNumberOne | bitNumberTwo); // ?
console.log(~bitNumberTwo); // ?
console.log(bitNumberOne ^ bitNumberTwo); // ?
console.log(bitNumberOne << 1); // ?
console.log(bitNumberOne << 5); // ?
console.log(bitNumberOne >> 1); // ?
console.log(bitNumberOne >>> 1); // ?
console.log((-100 >>> 3).toString(2)); // ?
console.log(true << 1); // ?
console.log(false << 1); // ?
console.log(true >> 1); // ?
console.log(false >> 1); // ?
console.log(~false); // ?
console.log(~true); // ?


console.log(bitNumberOne & bitNumberTwo); // Rezultatas: 0 (bitų AND operacija)
console.log(bitNumberOne | bitNumberTwo); // Rezultatas: 30 (bitų OR operacija)
console.log(~bitNumberTwo); // Rezultatas: -21 (bitų NOT operacija)
console.log(bitNumberOne ^ bitNumberTwo); // Rezultatas: 30 (bitų XOR operacija)
console.log(bitNumberOne << 1); // Rezultatas: 20 (bitų kairinė poslinkio operacija)
console.log(bitNumberOne << 5); // Rezultatas: 320 (bitų kairinė poslinkio operacija)
console.log(bitNumberOne >> 1); // Rezultatas: 5 (bitų dešininė poslinkio operacija)
console.log(bitNumberOne >>> 1); // Rezultatas: 5 (nesiginant bitų dešiniai poslinkio operacija)
console.log((-100 >>> 3).toString(2)); // Rezultatas: "11111111111111111111111100111100" (nesiginant bitų dešiniai poslinkio operacija)
