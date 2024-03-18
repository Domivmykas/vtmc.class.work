function findDuplicates(input) {
    if (!Array.isArray(input)) {
        return 'Input is not an array';
    }

    let frequencyMap = {};
    let duplicates = [];

    for (let i = 0; i < input.length; i++) {
        if (frequencyMap[input[i]]) {
            frequencyMap[input[i]]++;
        } else {
            frequencyMap[input[i]] = 1;
        }
    }

    for (let key in frequencyMap) {
        if (frequencyMap[key] > 1) {
            duplicates.push(key);
        }
    }

    return duplicates;
}

let arrayInput = [5, 3, 1, 4, 2, 3, 5, 1, 2, 4];

console.log(findDuplicates(arrayInput)); // Tai turi išvesti: [1, 2, 3, 4, 5]