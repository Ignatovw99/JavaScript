function findBiggestElementOfMatrix(matrix) {
    return matrix
        .map(row => Math.max(...row))
        .reduce(((previousValue, currentValue) => Math.max(previousValue, currentValue)), Number.MIN_SAFE_INTEGER);
}

function solve(matrix) {
    console.log(findBiggestElementOfMatrix(matrix));
}

solve([[20, 50, 10],
    [8, 33, 145]]);