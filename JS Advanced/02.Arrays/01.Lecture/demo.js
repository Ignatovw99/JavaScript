let sum = (a, b) => a + b;

function calculate(operation, first, second) { //First-class functions concept
    let result = operation(first, second);

    return result;
}

calculate(sum, 5, 10);

let emptyArray = [];

console.log(emptyArray.length);
emptyArray.length = 10;
console.log(emptyArray.length);

let numbers = [3, 10, 5, 2];
numbers[numbers.length] = 101; // add at the end of arr

numbers[numbers.length + 4] = 43; // add 4 element after the last one

console.log(numbers);

let lastNumber = numbers.pop();
console.log(lastNumber);
console.log(numbers);

numbers.push(143);
console.log(numbers);

let result = numbers.splice(2, 1);
console.log(result);
console.log(numbers);

numbers.splice(2, 0, 1001, 1002); // add at second index
console.log(numbers);

numbers.splice(6, 4); //remove undefined (empty) elements
console.log(numbers);

numbers.fill(6, 2);
console.log(numbers);

function compareNumbers(a, b) {
    return a - b;
}

numbers = [10, 5, 2, 7, 14];
numbers.sort();
console.log(numbers);
numbers.sort(compareNumbers);
console.log(numbers);

let names = ['John', 'Smith', 'Sophy'];
names.sort(function (a, b) {
    return a.localeCompare(b);
});

names.sort((a, b) => a.localeCompare(b));  //First class functions
console.log(names);

let superheroes = ['Superman', 'Batman', 'WanderWoman'];
let firstHeroes = superheroes.slice(0, 1); //non-mutating (Accessor) method
console.log(firstHeroes);
console.log(superheroes);

let secondHeros = superheroes.slice(1);
console.log(secondHeros);
console.log(superheroes);

let clone = superheroes.slice();

//Iteration methods
names.forEach(x => console.log(x));

let filteredNames = names.filter(x => x[0] !== 'S'); //Immutable method
console.log(filteredNames);

let sFirstHero = superheroes.find(x => x[0] === 'S');
console.log(sFirstHero);

let isThereSHero = superheroes.some(x => x[0] === 'S');
console.log(isThereSHero);

let nums = [3, 8, 10];
let sum1= nums.reduce((acc, element) => acc + element, 0);
console.log(sum1);