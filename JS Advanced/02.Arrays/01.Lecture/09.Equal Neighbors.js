function checkIfAreNeighbors(first, second) {
    return first == second;
}

function getCountOfEqualNeighbors(matrix) {
    let count = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (i + 1 < matrix.length && checkIfAreNeighbors(matrix[i][j], matrix[i + 1][j])) {
                count++;
            }
            if (checkIfAreNeighbors(matrix[i][j], matrix[i][j + 1])) {
                count++;
            }
        }
    }

    return count;
}

console.log(getCountOfEqualNeighbors([
    [2, 2, 5, 7, 4],
    [4, 0, 5, 3, 4],
    [2, 5, 5, 4, 2]
]));