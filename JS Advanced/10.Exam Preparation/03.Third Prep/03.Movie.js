class Movie {

    constructor(movieName, ticketPrice) {
        this.movieName = movieName;
        this.ticketPrice = ticketPrice; //string
        this.screenings = [];
    }

    newScreening(date, hall, description) {
        if (this.screenings.find(s => s.date === date && s.hall === hall) !== undefined) {
            throw new Error(`Sorry, ${hall} hall is not available on ${date}`);
        }
        let screening = {
            date, hall, description
        };
        this.screenings.push(screening);
        return `New screening of ${this.movieName} is added.`
    }

    endScreening(date, hall, soldTickets) {

    }
}