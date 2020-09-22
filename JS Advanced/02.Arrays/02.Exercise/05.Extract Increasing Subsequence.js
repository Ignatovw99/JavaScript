const reducer = (accumulator, current) => {
    if (current >= accumulator[accumulator.length - 1]) {
        accumulator.push(current);
    }
    return accumulator;
};

function extractIncreasingSubsequence(array) {
    let startElement = array.shift();
    return array.reduce(reducer, [startElement]);
}

function solve(arr) {
    extractIncreasingSubsequence(arr)
        .forEach(x => console.log(x));
}

solve([]);