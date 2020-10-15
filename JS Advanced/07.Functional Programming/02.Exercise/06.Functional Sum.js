let functionalAdd = (function functionalSum() {
    let total = 0;
    function add(num) {
        total += num;
        return add;
    };
    add.toString = () => total;
    return add;
})();

console.log(functionalAdd(3)(10)(14).toString());

