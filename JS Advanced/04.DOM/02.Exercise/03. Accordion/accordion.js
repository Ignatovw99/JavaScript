function toggle() {

    let buttonElement = document.getElementsByClassName('button')[0];

    let divExtraElement = document.getElementById('extra');
    let displayValue = divExtraElement.style.display;

    displayValue = displayValue === 'none' ? 'block' : 'none';
    divExtraElement.style.display = displayValue;

    buttonElement.textContent = displayValue === 'none' ? 'More' : 'Less';
}