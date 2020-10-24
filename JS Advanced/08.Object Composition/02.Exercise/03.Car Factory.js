function solve(requirements) {
    const engines = [
        { power: 90, volume: 1800},
        { power: 120, volume: 2400},
        { power: 200, volume: 3500}
    ];

    const carriages = [ 'hatchback', 'coupe' ];
    
    let { model, power, color, carriage, wheelsize } = requirements;

    let engine = engines.sort((x, y) => x.power - y.power).find(x => x.power >= power);
    carriage = carriages.find(x => x == carriage);
    carriage = { type : carriage, color };
    wheelsize = wheelsize % 2 == 0 ? wheelsize - 1 : wheelsize;

    return {
        model,
        engine,
        carriage,
        wheels: [ wheelsize, wheelsize, wheelsize, wheelsize ]
    }
}
console.log(solve({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}));

console.log(solve({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}));