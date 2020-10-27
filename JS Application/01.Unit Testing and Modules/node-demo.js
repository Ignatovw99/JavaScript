//Each file in node.js will be translated to module and it has a module

let message = 'Hello node';

function printMessage(additionalMessage) {
    console.log(message, additionalMessage);
}

module.exports = {
    name: 'Demo name',
    printMessage
}