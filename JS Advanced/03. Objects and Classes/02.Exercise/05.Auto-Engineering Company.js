function createRegister(input) {
    return input
        .map(x => {
            let [carBrand, carModel, produced] = x.split(' | ');
            produced = Number(produced);
            return {carBrand, carModel, produced};
        })
        .reduce((registry, car) => {
            let brand = car.carBrand;
            if (!registry.hasOwnProperty(brand)) {
                registry[brand] = {};
            }
            let model = car.carModel;
            if (!registry[brand].hasOwnProperty(model)) {
                registry[brand][model] = 0;
            }
            registry[brand][model] += car.produced;
            return registry;
        }, {});
}


function solve(args) {
    let registry = createRegister(args);
    Object.keys(registry)
        .forEach(brand => {
            console.log(brand);
            let modelsObject = registry[brand];
            Object.keys(modelsObject)
                .forEach(model => console.log(`###${model} -> ${modelsObject[model]}`));
        })
}
solve(['Audi | Q4 | 231', 'Audi | Q4 | 132']);