function isInsideOfMatrix(matrix, row) {
    return matrix.length > row && 0 <= row;
}

function incrementRow(row) {
    return ++row;
}

function decrementRow(row) {
    return --row;
}

function changeMatrixRow(matrix, row, secondaryIndex, element) {
    for (let i = 0; i < matrix.length; i++) {
        if (i === row || i === secondaryIndex) {
            continue;
        }
        matrix[row][i] = element;
    }
}

function sumDiagonals(matrix, row, diagonalsSum) {
    diagonalsSum[0] += matrix[row][row];
    diagonalsSum[1] += matrix[row][matrix.length - 1 - row];
}

function attackDiagonals(matrix, row, diagonalsSum) {
    if (!isInsideOfMatrix(matrix, row)) {
        return diagonalsSum[0] === diagonalsSum[1];
    }
    sumDiagonals(matrix, row, diagonalsSum);
    row = incrementRow(row);
    let rowShouldBeChanged = attackDiagonals(matrix, row, diagonalsSum);
    row = decrementRow(row);
    if (rowShouldBeChanged) {
        changeMatrixRow(matrix, row, matrix.length - 1 - row, diagonalsSum[0]);
    }

    return rowShouldBeChanged;
}

function solve(matrix) {
    matrix = matrix
        .map(line => line.split(' ').map(Number));

    attackDiagonals(matrix, 0, [0, 0]);

    matrix
        .forEach(x => console.log(x.join(' ')));
}

solve(['5 3 12 3 1',
'11 4 23 2 5',
'101 12 3 21 10',
'1 4 5 2 2',
'5 22 33 11 1']);