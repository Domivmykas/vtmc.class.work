function printArrayElements(inputArray) {
    if (!Array.isArray(inputArray)) {
        return 'Input is not an array';
    }

    let output = '';

    for (let i = 0; i < inputArray.length; i++) {
        output += inputArray[i] + ', ';
    }

    return output.slice(0, -2);
}

let arrayInput = [1, 2, 3, 4, 5];

console.log(printArrayElements(arrayInput)); // Tai turi išvesti: 1, 2, 3, 4, 5

// Nauja funkcija, skirta skaičių sumai ir sandaugai
function calculateSumAndAverage(inputArray) {
    if (!Array.isArray(inputArray)) {
        return 'Input is not an array';
    }

    let sum = 0;

    for (let i = 0; i < inputArray.length; i++) {
        sum += inputArray[i];
    }

    let average = sum / inputArray.length;

    return `Sum: ${sum}, Average: ${average}`;
}

let arrayInput2 = [10, 20, 30, 40, 50];

console.log(calculateSumAndAverage(arrayInput2)); // Tai turi išvesti: Sum: 150, Average: 30