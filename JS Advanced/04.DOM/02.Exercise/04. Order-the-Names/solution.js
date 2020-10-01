function solve() {

    let addButtonElement = document.getElementsByTagName('button')[0];
    let inputNameElement = document.getElementsByTagName('input')[0];

    let orderListLettersElements = document.querySelectorAll('ol li');

    addButtonElement.addEventListener('click', function () {
        let nameInputValue = inputNameElement.value;
        if (!nameInputValue) {
            return;
        }

        let name = nameInputValue[0].toUpperCase() + nameInputValue.slice(1).toLowerCase();
        let letterIndex = name.charCodeAt(0) - 65;

        let letterListItemElement = orderListLettersElements[letterIndex];
        let allNames = letterListItemElement.textContent;

        if (allNames) {
            allNames += ', ' + name;
        } else {
            allNames = name;
        }

        letterListItemElement.textContent = allNames;
        document.querySelector('input').value = '';
    });
}