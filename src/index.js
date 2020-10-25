
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (matrix === undefined || matrix.length == 0) return [];
    let newMatrix = [];
    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 == 0) {
            matrix[i].forEach(x => newMatrix.push(x));
        } else {
            matrix[i].slice().reverse().forEach(x => newMatrix.push(x));
        }

    }
    return newMatrix;
}
