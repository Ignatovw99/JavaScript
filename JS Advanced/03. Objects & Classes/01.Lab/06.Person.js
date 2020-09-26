class Person {

    constructor(firstName, lastName, age, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }

    toString() {
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
    }
}

let person = new Person('John', 'Smith', 24, 'john@gmail.com');
console.log(person.toString());

function getPersons() {
    let result = [];
    let anna = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com');
    let softuni = new Person('SoftUni');
    let stephan = new Person('Stephan', 'Johnson', 25);
    let gabriel = new Person('Gabriel', 'Peterson', 24, 'g.p@gmail.com');
    result.push(anna);
    result.push(softuni);
    result.push(stephan);
    result.push(gabriel);
    return result;
}