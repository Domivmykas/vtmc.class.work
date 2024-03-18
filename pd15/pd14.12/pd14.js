function sumArrayElements(inputArray) {
    if (!Array.isArray(inputArray)) {
        return 'Input is not an array';
    }

    let sum = 0;
    for (let i = 0; i < inputArray.length; i++) {
        sum += inputArray[i];
    }

    return sum;
}

let arrayInput1 = [1, 2, 3, 4, 5];
let arrayInput2 = [1, 2, 3, 4, 5];

let concatenatedArray = arrayInput1.concat(arrayInput2);

console.log(sumArrayElements(concatenatedArray)); // Tai turi išvesti: 55