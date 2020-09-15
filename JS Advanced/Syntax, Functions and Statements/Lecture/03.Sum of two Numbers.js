function sum(first, second) {
    let firstNumber = Number(first);  //parseInt
    let secondNumber = Number(second);
    let result = 0;

    for (let i = firstNumber; i <= secondNumber; i++) {
        result += i;
    }

    return result;
}

console.log(sum('5', '10'));