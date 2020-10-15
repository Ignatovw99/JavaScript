function solution() {
    let microelements = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    let meals = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
    };

    function restock(microelement, quantity) {
        microelements[microelement] += quantity;
        return 'Success';
    }

    function prepare(recipe, quantity) {
        let chosenMeal = meals[recipe];
        let neededMicroelements = Object.keys(chosenMeal).reduce((objAcc, currentProperty) => {
            objAcc[currentProperty] = 0;
            return objAcc;
        }, {});

        for (let i = 0; i < quantity; i++) {
            for (const property in chosenMeal) {
                if (chosenMeal.hasOwnProperty(property)) {
                    neededMicroelements[property] += chosenMeal[property];
                    if (neededMicroelements[property] > microelements[property]) {
                        return `Error: not enough ${property} in stock`;
                    }
                }
            }
        }
    
        for (const property in neededMicroelements) {
            if (neededMicroelements.hasOwnProperty(property)) {
                microelements[property] -= neededMicroelements[property];
            }
        }

        return 'Success';
    }

    function report() {
        return Object.keys(microelements)
            .reduce((report, microelement) => report += `${microelement}=${microelements[microelement]} `, '')
            .trim();
    }
 
    return function(input) {
        let args = input.split(' ');
        let [command, element , quantity] = args;
        quantity = Number(quantity);
        if (command == 'restock') {
            return restock(element, quantity);
        } else if (command == 'prepare') {
            return prepare(element, quantity);
        } else {
            return report();
        }
    }
}

let manager = solution();
console.log(manager('prepare turkey 1');
manager('restock protein 10');
manager('prepare turkey 1');
manager('restock carbohydrate 10');
manager('prepare turkey 1');
manager('restock fat 10');
manager('prepare turkey 1');
manager('restock flavour 10');
manager('prepare turkey 1');
manager('report');