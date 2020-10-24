//Commbine variables into object
let population = 21213123;
let area = 312.12;

let obj = {population, area, reportGeoInfo: function() {console.log(population)}};

let location = {
    lat: 23.21,
    lon: 32.12,
    toString: function () {
        return `${this.lat} ${this.lon}`;
    }
};

obj.location = location;

console.log(obj);
console.log(obj.location);
console.log('Location: ' + obj.location); //toString in invoked because JS tries it to cast  to string




let names = ['Pesho', 'Ivan', 'John', 'Frank'];
let [firstName, secondName, ...others] = names; //Array Destructioring Assignment
console.log(firstName);
console.log(secondName);
console.log(others);

let { population : objPopulation, area : objArea, ...restObj} = obj; //Obj Destruct assign...  ///... is rest operator

console.log(...names); //This is the spread operator
console.log(restObj);
console.log(objPopulation);

let newSwallowNames = [...names];//copy with spread operator

let { toString } = location; //(Destructing the function) But it has no context when Destructuring only the function 
console.log(toString.call({lat: 213123123.2, lon: 213123})); //Call with new context

//If Destructuring reference variable and change it it will affect the data in the heap  ---> So the destructing does not copy

let { lan } = location;  // is equal to let lan = location.lan;
//Nested Destructuring with Obj and Array

let cats = [
    {name: 'Navcho', age: 3},
    {name: 'Garry', age: 4},
    {name: 'Tom', age: 2}
];

let [ {name: firstCatName, age} , secondCat] = cats;
console.log(firstCatName);

//Destrunct obj in the function param because not to have access to all the properties but only to all you need in the function
function printCatName({name, ...otherProps}) { //if you need the rest properties
    console.log(name);
}

function printCatNameWholeObj(cat) { //Not so good
    cat.age++; //Will affect the value by reference
    console.log(cat.name);
}

cats.forEach(printCatName);

let props = [
    {name: 'John', age:31},
    {eyeColor: 'blue'},
    {height: 188},
    {name: 'Frank'}
];

let concatenactedObj = props.reduce((acc, x) => ({...acc, ...x}), {}); //Or With Object.assign({}, acc, x);
console.log(concatenactedObj);