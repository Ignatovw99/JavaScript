let vectorMath = (function () {
    return {
        add: (firstVector, secondVector) => {
            let [firstX, firstY] = firstVector;
            let [secondX, secondY] = secondVector;
            return [firstX + secondX, firstY + secondY];
        },
        multiply: (vector, scalar) => {
            let [x, y] = vector;
            return [x * scalar, y * scalar];
        },
        length: (vector) => {
            let [x, y] = vector;
            return Math.sqrt(x * x + y * y);
        },
        dot: (firstVector, secondVector) => {
            let [firstX, firstY] = firstVector;
            let [secondX, secondY] = secondVector;
            return firstX * secondX + firstY * secondY;
        },
        cross: (firstVector, secondVector) => {
            let [firstX, firstY] = firstVector;
            let [secondX, secondY] = secondVector;
            return firstX * secondY - firstY * secondX;
        }
    }
})();

console.log(vectorMath.length([3, -4]));