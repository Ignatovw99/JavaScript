function getFibonator() {

    let prevFibonacciNumber = 0;
    let currentFibonacciNumber = 0;

    return function() {
        let result = prevFibonacciNumber + currentFibonacciNumber;
        if (!result) {
            result = 1;
        }
        prevFibonacciNumber = currentFibonacciNumber;
        currentFibonacciNumber = result;
        return result;
    }
}

let fib = getFibonator();
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());