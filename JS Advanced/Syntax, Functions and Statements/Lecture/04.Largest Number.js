function findLargestNumber(first, second, third) {
    let result = Math.max(first, second, third);
    console.log(`The largest number is ${result}.`);
}

function findLargestWithIfStatements(first, second, third) {
    let largest = first;
    if (second > largest) {
        largest = second;
    }
    if (third > largest) {
        largest = third;
    }
    console.log(`The largest number is ${largest}.`);
}

function findLargestVarArgs(...numbers) {
    let result = Math.max(...numbers);
    console.log(`The largest number is ${result}.`);
}