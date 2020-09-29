class Ticket {

    constructor(destination, price, status) {
        this.destination = destination;
        this.price = price;
        this.status = status;
    }

    static compare(first, second, propertyKey) {
        if (propertyKey === 'price') {
            return first.price - second.price;
        }
        return first[propertyKey].localeCompare(second[propertyKey]);
    }
}

function solve(args, sortCriteria) {
    return args
        .map(x => {
            let [destination, price, status] = x.split('|');
            price = Number(price);
            return new Ticket(destination, price, status);
        })
        .sort((first, second) => Ticket.compare(first, second, sortCriteria));
}

solve(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'], 'status');