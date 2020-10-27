require('chai').should();
const calc = require('../calculator');

describe('Calculate division', function() {

    it('Should return positive number when dividing two positive numbers', () => {
        let result = calc.divide(10, 2);
        result.should.equal(5); //Attach the property should to the result
    });
});