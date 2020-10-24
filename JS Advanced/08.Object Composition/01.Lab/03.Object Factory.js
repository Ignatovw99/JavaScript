function solve(input) {
    let propList = JSON.parse(input);

    propList.forEach(x => console.log(x));

    propList.reduce((obj, current) => ({...obj, ...current}), {});
    let result = propList.reduce((obj, current) => Object.assign({}, obj, current), {});// same as above
    return result;
}

solve(`[]`);