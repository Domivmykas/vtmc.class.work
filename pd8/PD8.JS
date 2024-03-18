let numberX = 10;
let numberY = 20;
let result = numberX + numberY;
console.log(result); // ?
result += 10;
console.log(result); // ?
result -= 10;
console.log(result); // ?
result *= 10;
console.log(result); // ?
result /= 10;
console.log(result); // ?
result %= 10;
console.log(result); // ?
result **= 10;
console.log(result); // ?
result += 10 + numberY;
console.log(result); // ?
result *= numberX - numberY;
console.log(result); // ?

let x = 5;
let y = 3;

// Priskyrimo operatorius (=)
let result1 = x + y;
console.log(result1); // Rezultatas: 8

// Papildomo priskyrimo operatorius (+=)
result1 += 10;
console.log(result1); // Rezultatas: 18

// Atimties priskyrimo operatorius (-=)
result1 -= 5;
console.log(result1); // Rezultatas: 13

// Daugybos priskyrimo operatorius (*=)
result1 *= 2;
console.log(result1); // Rezultatas: 26

// Dalybos priskyrimo operatorius (/=)
result1 /= 4;
console.log(result1); // Rezultatas: 6.5

// Modulio priskyrimo operatorius (%=)
result1 %= 3;
console.log(result1); // Rezultatas: 0.5

// Pakėlimas laipsniu priskyrimo operatorius (**=)
result1 **= 3;
console.log(result1); // Rezultatas: 0.125
