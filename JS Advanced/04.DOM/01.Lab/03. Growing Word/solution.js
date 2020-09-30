function growingWord() {

    const colorDivAttributeName = 'data-current-color-div-index';
    let headingElement = document.querySelector('#exercise > p');

    let currentColorDivIndex = headingElement.getAttribute(colorDivAttributeName);
    if (!currentColorDivIndex) {
        currentColorDivIndex = 0;
        headingElement.setAttribute(colorDivAttributeName, currentColorDivIndex);
        headingElement.style.fontSize = '1px';
    }

    let colorDivElements = document.querySelectorAll('#colors > div');
    headingElement.style.color = colorDivElements[currentColorDivIndex].outerText;
    headingElement.style.fontSize = `${(parseInt(headingElement.style.fontSize) * 2)}px`;

    currentColorDivIndex = (currentColorDivIndex + 1) % colorDivElements.length;
    headingElement.setAttribute(colorDivAttributeName, currentColorDivIndex);
}