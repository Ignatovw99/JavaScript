let person = { firstName: 'John', lastName: 'Smith', age: 30 };

console.log(person);

let personMultiline = {
    firstName: 'Amanda',
    lastName: 'Smith',
    age: 31,
    'full-name': 'Full name',
};

console.log(personMultiline);

console.log(personMultiline['full-name']);

let propertyName = 'lastName';
console.log(personMultiline[propertyName]); //Dynamic access
console.log(personMultiline.propertyName); //undefined there is no such property  (silent error)-> it looks after this property name

//Functions are also data types - see in the following object

const repeatable = name => console.log(name);

let personWithBehaviour = {
    name: 'Frank Terry',
    talk: function () { // -> Method
        console.log('Speaking....');
        repeatable('What\'s up');
    },
    height: 176,
    greet: name => console.log('Hello ' + name + '!'),
    repeatableMethod: repeatable,
};

personWithBehaviour.talk();
personWithBehaviour.greet('Gorge');

let clonedPerson = Object.assign({}, person);

delete clonedPerson.firstName;
console.log(person);
console.log(clonedPerson);

//Iterating
Object.keys(person)
    .map(key => console.log(`${key} - ${person[key]}`));

if (person.hasOwnProperty('firstName')) {
    console.log('Yes');
} else {
    console.log('Yes');
}
//another way
if (person.firstName) { // Truthy value
    console.log('Yes');
} else {
    console.log('Yes');
}

for (let personKey in person) {
    console.log(personKey);
}

//HTTP - text fromat
//JSON
let jsonData = '{ "manager":{"firstName": "John"} }';  // manager is nested obj property
let jsObj = JSON.parse(jsonData);
console.log(jsObj);

let cloned = JSON.parse(JSON.stringify(person));


//Classes - like pattern or factory which creates many instances  //JS supports OPP approach but its not good way to do it but it depends
//Valila js is more declarative and functional approach
class Person {

    #currentAge;

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    get age() {
        return this.#currentAge;
    }

    set age(value) {
        if (value > 0 && value < 120) {
            this.#currentAge = value;
        }
    }

    greet() {
        console.log('Hello, my name is ' + this.name);
    }
}

let person1 = new Person('John', 14);
console.log(person1);
let person2 = new Person('Terry', 21);

person1.greet();
person2.greet();

person1.age = 213;
console.log(person1.age);













