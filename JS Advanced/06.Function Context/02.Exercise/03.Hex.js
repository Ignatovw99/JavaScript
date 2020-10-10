class Hex {

    constructor(value) {
        this.value = value;
    }

    valueOf() {
        return this.value;
    }

    toString() {
        return `0x${this.value.toString(16).toUpperCase()}`;
    }

    plus(value) {
        let result = this.value + value.valueOf();
        return new Hex(result);
    }

    minus(value) {
        let result = this.value - value.valueOf();
        return new Hex(result);
    }

    parse(hexText) {
        return parseInt(hexText, 16);
    }
}

let hex = new Hex(13);

hex.plus(new Hex(2));

console.log();