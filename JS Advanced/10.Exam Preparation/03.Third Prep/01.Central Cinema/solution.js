function solve() {

    const addMovieContainerElement = document.querySelector('#container');
    const [movieNameInputElement,
        movieHallInputElement,
        movieTicketPriceInputElement,
        movieAddButtonElement
    ] = Array.from(addMovieContainerElement.children);

    const moviesOnScreanUnorderedListElement = document.querySelector('#movies > ul');
    
    const archivedMoviesUnorderedListElement = document.querySelector('#archive > ul');
    const clearButtonElement = document.querySelector('#archive > button');

    movieAddButtonElement.addEventListener('click', addMovie);
    clearButtonElement.addEventListener('click', () => {
        Array.from(archivedMoviesUnorderedListElement.children).forEach(x => x.remove());
    })

    function addMovie(e) {
        e.preventDefault();

        const name = movieNameInputElement.value;
        const hall = movieHallInputElement.value;
        const ticketPrice = movieTicketPriceInputElement.value;

        if (isEmpty(name) || isEmpty(hall) || isEmpty(ticketPrice)) {
            return;
        }

        const ticketPriceNumber = Number(ticketPrice);
        if (!ticketPriceNumber) {
            return;
        }

        movieNameInputElement.value = '';
        movieHallInputElement.value = '';
        movieTicketPriceInputElement.value = '';

        const hallElement = createElement('strong', `Hall: ${hall}`);
        
        const ticketPriceStrongElement = createElement('strong', ticketPriceNumber.toFixed(2));
        const ticketsSoldInputElement = createElement('input', '', { placeholder: 'Tickets Sold' });
        const movieArchiveButton = createElement('button', 'Archive');

        const deleteButton = createElement('button', 'Delete');

        const divMovieElement = createElement(
            'div',
            [
                ticketPriceStrongElement,
                ticketsSoldInputElement,
                movieArchiveButton
            ]
        );

        const movieItemElement = createElement(
            'li',
            [
                createElement('span', name),
                hallElement,
                divMovieElement
            ]
        );

        const totalProfit = createElement('strong', 'Total amount: ');

        moviesOnScreanUnorderedListElement.appendChild(movieItemElement);

        movieArchiveButton.addEventListener('click', archiveMovie);
        deleteButton.addEventListener('click', () => movieItemElement.remove());

        
        function archiveMovie() {
            const soldTickets = ticketsSoldInputElement.value;
            if (isEmpty(soldTickets)) {
                return;
            }

            const soldTicketsNumber = Number(soldTickets);
            if (isNaN(soldTicketsNumber)) { //TODO be careful with 0
                return;
            }

            hallElement.remove();
            divMovieElement.remove();
            ticketPriceStrongElement.remove();
            totalProfit.textContent += (soldTicketsNumber * ticketPriceNumber).toFixed(2);

            movieItemElement.appendChild(totalProfit);
            movieItemElement.appendChild(deleteButton);
            archivedMoviesUnorderedListElement.appendChild(movieItemElement);

        }
    }

    function isEmpty(value) {
        return !value;
    }

    function createElement(type, content, attributes) {
        const result = document.createElement(type);

        if (attributes !== undefined) {
            Object.assign(result, attributes);
        }

        if (Array.isArray(content)) {
            content.forEach(appendChildNode);
        } else {
            appendChildNode(content);
        }

        function appendChildNode(node) {
            if (typeof node === 'string') {
                node = document.createTextNode(node);
            }
            result.appendChild(node);
        }
    
        return result;
    }
}