const assert = require('chai').assert; //The chai is an assertion framework
const calc = require('../calculator');

describe('Calculate sum', function() {

    it('Should return positive number when adding two positive numbers', () => {
        //Arrange
        let firstNumber = 1;
        let secondNumber = 4;

        //Act
        let result = calc.sum(firstNumber, secondNumber);

        //Assert
        assert.equal(result, 5);
    });

    it('Should return negative number when adding two negative numbers', () => {
        let result = calc.sum(-3, -7);

        assert.equal(result, -10);
    });
});