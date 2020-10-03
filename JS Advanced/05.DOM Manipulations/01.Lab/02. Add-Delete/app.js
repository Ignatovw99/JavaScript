function solve() {

    let unorderedListElement = document.getElementById('items');
    let textInputElement = document.getElementById('newText');

    let deleteLinkElement = document.createElement('a');
    deleteLinkElement.innerHTML = '[Delete]';
    deleteLinkElement.setAttribute('href', '#');
    deleteLinkElement.addEventListener('click', deleteItem)

    let newTextItem = document.createElement('li');
    newTextItem.innerHTML = textInputElement.value;
    newTextItem.appendChild(deleteLinkElement);

    unorderedListElement.appendChild(newTextItem);
    textInputElement.value = '';

    function deleteItem(e) {
        let listItemToRemoveElement = e.target.parentElement;
        listItemToRemoveElement.remove();
    }
}
