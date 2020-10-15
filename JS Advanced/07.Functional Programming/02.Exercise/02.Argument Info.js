function getArgumentsInfo(...args) {

    let typesObj = {};
    args.forEach(arg => {
        let type = typeof arg;
        console.log(`${type}: ${arg}`);
        if (!typesObj[type]) {
            typesObj[type] = 0;
        }
        typesObj[type]++;
    });


    Object.keys(typesObj)
        .sort((firstType, secondType) => typesObj[secondType] - typesObj[firstType])
        .forEach(typeProperty => console.log(`${typeProperty} = ${typesObj[typeProperty]}`));
}

getArgumentsInfo('sart', 'asd', 21, 213, function() {});