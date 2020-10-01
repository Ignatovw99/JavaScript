function addItem() {

    let newItemTextElement = document.getElementById('newItemText');
    let newItemValueElement = document.getElementById('newItemValue');

    let newItemText = newItemTextElement.value;
    let newItemValue = newItemValueElement.value;

    if (newItemText === '' || newItemValue === '') {
        return;
    }

    let optionElement = document.createElement('option');
    optionElement.textContent = newItemText;
    optionElement.value = newItemValue;

    newItemTextElement.value = '';
    newItemValueElement.value = '';

    document.getElementById('menu')
        .appendChild(optionElement);
}