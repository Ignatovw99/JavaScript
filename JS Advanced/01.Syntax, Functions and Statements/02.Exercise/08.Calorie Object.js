let obj = {name: 'John', age: 13};

console.log(obj);

let name = 'Smith';
let age = 18;
let obj2 = {name, age};

console.log(obj2);

let obj3 = {};
obj3.name = 'Frank';
obj3.age = 21;

console.log(obj3.name + " - " + obj3.age);

function createObject(args) {
    let obj = {};
    for (let i = 0; i < args.length; i = i + 2) {
        obj[`${args[i]}`] = Number(args[i + 1]);
    }
    return obj;
}

function solve(args) {
    console.log(createObject(args));
}

solve(['Todsa', '21', 'das', '32'])