function printPopulationTowns(townArgs) {
    let populationByTowns = townArgs
        .map(x => x.split(' <-> '))
        .reduce((obj, town) => {
            obj[town[0]] = (obj[town[0]] || 0) + Number(town[1]);
            return obj;
        },{});
    Object.keys(populationByTowns)
        .forEach(propertyName => console.log(`${propertyName} : ${populationByTowns[propertyName]}`))
}

printPopulationTowns(['Sofia <-> 123', 'Sofia <-> 3']);