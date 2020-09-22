function print(array) {
    let n = array.pop();  // n is string
    array
        .filter((x, i) => i % n === 0) // But here an operation is being executed on it and is casted to number
        .forEach(x => console.log(x))
}

function printWithLoop(array) {
    let n = Number(array.pop());
    for (let i = 0; i < array.length; i += n) {
        console.log(array[i]);
    }
}

printWithLoop([5,
    20,
    31,
    4,
    20,
    '2', ]);