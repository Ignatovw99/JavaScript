class VeterinaryClinic {

    constructor(clinicName, capacity) {
        this.clinicName = clinicName;
        this.capacity = capacity;
        this.clients = [];
        this.totalProfit = 0;
        this.currentWorkload = 0;
    }

    //TODO: refactor newCustomer method
    newCustomer(ownerName, petName, kind, procedures) {
        if (this.currentWorkload >= this.capacity) {
            throw new Error('Sorry, we are not able to accept more patients!');
        } else {
            kind = kind.toLowerCase();
            let customer = this.clients.find(c => c.ownerName == ownerName);
            if (customer === undefined) {
                customer = {
                    ownerName,
                    pets: []
                }
                this.clients.push(customer);
            }
            let currentPet = customer.pets.find(pet => pet.name === petName);
            if (currentPet) {
                if (currentPet.procedures.length > 0) {
                    throw new Error(`This pet is already registered under ${ownerName} name! ${petName} is on our lists, waiting for ${currentPet.procedures.join(', ')}.`);
                } else {
                    currentPet.procedures = procedures;
                    if (procedures.length > 0) {
                        this.currentWorkload++;
                    }
                    return `Welcome ${petName}!`;
                }
            } else {
                currentPet = {
                    name: petName,
                    kind,
                    procedures
                };                
                if (procedures.length > 0) {
                    this.currentWorkload++;
                }
                customer.pets.push(currentPet);
                return `Welcome ${petName}!`;
            }
        }
    }

    onLeaving(ownerName, petName) {
        let client = this.clients.find(c => c.ownerName === ownerName);
        if (!client) {
            throw new Error('Sorry, there is no such client!');
        }
        let pet = client.pets.find(p => p.name === petName);
        if (!pet || pet.procedures.length == 0) {
            throw new Error(`Sorry, there are no procedures for ${petName}!`);
        }
        let proceduresProfit = pet.procedures.length * 500.00;
        this.totalProfit += proceduresProfit;
        this.currentWorkload--;
        pet.procedures = [];
        return `Goodbye ${petName}. Stay safe!`;
    }

    toString() {
        let clinicBusinessInPerc = (this.currentWorkload / this.capacity) * 100;
        let result = [
            `${this.clinicName} is ${Math.floor(clinicBusinessInPerc)}% busy today!`,
            `Total profit: ${this.totalProfit.toFixed(2)}$`
        ];

        this.clients.sort((f, s) => f.ownerName.localeCompare(s.ownerName)).forEach(client => {
            result.push(`${client.ownerName} with:`);
            client.pets.sort((f, s) => f.name.localeCompare(s.name)).forEach(pet => {
                result.push(`---${pet.name} - a ${pet.kind} that needs: ${pet.procedures.join(', ')}`);
            });
        });

        return result.join('\n');
    }
}

let clinic = new VeterinaryClinic('SoftCare', 10);
console.log(clinic.newCustomer('Jim Jones', 'Tom', 'Cat', ['A154B', '2C32B', '12CDB']));
console.log(clinic.newCustomer('Anna Morgan', 'Max', 'Dog', ['SK456', 'DFG45', 'KS456']));
console.log(clinic.newCustomer('Jim Jones', 'Tiny', 'Cat', ['A154B']));
console.log(clinic.onLeaving('Jim Jones', 'Tiny'));