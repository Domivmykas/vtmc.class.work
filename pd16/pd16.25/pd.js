function countPositiveNumbers(numbers) {
    let count = 0;
    for (const number of numbers) {
        if (number > 0) {
            count++;
        }
    }
    return count;
}

// Example usage
const numbers = [-1, 0, 1, 2, -3, 4, -5];
const positiveCount = countPositiveNumbers(numbers);
console.log("Number of positive numbers:", positiveCount);