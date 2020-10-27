let globalMessage = 'Hello from console global';

function printMessage(additionalMessage) {
    console.log(globalMessage, additionalMessage);
}

(function (scope) {
    let innerMessage = 'Hello from console inner';

    function printMessageModule(additionalMessage) {
        console.log(innerMessage, additionalMessage);
    }

    scope.printMessageModule = printMessageModule;
})(window);


let loggerModule = (function () {
    let message = 'Inner message';

    function printMessage() {
        console.log(message);
    }

    return {
        printMessage
    };
})();