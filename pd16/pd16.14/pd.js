function createMatrix(rows, cols) {
    const matrix = [];
    for (let i = 0; i < rows; i++) {
        matrix.push(new Array(cols).fill(0));
    }
    return matrix;
}