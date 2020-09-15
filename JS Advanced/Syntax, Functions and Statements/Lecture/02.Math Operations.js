function calculate(leftOperand, rightOperand, operation) {
    let result;

    switch (operation) {
        case '+':
            result = leftOperand + rightOperand;
            break;
        case '-':
            result = leftOperand - rightOperand;
            break;
        case '*':
            result = leftOperand * rightOperand;
            break;
        case '/':
            result = leftOperand / rightOperand;
            break;
        case '%':
            result = leftOperand % rightOperand;
            break;
        case '**':
            result = leftOperand ** rightOperand;
            break;
    }

    console.log(result);
}