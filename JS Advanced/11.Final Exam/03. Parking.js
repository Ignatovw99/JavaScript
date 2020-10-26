class Parking {

    constructor(capacity) {

        this.capacity = capacity;
        this.vehicles = [];
    }

    getCarByNumber(carNumber) {
        return this.vehicles.find(x => x.carNumber === carNumber);
    }

    getCarInfo(car) {
        return `${car.carModel} == ${car.carNumber} - ${car.payed ? 'Has payed' : 'Not payed'}`;
    }

    addCar(carModel, carNumber) {
        if (this.vehicles.length === this.capacity) {
            throw new Error('Not enough parking space.');
        } else {
            let car = {
                carModel, carNumber, payed: false
            }
            this.vehicles.push(car);

            return `The ${carModel}, with a registration number ${carNumber}, parked.`;
        }
    }

    removeCar(carNumber) {
        let car = this.getCarByNumber(carNumber);
        if (car == undefined) {
            throw new Error(`The car, you're looking for, is not found.`);
        } else {
            if (!car.payed) {
                throw new Error(`${car.carNumber} needs to pay before leaving the parking lot.`);
            } else {
                this.vehicles.splice(this.vehicles.indexOf(car), 1);
                return `${carNumber} left the parking lot.`;
            }
        }
    }

    pay(carNumber) {
        let car = this.getCarByNumber(carNumber);
        if (car === undefined) {
            throw new Error(`${carNumber} is not in the parking lot.`);
        } else {
            if (car.payed) {
                throw new Error(`${carNumber}'s driver has already payed his ticket.`);
            } else {
                car.payed = true;
                return `${carNumber}'s driver successfully payed for his stay.`;
            }
        }
    }

    getStatistics(carNumber) {
        let result = [];
        if (carNumber=== undefined) {
            result.push(`The Parking Lot has ${this.capacity - this.vehicles.length} empty spots left.`);
            this.vehicles
                .sort((first, second) => first.carModel.localeCompare(second.carModel))
                .forEach(car => result.push(this.getCarInfo(car)));
        } else {
            let car = this.getCarByNumber(carNumber);
            result.push(this.getCarInfo(car));
        }
        return result.join('\n');
    }
}