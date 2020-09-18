function reorderArray(numbers) {
    let result = [];
    for (let i = 0; i < numbers.length; i++) {
        let current = numbers[i];
        if (current < 0) {
            result.unshift(current);
        } else {
            result.push(current);
        }
    }
    return result;
}

function solve(numbers) {
    let result = reorderArray(numbers);
    for (let i = 0; i < result.length; i++) {
        console.log(result[i]);
    }
}

solve([7, -2, 8,9]);