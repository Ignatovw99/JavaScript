class List {

    constructor() {
        this._numbers = [];
        this.size = 0;
    }

    add(element) {
        if (this._numbers.length === 0) {
            this.size++;
            this._numbers.push(element);
            return;
        }
        let added = false;
        for (let i = 0; i < this._numbers.length; i++) {
            if (this._numbers[i] > element) {
                this.size++;
                this._numbers.splice(i, 0, element);
                added = true;
                return;
            }
        }
        if (!added) {

            this.size++;
            this._numbers.push(element);
        }
    }

    remove(index) {
        if (this._numbers.length < 0 || this._numbers.length < index) {
            return;
        }
        if (this._numbers.length !== 0) {
            this.size--;
            this._numbers.splice(index, 1);
        }
    }

    get(index) {
        if (this._numbers.length < 0 || this._numbers.length < index) {
            return;
        }
        return this._numbers[index];
    }
}

var myList = new List();
myList.add(5);
myList.add(3);
myList.remove(0);