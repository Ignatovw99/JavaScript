function funcContext() {
    return this;
}

let context = funcContext();
console.log(context === global);

let firstName = 'John';
var age = 21;  // It is assigned to global objecct (context)

console.log(firstName);  // in the browser will be undefined, because let can not be attached to the global object but is in the global scope
console.log(age);  

function testGlobalContext() {
    console.log(this === global);  // This is the context of the given function
}

testGlobalContext();

this.name = 'Glosho';
global.name = 'Glosho';
var name = 'Glosho';  // The three things are the same in the global context

function speek(message) {
    console.log(`${this.name}: ${message}`);
    console.log(this);
}

let person = {
    name: 'John',
    speek: speek,
    walk: function (direction) {
        console.log(`${this.name}: ${direction}`);
    }
}

person.speek('Hello World');

speek('Hello I am in another context');

let globalWalk = person.walk;
globalWalk('right');


//In Events this === e.currenttarget
//In classes is like in objects

let student = {
    name: 'Pesh',
    grades: [2, 4, 5, 6],
    speek: function() {
        // let that = this; not good (storing context in the next nested scopes)
        
        this.grades.forEach(function(grade) {
            console.log(`${this.name} - ${grade}`);
        }, this); //-> give a context to the function // !!!! Or use arrow function because they dont create their own context the use the parent context with function context a new context is created
    }
}

student.speek();

//Call and apply invoke a funtion with a context and bind creates a new function with a new defined context
function say(message, endMessage) {
    this.grades.forEach(grade => {
        console.log(`${this.name}:${message} - ${grade}`);
    });
    console.log(endMessage);
}

let sayPerson = {
    name: 'Johny',
    grades: [2, 5, 3, 3]
};

say.call(sayPerson, 'sorry', 'Ill be better next time');
say.call({
    name: 'Glum',
    grades: [3, 5, 6]
}, 'Yeah!', 'I am the best');

say.apply(sayPerson, ['sorry', 'Ill be better']); //The old way because there was not the spread operator

let wrappedFunction = say.bind(sayPerson); //It creates a new function with a given context
let wrappedFunctionWithBindedArgs = say.bind(sayPerson, 'Binded sorry');
wrappedFunctionWithBindedArgs('End Message');


//Internal Object Properties
let employee = {
    name: 'John',
    position: 'Manager'
};

for (const key in employee) {  //Or Object.keys()
    if (employee.hasOwnProperty(key)) {
        console.log(key);
    }
}

console.log(employee.propertyIsEnumerable('name'));
Object.defineProperty(employee, 'name', {enumerable: false});
console.log(employee.propertyIsEnumerable('name'));

for (const key in employee) {
    if (employee.hasOwnProperty(key)) {
        console.log(key);
    }
}

Object.defineProperty(employee, 'phone', {enumerable: false, value: '0238193912312', writable: false});
console.log(employee.propertyIsEnumerable('phone'));
employee.phone = '00000'; //Not set 
console.log(employee.phone);

//Object freeze and seal 