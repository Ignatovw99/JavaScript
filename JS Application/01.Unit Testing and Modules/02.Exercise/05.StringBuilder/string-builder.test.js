const {assert} = require('chai');
const StringBuilder = require('./string-builder');

describe('StringBuilder', function() {

    let sb;

    beforeEach(() => {
        sb = new StringBuilder();
    });

    describe('verify input param', () => {

        it('should throw error when the input param is not a string in costructor', () => {
            assert.throw(() => new StringBuilder(3213));
        });
        
        it('should throw error when the input param is not a string in append', () => {
            assert.throw(() => {
                sb.append({});
            });
        });
        
        it('should throw error when the input param is not a string in prepend', () => {
            assert.throw(() => {
                sb.prepend([]);
            });
        });
        
        it('should throw error when the input param is not a string in insertAt', () => {
            assert.throw(() => {
                sb.insertAt(true, 1);
            });
        });
    });

    describe('constructor', () => {
        it('should work correctly with an argument', () => {
            let expected = 'arg';
            sb = new StringBuilder(expected);
            let actual = sb.toString();
            assert.equal(actual, expected);
        });

        it('should work correctly without an argument', () => {
            let expected = '';
            sb = new StringBuilder();
            let actual = sb.toString();
            assert.equal(actual, expected);
        });
    });
    
    describe('append', () => {
        it('should work correctly with an argument', () => {
            let expected = 'param';
            sb.append(expected);
            let actual = sb.toString();
            assert.equal(actual, expected);
        });

        it('should work correctly with empty string', () => {
            let expected = '';
            sb.append(expected);
            let actual = sb.toString();
            assert.equal(actual, expected);
        });

        it('should append string at the end', () => {
            let expected = 'string';
            sb.append('stri');
            sb.append('ng');
            let actual = sb.toString();
            assert.equal(actual, expected);
        });
    });
    
    describe('prepend', () => {
        it('should work correctly with an argument', () => {
            let expected = 'param';
            sb.prepend(expected);
            let actual = sb.toString();
            assert.equal(actual, expected);
        });

        it('should work correctly with empty string', () => {
            let expected = '';
            sb.prepend(expected);
            let actual = sb.toString();
            assert.equal(actual, expected);
        });

        it('should place string at the beginning', () => {
            let expected = 'string';
            sb.prepend('ring');
            sb.prepend('st');
            let actual = sb.toString();
            assert.equal(actual, expected);
        });
    });
    
    describe('insertAt', () => {
        it('should work correctly with an argument', () => {
            let expected = 'parameter';
            sb.append('pater');
            sb.insertAt('rame', 2);
            let actual = sb.toString();
            assert.equal(actual, expected);
        });

        it('should work correctly with empty string', () => {
            let expected = 'empty';
            sb.append('empty');
            sb.insertAt('', 2);
            let actual = sb.toString();
            assert.equal(actual, expected);
        });

        it('should append when index is greater than length', () => {
            let expected = 'string';
            sb.append(expected);
            sb.insertAt('asd', expected.length + 10);
            let actual = sb.toString();
            assert.equal(actual, expected + 'asd');
        });
        
        it('should prepend when index is less than 0', () => {
            let expected = 'string';
            sb.append(expected);
            sb.insertAt('asd', -21);
            let actual = sb.toString();
            assert.equal(actual, 'asd' + expected);
        });
    });
    
    describe('remove', () => {
        it('should work correctly within range', () => {
            sb.append('input');
            sb.remove(1, 2);
            let actual = sb.toString();
            assert.equal(actual, 'iut');
        });

        it('should work correctly with startIndex less than 0', () => {
            sb.append('input');
            sb.remove(-1, 3);  // -1 transformed to last index
            let actual = sb.toString();
            assert.equal(actual, 'inpu');
        });

        it('should work correctly when startIndex is greater than length', () => {
            sb.append('expected');
            sb.remove('expected'.length + 1, 4);
            let actual = sb.toString();
            assert.equal(actual, 'expected');
        });
    });

    describe('toString', () => {
        it('should work correctly', () => {
            let expected = 'toString';
            sb.append(expected);
            let actual = sb.toString();
            assert.equal(actual, expected);
        });
     });
});