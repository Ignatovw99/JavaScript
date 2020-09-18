function calculate(fruit, weight, pricePerKg) {
    weight = weight / 1000;
    let total = pricePerKg * weight;
    console.log(`I need $${total.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`);
}

calculate('orange', 2500, 1.80)