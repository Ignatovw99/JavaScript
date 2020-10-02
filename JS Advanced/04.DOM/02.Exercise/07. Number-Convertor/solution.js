function solve() {

    let selectMenuToElement = document.getElementById('selectMenuTo');
    selectMenuToElement.removeChild(document.querySelector('#selectMenuTo > option'));
    
    let binaryOptionElement = document.createElement('option');
    binaryOptionElement.value = 'binary';
    binaryOptionElement.textContent = 'Binary';
    selectMenuToElement.appendChild(binaryOptionElement);

    let hexadecimalOptionElement = document.createElement('option');
    hexadecimalOptionElement.value = 'hexadecimal';
    hexadecimalOptionElement.textContent = 'Hexadecimal';
    selectMenuToElement.appendChild(hexadecimalOptionElement);

    document.getElementsByTagName('button')[0].addEventListener('click', convertDecimalIntoAnotherSystem);

    function convertDecimalIntoAnotherSystem() {
        let inputElement = document.getElementById('input');
        let number = Number(inputElement.value);
        let choosenNumberSystem = document.querySelector('#selectMenuTo > option:checked').value;
        let convertedResult = convertNumber(number, choosenNumberSystem);
        if (convertedResult) {
            document.getElementById('result').value = convertedResult;
        }
        inputElement.value = '';
    }

    function convertNumber(number, choosenNumberSystem) {
        switch (choosenNumberSystem) {
            case 'binary':
                return number.toString(2);
            case 'hexadecimal':
                return number.toString(16).toUpperCase();
        }
    }
}