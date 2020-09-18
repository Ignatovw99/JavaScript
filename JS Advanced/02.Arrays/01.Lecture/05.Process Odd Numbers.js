function process(numbers) {
    return numbers
        .filter(((x, i) => i % 2 !== 0))
        .map(x => x * 2)
        .reverse();
}

function solve(args) {
    let result = process(args);
    console.log(result.join(' '));
}