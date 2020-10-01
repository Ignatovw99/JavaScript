const createProductObject = (args) => {
    let [product, price] = args.split(' : ');
    return {product, price};
};

const sortAlphabeticallyAscending = (first, second) => first.product.localeCompare(second.product);

function createCatalogueSection(catalogue, sectionName) {
    catalogue[sectionName] = {};
    catalogue[sectionName].products = [];
}

const catalogueReducer = (catalogueAcc, currentProd) => {   //Can be done in first map where creating the objects / letter -> list of objs
    let productFirstLetter = currentProd.product[0].toUpperCase();
    if (!catalogueAcc.hasOwnProperty(productFirstLetter)) {
        createCatalogueSection(catalogueAcc, productFirstLetter);
    }
    catalogueAcc[productFirstLetter].products.push(currentProd);
    return catalogueAcc;
};

const productPrinter = (productObj) => console.log(`  ${productObj.product}: ${productObj.price}`);

const cataloguePrinter = (section, catalogue) => {
    console.log(section);
    catalogue[section].products
        .forEach(productPrinter);
};

function createStoreCatalogue(input) {
    let catalogue = input
        .map(createProductObject)
        .sort(sortAlphabeticallyAscending)
        .reduce(catalogueReducer, {});

    Object.keys(catalogue)
        .forEach(section => cataloguePrinter(section, catalogue));
}

createStoreCatalogue(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25']);