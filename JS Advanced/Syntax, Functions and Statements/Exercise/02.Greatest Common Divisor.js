function findGreatestCommonDivisor(firstNum, secondNumber) {
    let greaterNum = Math.max(firstNum, secondNumber);
    let smallerNum = Math.min(firstNum, secondNumber);

    for (let currentDivider = smallerNum; currentDivider >= 1; currentDivider--) {
        if (greaterNum % currentDivider == 0 && smallerNum % currentDivider == 0) {
            return currentDivider;
        }
    }
}

function findGCDRecursive(first, second) {
    if (second != 0) {
        let reminder = first % second
        return findGCDRecursive(second, reminder);
    }
    return first;
}

function solve(first, second) {
    console.log(findGCDRecursive(4, 20));
}