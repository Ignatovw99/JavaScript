function findElementsOnEvenPosition(numbers) {
    let result = [];
    for (let i = 0; i < numbers.length; i++) {
        if (i % 2 === 0) {
            result.push(numbers[i]);
        }
    }
    return result.join(' ');
}

function findElementsOnEvenPositionWithForin(numbers) {
    let result = [];
    for (const index in numbers) {
        if (index % 2 === 0) {
            result.push(numbers[index]);
        }
    }
    return result.join(' ');
}

console.log(findElementsOnEvenPositionWithForin([3, 6 ,4]));