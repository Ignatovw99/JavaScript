function calculateSum(numbers) {
    return numbers.reduce((prev, current) => prev + current, 0);
}

function getPreviousElements(sequence, i, k) {
    let startSliceIndex = (i - k) >= 0 ? i - k : 0;
    return sequence.slice(startSliceIndex, i + 1);
}

function generateSequence(n, k) {
    let sequence = [1];
    sequence.length = n;
    for (let i = 0; i < sequence.length; i++) {
        let previousKElements = getPreviousElements(sequence, i, k);
        sequence[i] = calculateSum(previousKElements);
    }
    return sequence;
}

function solve(n, k) {
    console.log(generateSequence(n, k).join(' '));
}

solve(8, 2);