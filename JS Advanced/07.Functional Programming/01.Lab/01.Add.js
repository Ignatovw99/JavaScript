function solution(inputNumber) {

    return function(num) {
        return inputNumber + num;
    }
}

let add5 = solution(5);
console.log(add5(2));
console.log(add5(4));