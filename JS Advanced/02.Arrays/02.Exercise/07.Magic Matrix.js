const sumReducer = (acc, num) => acc + num;

function isMagic(matrix) {
    return matrix
        .map(row => row.reduce(sumReducer))
        .every((x, i, arr) => x === arr[0]);
}

function invertMatrix(matrix) {
    let inverted = [];
    for (let i = 0; i < matrix[0].length; i++) {
        inverted.push([]);
        for (let j = 0; j < matrix.length; j++) {
            inverted[i].push(matrix[j][i]);
        }
    }
    return inverted;
}

function checkIfRowsAreMagic(matrix) {
    return isMagic(matrix);
}

function checkIfColsAreMagic(matrix) {
    let invertedMatrix = invertMatrix(matrix);
    return isMagic(invertedMatrix);
}

function checkIfMatrixIsMagic(matrix) {
    let isMagic = checkIfRowsAreMagic(matrix);
    if (isMagic) {
        isMagic = checkIfColsAreMagic(matrix);
    }
    return isMagic;
}

console.log(checkIfMatrixIsMagic([[1, 0, 1],
    [0, 0, 1],
    [0, 1, 0]]));