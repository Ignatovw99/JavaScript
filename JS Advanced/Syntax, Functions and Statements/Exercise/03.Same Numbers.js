function hasSameDigits(number) {
    let firstDigit = number % 10;
    let areSame = true;
    let sum = 0;
    while (number / 10 > 0) {
        let current = number % 10;
        sum += current;

        if (current != firstDigit) {
            areSame = false;
        }

        number = Math.floor(number / 10);
    }

    console.log(areSame);
    console.log(sum);
}

hasSameDigits('1234');