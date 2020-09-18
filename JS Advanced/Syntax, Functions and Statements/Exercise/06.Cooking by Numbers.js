function startCooking(args) {
    let number = Number(args.shift());

    for (let i = 0; i < args.length; i++) {
        switch (args[i]) {
            case 'chop':
                number = number / 2;
                break;
            case 'dice':
                number = Math.sqrt(number);
                break;
            case 'spice':
                number = ++number;
                break
            case 'bake':
                number = number * 3;
                break;
            case 'fillet':
                number = number * 0.8;
                break;
        }
        console.log(number);
    }
}

function solve(args) {
    startCooking(args);
}