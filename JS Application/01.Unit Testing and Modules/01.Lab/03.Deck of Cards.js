const makeCard = require('./02.Playing Cards');

function printDeckOfCards(cards) {

    let deck = [];

    for (const cardText of cards) {
        let face = cardText.substring(0, cardText.length - 1);
        let suit = cardText.substring(cardText.length - 1);
        try {
            let card = makeCard(face, suit);
            deck.push(card);
        } catch (err) {
            console.log('Invalid card: ' + cardText);
            return;
        }
    }

    console.log(deck.join(' '));
}

printDeckOfCards(['AS', '10D', 'KH', '2C']);
printDeckOfCards(['AX']);