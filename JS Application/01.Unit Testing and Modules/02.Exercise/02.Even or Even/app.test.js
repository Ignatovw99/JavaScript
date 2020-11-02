const assert = require('chai').assert;
const isOddOrEven = require('./app');

describe('Check if string length is even or odd', function() {

    it('Should return undefined with a number parameter', () => {
        let result = isOddOrEven(3);
        assert.equal(result, undefined);
    });

    it('Should return undefined with a object parameter', () => {
        let result = isOddOrEven({name: 'John'});
        assert.equal(result, undefined);
    });

    it('Should return even for work', () => {
        let result = isOddOrEven('work');
        assert.equal(result, 'even');
    });

    it('Should return odd for run', () => {
        let result = isOddOrEven('run');
        assert.equal(result, 'odd');
    });

    it('Should return correct result with multiple checks', () => {
        assert.equal(isOddOrEven('cat'), 'odd');
        assert.equal(isOddOrEven('dog'), 'odd');
        assert.equal(isOddOrEven('bird'), 'even');
        assert.equal(isOddOrEven('wolf'), 'even');
    });
});