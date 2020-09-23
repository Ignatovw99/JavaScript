function extendOrbit(matrix, newX, newY) {
    if (newX < 0) {
        newX = 0;
    } else if (newX >= matrix.length) {
        newX = matrix.length - 1;
    }

    if (newY < 0) {
        newY = 0;
    } else if (newY >= matrix[newX].length) {
        newY = matrix[newX].length - 1;
    }

    return [ newX, newY ];
}

function isAlreadyInsideOrbit(matrix, row, col) {
    return matrix[row][col];
}

function checkIfOrbitIsCreated(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (!matrix[i][j]) {
                return false;
            }
        }
    }
    return true;
}

function generateOrbit(matrix, number, topLeft, topRight, bottomLeft, bottomRight) {
    if (checkIfOrbitIsCreated(matrix)) {
        return;
    }
    let [topLeftX, topLeftY] = topLeft;
    let [topRightX, topRightY] = topRight;
    let [bottomLeftX, bottomLeftY] = bottomLeft;
    let [bottomRightX, bottomRightY] = bottomRight;

    for (let i = topLeftY; i <= topRightY; i++) {
        if (isAlreadyInsideOrbit(matrix, topRightX, i)) {
            continue;
        }
        matrix[topLeftX][i] = number;
    }
    for (let i = topRightX; i <= bottomRightX; i++) {
        if (isAlreadyInsideOrbit(matrix, i, topRightY)) {
            continue;
        }
        matrix[i][topRightY] = number;
    }
    for (let i = bottomLeftY; i <= bottomRightY; i++) {
        if (isAlreadyInsideOrbit(matrix, bottomRightX, i)) {
            continue;
        }
        matrix[bottomRightX][i] = number;
    }
    for (let i = topLeftX; i <= bottomLeftX; i++) {
        if (isAlreadyInsideOrbit(matrix, i, topLeftY)) {
            continue;
        }
        matrix[i][topLeftY] = number;
    }

    topLeft = extendOrbit(matrix, topLeftX - 1, topLeftY - 1);
    topRight = extendOrbit(matrix, topRightX - 1, topRightY + 1);
    bottomLeft = extendOrbit(matrix, bottomLeftX + 1, bottomLeftY - 1);
    bottomRight = extendOrbit(matrix, bottomRightX + 1, bottomRightY + 1);
    generateOrbit(matrix, ++number, topLeft, topRight, bottomLeft, bottomRight);
}

function initMatrix(width, height) {
    let matrix = [];
    matrix.length = height;
    for (let i = 0; i < matrix.length; i++) {
        matrix[i] = [];
        matrix[i].length = width;
    }
    return matrix;
}

function solve(args) {
    let [width, height, x, y] = args;
    let matrix = initMatrix(width, height);
    generateOrbit(matrix, 1, [x, y], [x, y], [x, y], [x, y]);
    matrix
        .forEach(row => console.log(row.join(' ')));
}

solve([5, 5, 1,2 ]);