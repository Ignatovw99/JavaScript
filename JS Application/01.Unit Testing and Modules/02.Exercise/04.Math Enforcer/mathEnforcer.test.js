const assert = require('chai').assert;
const {addFive, subtractTen, sum} = require('./mathEnforcer');

describe('MathEnforcer', function() {

    describe('addFive', () => {
        it('should return undefined when the input parameter is not a number', () => {
            let result = addFive('input');
            assert.equal(result, undefined);
        });
        
        it('should return correct result when the input parameter is a positive number - increased with 5', () => {
            let result = addFive(6);
            assert.equal(result, 11);
        });
        
        it('should return correct result when the input parameter is a negative number - increased with 5', () => {
            let result = addFive(-7);
            assert.equal(result, -2);
        });
    });

    describe('substractTen', () => {
        it('should return undefined when the input is not a number', () => {
            let result = subtractTen('input');
            assert.equal(result, undefined);
        });

        it('should return correct result when the input parameter is a positive number - decrased with 10', () => {
            let result = subtractTen(14);
            assert.equal(result, 4);
        });

        it('should return correct result when the input parameter is a positive number - decrased with 10', () => {
            let result = subtractTen(-13);
            assert.equal(result, -23);
        });
    });
    
    describe('sum', () => {
        it('should return undefined when the first param is not a number', () => {
            let result = sum('input', 4);
            assert.equal(result, undefined);
        });
        
        it('should return undefined when the second param is not a number', () => {
            let result = sum(3, 'param');
            assert.equal(result, undefined);
        });

        it('should return correct result when the input parameters are positive numbers', () => {
            let result = sum(4, 8);
            assert.equal(result, 12);
        });

        it('should return correct result when the input parameters are negative numbers', () => {
            let result = sum(-4, -13);
            assert.equal(result, -17);
        });

        it('should return correct result when the input parameters are floating-point numbers', () => {
            let result = sum(13.2321, 14.822);
            assert.closeTo(result, 28.05, 0.01);
        });
    });
});