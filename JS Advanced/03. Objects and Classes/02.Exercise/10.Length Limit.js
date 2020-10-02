class Stringer {

    constructor(innerString, innerLength) {
        this.innerString = innerString;
        this.innerLength = innerLength;
    }

    increase(length) {
        this.innerLength += length;
    }

    decrease(length) {
        let newLength = this.innerLength - length;
        if (newLength < 0) {
            newLength = 0;
        }
        this.innerLength = newLength;
    }

    toString() {
        let result = this.innerString.slice(0, this.innerLength);
        if (this.innerLength < this.innerString.length) {
            result += '...';
        }

        return result;
    }

}

let test = new Stringer('Test', 5);
console.log(test.toString()); // Test
test.decrease(3);
console.log(test.toString()); // Te...
test.decrease(5);
console.log(test.toString()); // ...
test.increase(4);
console.log(test.toString()); // Test