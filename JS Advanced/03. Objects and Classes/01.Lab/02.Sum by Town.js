function getTownIncomes(args) {
    let resultObj = args.reduce((obj, x, index, arr) => {
        if (index % 2 === 0) {
            if (!obj.hasOwnProperty(x)) {
                obj[x] = 0;
            }
            obj[x] += Number(arr[index + 1]);
        }
        return obj;
    }, {});
    return JSON.stringify(resultObj);
}

console.log(
    getTownIncomes(['Sofia', '21', 'Sofia', '3', 'as', '32']));