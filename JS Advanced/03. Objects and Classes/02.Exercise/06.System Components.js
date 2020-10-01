const mapToComponentObject = arg => {
    let [systemName, componentName, subcomponentName] = arg.split(' | ');
    return {systemName, componentName, subcomponentName};
};

const createSystemRegister = (systemRegister, currentComponent) => {
    let systemName = currentComponent.systemName;
    if (!systemRegister[systemName]) {
        systemRegister[systemName] = {};
    }
    let componentName = currentComponent.componentName;
    if (!systemRegister[systemName][componentName]) {
        systemRegister[systemName][componentName] = [];
    }
    systemRegister[systemName][componentName].push(currentComponent.subcomponentName);
    return systemRegister;
};

const systemSortCriterias = (firstSystem, secondSystem) => {
    let firstSystemComponentsObject = firstSystem[1];
    let secondSystemComponentsObject = secondSystem[1];
    let componentsCountSorting = Object.keys(secondSystemComponentsObject).length - Object.keys(firstSystemComponentsObject).length;
    return componentsCountSorting || firstSystem[0].localeCompare(secondSystem[0], 'en', {sensitivity: 'base'});// system names case insensitive soring
};

const sortSystemComponents = (firstSystemEntry, secondSystemEntry) => secondSystemEntry[1].length - firstSystemEntry[1].length;

const printSystemComponents = systemEntry => {
    let systemName = systemEntry[0];
    let systemComponents = systemEntry[1];
    console.log(systemName);
    Object.entries(systemComponents)
        .sort(sortSystemComponents)
        .forEach(componentEntry => {
            let componentName = componentEntry[0];
            console.log('|||' + componentName);
            let subcomponents = componentEntry[1];
            subcomponents
                .forEach(subcomponent => console.log('||||||' + subcomponent))
        });
};

function registerSystemComponents(input) {
    let systemRegister = input
        .map(mapToComponentObject)
        .reduce(createSystemRegister, {});

    Object.entries(systemRegister)
        .sort(systemSortCriterias)
        .forEach(printSystemComponents);
}

registerSystemComponents([
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page'
]);