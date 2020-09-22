function execute(commands, number = 1) {
    let result = [];
    commands.forEach(command => {
        if ('add' === command) {
            result.push(number);
        } else if ('remove' === command) {
            result.pop();
        }
        number++;
    });
    return result;
}

function executeWithCounter(commands) {
    let output = [];
    let count = 1;
    commands.forEach(command => {
        if ('add' === command) {
            output.push(count++);
        } else if ('remove' === command) {
            output.pop();
        }
    });
    return output;
}

function solve(input) {
    let result = executeWithCounter(input);
    if (result.length !== 0) {
        result.forEach(x => console.log(x))
    } else {
        console.log('Empty');
    }
}

solve(['remove', 'add', 'remove', 'add']);