const townObjReducer = (townObj, propertyValue, index, properties) => {
    if (!isNaN(propertyValue)) {
        propertyValue = Number(Number(propertyValue).toFixed(2));
    }
    townObj[properties[index]] = propertyValue;
    return townObj;
};

function convertToJson(properties, towns) {
    let result = [];
    towns.forEach(x => {
        let townObj =
            x.reduce((townObj, propertyValue, index) => townObjReducer(townObj, propertyValue, index, properties), {});
        result.push(townObj);
    });
    return JSON.stringify(result);
}

function solve(args) {
    let townDetails = args
        .map(row => row.split('|')
            .map(x => x.trim())
            .filter(x => x !== '')
        );
    let properties = townDetails.shift();
    console.log(convertToJson(properties, townDetails));
}

solve(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']);