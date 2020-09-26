function updateProductPrice(object, product, town, price) {
    object[product] = {
        town: town,
        price: price
    };
}

function findProductsAtLowestPrice(args) {
    let productsWithLowestPrice = args
        .map(x => x.split(' | '))
        .reduce((object, currentOffer) => {
            let [town, product, price] = currentOffer;
            if (object.hasOwnProperty(product)) {
                if (object[product].price > price) {
                    updateProductPrice(object, product, town, price);
                }
            } else {
                updateProductPrice(object, product, town, price);
            }
            return object;
        }, {});

    Object.keys(productsWithLowestPrice)
        .reduce((accArr, product) => {
            accArr.push(`${product} -> ${productsWithLowestPrice[product].price} (${productsWithLowestPrice[product].town})`);
            return accArr;
        }, [])
        .forEach(x => console.log(x));
}

findProductsAtLowestPrice(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']);