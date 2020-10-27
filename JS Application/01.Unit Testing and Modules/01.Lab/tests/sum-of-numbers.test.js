const assert = require('chai').assert;
const sum = require('../04.Sum of Numbers');

describe('sum(arr) - sum array of numbers', function() {

    it ('should return 3 for [1, 2]', () => {
        let result = sum([1, 2]);
        assert.equal(result, 3);
    });

    it ('should return 1 for [1]', () => {
        let result = sum([1]);
        assert.equal(result, 1);
    });

    it ('should return 0 for empty array', () => {
        let result = sum([]);
        assert.equal(result, 0);
    });

    it ('should return -3 for [1, -4]', () => {
        let result = sum([1, -4]);
        assert.equal(result, -3);
    });

    it ('should return NaN when input array does not contain numbers', () => {
        let result = sum([3, 'Not number', 2]);
        assert.isTrue(isNaN(result));
    });
});