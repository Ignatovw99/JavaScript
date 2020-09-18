function isDistanceValid(x1, y1, x2, y2) {
    return Number.isInteger(Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2)));
}

function printIsValid(x1, y1, x2, y2) {
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${isDistanceValid(x1, y1, x2, y2) ? 'valid' : 'invalid'}`);
}

function checkValidity(coordinates) {
    let x1 = coordinates.shift();
    let y1 = coordinates.shift();
    let x2 = coordinates.shift();
    let y2 = coordinates.shift();
    printIsValid(x1, y1, 0, 0);
    printIsValid(x2, y2, 0, 0);
    printIsValid(x1, y1, x2, y2);
}

checkValidity([2, 1, 1, 1]);