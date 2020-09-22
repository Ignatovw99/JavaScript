function solve(array) {
    let delimiter = array.pop();
    let result = array.join(delimiter);
    console.log(result);
}

solve([2, 32, 21, 432, '-']);