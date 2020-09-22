function rotate(array) {
    let rotations = array.pop() % array.length; // remove the unnecessary rotations
    for (let i = 0; i < rotations; i++) {
        let element = array.pop();
        array.unshift(element);
    }
}

function solve(arr) {
    rotate(arr);
    console.log(arr.join(' '));
}

solve([2, 3, 4, 2]);