const {assert} = require('chai');
const PaymentPackage = require('./payment-package');

describe('PaymentPackage', function() {

    let paymentPackage;
    const expectedName = 'John';
    const expectedValue = 32;
    
    beforeEach(() => paymentPackage = new PaymentPackage(expectedName, expectedValue));

    describe('constructor', function() {

        it('should work correctly with two params', () => {
            paymentPackage = new PaymentPackage('John', 30);
            let expected = new PaymentPackage('John', 30);
            assert.deepEqual(paymentPackage, expected);
        });
        
        it('should have as a default value VAT 20', () => {
            assert.equal(paymentPackage.VAT, 20);
        });
        
        it('should have as a default value active true', () => {
            assert.equal(paymentPackage.active, true);
        });
    });
    
    describe('get name', function() {

        it('should get the name correctly', () => {
            assert.equal(paymentPackage.name, expectedName);
        });
    });

    describe('set name', function() {

        it('should throw an error with incorrect name', () => {
            assert.throw(() => paymentPackage.name = 321);
        });
        
        it('should throw an error with an empty name', () => {
            assert.throw(() => paymentPackage.name = '');
        });
        
        it('should set a new name when the input param is valid', () => {
            let expected = 'Frank';
            paymentPackage.name = expected;
            assert.equal(paymentPackage.name, expected);
        });
    });
    
    describe('get value', function() {

        it('should get the value correctly', () => {
            assert.equal(paymentPackage.value, expectedValue);
        });
    });

    describe('set value', function() {

        it('should throw an error with incorrect value', () => {
            assert.throw(() => paymentPackage.value = 'Frank');
        });
        
        it('should throw an error with a negative value', () => {
            assert.throw(() => paymentPackage.value = -2);
        });
        
        it('should set a new value when the input param is valid', () => {
            let expected = 214;
            paymentPackage.value = expected;
            assert.equal(paymentPackage.value, expected);
        });
    });
    
    describe('get VAT', function() {

        it('should get the VAT correctly', () => {
            paymentPackage.VAT = 13;
            assert.equal(paymentPackage.VAT, 13);
        });
    });
    
    describe('set VAT', function() {

        
        it('should throw an error with incorrect value', () => {
            assert.throw(() => paymentPackage.VAT = 'Frank');
        });
        
        it('should throw an error with a negative value', () => {
            assert.throw(() => paymentPackage.VAT = -2);
        });
        
        it('should set a new value when the input param is valid', () => {
            let expected = 214;
            paymentPackage.VAT = expected;
            assert.equal(paymentPackage.VAT, expected);
        });
    });
    
    describe('get active', function() {

        it('should get the active correctly', () => {
            paymentPackage.active = false;
            assert.equal(paymentPackage.active, false);
        });
    });
    
    describe('set active', function() {

        
        it('should throw an error with incorrect value', () => {
            assert.throw(() => paymentPackage.active = {});
        });
        
        it('should set a new value when the input param is valid', () => {
            let expected = false;
            paymentPackage.active = expected;
            assert.equal(paymentPackage.active, expected);
        });
    });
    
    describe('toString', function() {
        
        it('should return the correct result', () => {
            paymentPackage.active = false;
            paymentPackage.VAT = 31;
            const result = [
                `Package: ${paymentPackage.name}` + (paymentPackage.active === false ? ' (inactive)' : ''),
                `- Value (excl. VAT): ${paymentPackage.value}`,
                `- Value (VAT ${paymentPackage.VAT}%): ${paymentPackage.value * (1 + paymentPackage.VAT / 100)}`
            ];
            let actual = paymentPackage.toString();
            assert.equal(actual, result.join('\n'));
        });
    });
});