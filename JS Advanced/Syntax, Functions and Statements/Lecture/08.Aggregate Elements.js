function aggregateElements(numbers) {
    let sum = 0;
    let reciprocalSum = 0;
    let concatenationResult = '';

    for (const number of numbers) {
        sum += number;
        reciprocalSum += 1 / number;
        concatenationResult += number;
    }

    return [sum, reciprocalSum, concatenationResult];
}

function solve(args) {
    let result = aggregateElements(args);
    for (let i = 0; i < result.length; i++) {
        console.log(result[i]);
    }
}

solve([1, 2, 3])