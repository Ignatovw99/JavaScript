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

// expect(result.prototype.hasOwnProperty('add')).to.equal(true, "Function add() was not found");
// expect(result.prototype.hasOwnProperty('remove')).to.equal(true, "Function remove() was not found");
// expect(result.prototype.hasOwnProperty('get')).to.equal(true, "Function get() was not found");

// Instantiate and test functionality
var myList = new List();
// expect(myList.hasOwnProperty('size')).to.equal(true, "Property size was not found");

myList.add(5);
// expect(myList.get(0)).to.equal(5, "Element wasn't added");

myList.add(3);
// expect(myList.get(0)).to.equal(3, "Collection wasn't sorted");

myList.remove(0);
// expect(myList.get(0)).to.equal(5, "Element wasn't removed");
// expect(myList.size).to.equal(1, "Element wasn't removed");