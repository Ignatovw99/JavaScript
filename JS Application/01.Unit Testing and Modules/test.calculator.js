const calc = require('./calculator');

let result1 = calc.sum(1, 2);

if (result1 === 3) {
    console.log(`Test #1 - successful`);
} else {
    console.log(`Test #1 - fail`);
}