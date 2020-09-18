function findTwoSmallestNumbers(numbers) {
    return numbers
        .sort((a, b) => a - b)
        .slice(0, 2)
        .join(' ');
}

function solve(numbers) {
    console.log(findTwoSmallestNumbers(numbers));
}

solve([3, 0, 10, 4, 7, 3]);