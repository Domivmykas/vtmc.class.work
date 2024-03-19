function findSecondMinAndMax(numbers) {
    numbers.sort((a, b) => a - b);
    const uniqueNumbers = [...new Set(numbers)]; // Remove duplicates
    if (uniqueNumbers.length < 2) {
        return "Not enough unique numbers in the array.";
    }
    return [uniqueNumbers[1], uniqueNumbers[uniqueNumbers.length - 2]];
}