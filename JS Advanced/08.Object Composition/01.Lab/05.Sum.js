function solve() {

    return {
        init(selector1, selector2, resultSelector) {
            this.firstNumberElement = document.querySelector(`${selector1}`);
            this.secondNumberElement = document.querySelector(`${selector2}`);
            this.resultElement = document.querySelector(`${resultSelector}`);
        },
        add: function() {
            this.resultElement.value = Number(this.firstNumberElement.value) + Number(this.secondNumberElement.value);
        },
        subtract: function() {
            this.resultElement.value = Number(this.firstNumberElement.value) - Number(this.secondNumberElement.value);
        }
    };
}

let asdasdasd = solve();

asdasdasd.init('123123', '2123', '213');
console.log(asdasdasd.add());