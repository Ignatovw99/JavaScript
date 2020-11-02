const {assert} = require('chai');
const lookupChar = require('./charLookup');

describe('Look up for char in string', function() {

    it('Should return undefined with a non-string first parameter', () => {
        let result = lookupChar(21, 1);
        assert.equal(result, undefined);
    });

    it('Should return undefined with a non-number second parameter', () => {
        let result = lookupChar('string', 'non-number');
        assert.equal(result, undefined);
    });

    it('Should return undefined with a floating-point as second parameter', () => {
        let result = lookupChar('John', 3.1);
        assert.equal(result, undefined);
    });

    it('Should return incorect index when index is greater than string length', () => {
        let result = lookupChar('Frank', 11);
        assert.equal(result, 'Incorrect index');
    });

    it('Should return incorect index when index is less than string length', () => {
        let result = lookupChar('Frank', -2);
        assert.equal(result, 'Incorrect index');
    });

    it('Should return incorrect index when index is equal to string length', () => {
        let result = lookupChar('John', 4);
        assert.equal(result, 'Incorrect index');
    });

    it('Should return correct value when input params are correct', () => {
        assert.equal(lookupChar('Frank', 2), 'a');
        assert.equal(lookupChar('John', 1), 'o');
        assert.equal(lookupChar('John', 0), 'J');
    })
});