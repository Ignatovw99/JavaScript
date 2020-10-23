function solveClasses() {

    class Hall {

        constructor(capacity, name) {
            this.capacity = capacity;
            this.name = name;
            this.events = [];
        }

        hallEvent(title) {
            if (this.events.find(e => e.title === title)) {
                throw new Error('This event is already added!');
            } else {
                let eventObj = {
                    title
                };
                this.events.push(eventObj);
                return 'Event is added.';
            }
        }

        close() {
            this.events = [];
            return `${this.name} hall is closed.`
        }

        toString() {
            let result = [
                `${this.name} hall - ${this.capacity}`
            ];
            if (this.events.length > 0) {
                result.push(`Events: ${this.events.map(x => x.title).join(', ')}`);
            }
            return result.join('\n');
        }
    }

    class MovieTheater extends Hall {

        constructor(capacity, name, screenSize) {
            super(capacity, name);
            this.screenSize = screenSize;
        }

        close() {
            return super.close() + 'Аll screenings are over.';
        }

        toString() {
            return [
                super.toString(),
                `${this.name} is a movie theater with ${this.screenSize} screensize and ${this.capacity} seats capacity.`
            ].join('\n');
        }
    }

    class ConcertHall extends Hall {

        constructor(capacity, name) {
            super(capacity, name);
        }

        hallEvent(title, performers) {
            let result = super.hallEvent(title);
            let event = this.events.find(e => e.title === title);
            Object.assign(event, {performers}); //or add new propert in class not in array 
            return result;
        }

        close() {
            return super.close() + 'Аll performances are over.';
        }

        toString() {
            let result = [super.toString()];

            if (this.events.length > 0) {
                result.push(`Performers: ${this.events.reduce((acc, cur) => {
                    acc.push(cur.performers);
                    return acc;
                }, [])}.`);
            }
            return result.join('\n');
        }
    }

    return {
        Hall,
        MovieTheater,
        ConcertHall
    };
}

let classes = solveClasses();
let concert = new classes.ConcertHall(123, 'title');
concert.hallEvent('vip', ['asd']);
console.log(concert.events);
concert.hallEvent('vip', ['asd']);