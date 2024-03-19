function generateWordPermutations(word) {
    const result = [];
    for (let i = 0; i < word.length; i++) {
        for (let j = i + 1; j <= word.length; j++) {
            result.push(word.slice(i, j));
        }
    }
    return result;
}