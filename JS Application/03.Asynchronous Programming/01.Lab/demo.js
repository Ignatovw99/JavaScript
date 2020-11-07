console.log('Hello');

//A callback is a function passed into another function as argument and invloked in some inner function

setTimeout(function() {    //The function in the setTimeout is a callback func(async)
    console.log('Goodbay!');
}, 2000);

console.log('Hello again');

//listener, handlers are callbacks

function getFiles() {
    //Code for getting files -> callback function code  The problem is the nesting of the callbacks single responsibility is bloken
    //(This is the callback hell)
    let files = [];
}

//Promises

let promise = new Promise((resolve, reject) => {  //This is an executor function with a resolver and a rejector // the promise is not pending when its resolved or rejected
    console.log('Prepare');
    setTimeout(function() {
        // resolve('Done');
        reject('I dont want you');
    }, 1000);
});

promise
    .then(function(res) { //This func is like a callback
        console.log(res);
        console.log('Yes I have made it');
    })
    .catch(function(err) {
        console.log(err);
        console.log('Crying');
    })
    .finally(() => {
        console.log("the end");
    });

console.log(promise); //This is pending because the promise is not resolved yet because of its asyncrounous execution


function letsDrive() {
    return Promise.resolve('Ok, but i have no car');
}

let drivingPromise = letsDrive();

drivingPromise
    .then((res) => {
        console.log(res);
        return Promise.resolve('I bougth a new car');
    })
    .then(res => {
        console.log('I will start looking for a new car');
        console.log(res);
    }) //It solves the callback hell problem
    .catch(err => console.log(err));


function letsGetMarryWithMultiplePromises() {

    // let firstPromise = Promise.resolve('Yes');
    let firstPromise = new Promise((resolve, reject) => {
        setTimeout(function() {
            resolve('Yes');
        }, 500);
    });
    let secondPromise = new Promise((resolve, reject) => {
        setTimeout(function() {
            reject('Restaurant is booked');
        }, 2000);
    });
    let thirdPromise = new Promise((res, rej) => {
        setTimeout(() => {
            res('Guests are invited');
        }, 1000);
    });

    // return Promise.all([firstPromise, secondPromise, thirdPromise, 'Value witch is evaluated to resolved promise']);
    return Promise.allSettled([firstPromise, secondPromise, thirdPromise, 'Value witch is evaluated to resolved promise']);
    // return Promise.race([firstPromise, secondPromise, thirdPromise, 'Value witch is evaluated to resolved promise']);
}

let now = Date.now();
letsGetMarryWithMultiplePromises()
    .then(res => {
        console.log('success');
        console.log(res);
        console.log(Date.now() - now); //It will last the longest operation
    })
    .catch(err => {
        console.log('rejected');
        console.log(err);
    });


// Async and await

async function getName() {
    return 'John'; //return a filfilled promise with a result
}

async function getNameRejectedPromise() {
    throw new Error('some error');
}

console.log(getName());

getName()
    .then(name => console.log(name));

getNameRejectedPromise()
    .catch(err => console.log(err.message));

