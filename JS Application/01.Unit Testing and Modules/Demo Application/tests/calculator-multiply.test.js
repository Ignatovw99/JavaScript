const expect = require('chai').expect;
const calc = require('../calculator');

describe('Calculate multiplication', function() {

    it('Should return positive number when multiplying two positive numbers', () => {
        let result = calc.multiply(2, 3);

        expect(result).to.equal(6);
    });
});