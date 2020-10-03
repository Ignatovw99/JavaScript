function addItem() {

    let listItemElements = document.getElementById('items');
    let inputElement = document.getElementById('newItemText');
    let listItemElement = document.createElement('li');

    listItemElement.textContent = inputElement.value;
    listItemElements.appendChild(listItemElement);

    inputElement.value = '';
}

function onInputMouseOver() {
    console.log('On mouse over event');
}