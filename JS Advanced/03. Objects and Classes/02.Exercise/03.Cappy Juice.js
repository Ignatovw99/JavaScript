const convertToJuiceObject = (args) => {
    let [type, quantity] = args.split(' => ');
    quantity = Number(quantity);
    return {type, quantity};
};

const juiceBottlesReducer = (juiceAcc, currentJuice, juiceBottles) => {
    let juiceType = currentJuice.type;
    if (!juiceAcc.hasOwnProperty(juiceType)) {  //or !juiceAcc[juiceType]
        juiceAcc[juiceType] = 0;
    }
    juiceAcc[juiceType] += currentJuice.quantity;
    if (juiceAcc[juiceType] >= 1000) {
        if (!juiceBottles[juiceType]) {
            juiceBottles[juiceType] = 0;
        }
        while (juiceAcc[juiceType] >= 1000) {  // or Math.floor(juiceAcc[juiceType] / 1000)
            juiceBottles[juiceType]++;
            juiceAcc[juiceType] -= 1000;
        }
    }
    return juiceAcc;
};

const printBottle = (bottle, juiceBottles) => console.log(`${bottle} => ${juiceBottles[bottle]}`);

function createJuiceBottles(inputJuices) {
    let juiceBottles = {};

    inputJuices
        .map(convertToJuiceObject)
        .reduce((juiceAcc, currentJuice) => juiceBottlesReducer(juiceAcc, currentJuice, juiceBottles), {});

    Object.keys(juiceBottles)
        .forEach(bottle => printBottle(bottle, juiceBottles));
}

createJuiceBottles(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']);