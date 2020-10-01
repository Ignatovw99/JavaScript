function solve() {

    let expressionOutputElement = document.getElementById('expressionOutput');
    let resultOutputElement = document.getElementById('resultOutput');

    document.querySelector('.keys').addEventListener('click', symbolHandler);

    function clearHandler() {
        expressionOutputElement.textContent = '';
        resultOutputElement.textContent = '';
    }

    document.querySelector('.clear').addEventListener('click', clearHandler);

    function symbolHandler(event) {
         let pressedButtonValue = event.target.value;

        switch (pressedButtonValue) {
             case '/':
             case '*':
             case '+':
             case '-':
                 expressionOutputElement.textContent += ` ${pressedButtonValue} `;
                 break;
             case '=':
                 let [firstOperand, operator, secondOperand] = expressionOutputElement.textContent.split(' ');

                 if (!operator || !secondOperand) {
                     resultOutputElement.textContent = 'NaN';
                 } else {
                     resultOutputElement.textContent = calculateResult(+firstOperand, operator, +secondOperand);
                 }
                 break;
             default:
                 expressionOutputElement.textContent += pressedButtonValue;
         }
    }

    function calculateResult(firstNumber, operator, secondNumber) {
        switch (operator) {
            case '/':
                return firstNumber / secondNumber;
            case '*':
                return firstNumber * secondNumber;
            case '+':
                return firstNumber + secondNumber;
            case '-':
                return firstNumber - secondNumber;
        }
    }
}