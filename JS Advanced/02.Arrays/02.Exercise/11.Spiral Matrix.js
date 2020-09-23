function initializeMatrixLength(n, k) {
    let matrix = [];
    matrix.length = n;
    for (let i = 0; i < matrix.length; i++) {
        matrix[i] = [];
        matrix[i].length = k;
    }
    return matrix;
}

function isMatrixFilled(matrix, number) {
    let matrixElementCount = matrix.length * matrix[matrix.length - 1].length;
    return matrixElementCount === number - 1;
}

function isCellAlreadyDefined(matrix, row, col) {
    return matrix[row][col] !== undefined;
}

function canMoveThisDirection(matrix, row, col) {
    return row >= 0 && row < matrix.length
        && col >= 0 && col < matrix[row].length
        && !isCellAlreadyDefined(matrix, row, col);
}

function changeDirection(direction, row, col) {
    let newDirectionValues = [];
    switch (direction) {
        case 'right':
            newDirectionValues = [ 'down', ++row, --col ];
            break;
        case 'down':
            newDirectionValues = [ 'left', --row, --col ];
            break;
        case 'left':
            newDirectionValues = [ 'up', --row, ++col ];
            break;
        case 'up':
            newDirectionValues = [ 'right', ++row, ++col ];
            break;
    }
    return newDirectionValues;
}

function generateSpiralMatrix(matrix, row = 0, col = 0, direction = 'right', number = 1) {
    if (isMatrixFilled(matrix, number)) {
        return;
    }

    let shouldChangeDirection = false;
    switch (direction) {
        case 'right':
            if (canMoveThisDirection(matrix, row, col)) {
                matrix[row][col++] = number++;
            } else {
                shouldChangeDirection = true;
            }
            break;
        case 'down':
            if (canMoveThisDirection(matrix, row, col)) {
                matrix[row++][col] = number++;
            } else {
                shouldChangeDirection = true;
            }
            break;
        case 'left':
            if (canMoveThisDirection(matrix, row, col)) {
                matrix[row][col--] = number++;
            } else {
                shouldChangeDirection = true;
            }
            break;
        case 'up':
            if (canMoveThisDirection(matrix, row, col)) {
                matrix[row--][col] = number++;
            } else {
                shouldChangeDirection = true;
            }
            break;
    }

    if (shouldChangeDirection) {
        [direction, row, col] = changeDirection(direction, row, col);
    }

    generateSpiralMatrix(matrix, row, col, direction, number);
}

function solve(n, k) {
    let matrix = initializeMatrixLength(n, k);

    generateSpiralMatrix(matrix);
    matrix
        .map(x => x.join(' '))
        .forEach(x => console.log(x));
}

solve(3 , 3);