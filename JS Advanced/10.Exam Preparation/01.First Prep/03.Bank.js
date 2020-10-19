class Bank {

    constructor(bankName) {
        this._bankName = bankName;
        this.allCustomers = [];
    }

    newCustomer(customer) {
        if (this.allCustomers.find(c => c.firstName === customer.firstName && c.lastName === customer.lastName) !== undefined) {
            throw new Error(`${customer.firstName} ${customer.lastName} is already our customer!`);
        } else {
            customer.totalMoney = 0;
            customer.transactions = [];
            this.allCustomers.push(customer);
            let { firstName, lastName, personalId } = customer;
            return { firstName, lastName, personalId };
        }
    }

    depositMoney(personalId, amount) {
        const customer = this.allCustomers.find(c => c.personalId === personalId);

        if (customer === undefined) {
            throw new Error('We have no customer with this ID!');
        } else {
            customer.totalMoney += amount;
            customer.transactions.push(`${customer.firstName} ${customer.lastName} made deposit of ${amount}$!`);
            return `${customer.totalMoney}$`;
        }
    }

    withdrawMoney(personalId, amount) {
        const customer = this.allCustomers.find(c => c.personalId === personalId);

        if (customer === undefined) {
            throw new Error('We have no customer with this ID!');
        } else if (customer.totalMoney < amount) {
            throw new Error(`${customer.firstName} ${customer.lastName} does not have enough money to withdraw that amount!`);
        } else {
            customer.totalMoney -= amount;
            customer.transactions.push(`${customer.firstName} ${customer.lastName} withdrew ${amount}$!`);
            return `${customer.totalMoney}$`;
        }
    }

    customerInfo(personalId) {
        const customer = this.allCustomers.find(c => c.personalId === personalId);

        if (customer === undefined) {
            throw new Error('We have no customer with this ID!');
        } else {
            const result = [
                `Bank name: ${this._bankName}`,
                `Customer name: ${customer.firstName} ${customer.lastName}`,
                `Customer ID: ${customer.personalId}`,
                `Total Money: ${customer.totalMoney}$`
            ];

            if (customer.transactions.length > 0) {
                result.push('Transactions:');
                customer.transactions
                    .forEach((transaction, index, totalTransactions) => result.push((totalTransactions.length - index) + '. ' + totalTransactions[totalTransactions.length - index - 1]));
            }
            // customer.transactions.slice().reverse().forEach()
            return result.join('\n');
        }
    }
}

let bank = new Bank('SoftUni Bank');

console.log(bank.newCustomer({firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267}));
console.log(bank.newCustomer({firstName: 'Mihaela', lastName: 'Mileva', personalId: 4151596}));

bank.depositMoney(6233267, 250);

console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596,555);

console.log(bank.withdrawMoney(6233267, 125));
console.log(bank.customerInfo(6233267));