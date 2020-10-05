function solve() {

    let furnitureTableBodyElement = document.querySelector('tbody');

    let inputFurnitureTextareaElement = document.getElementsByTagName('textarea')[0];
    let outputBoughtFurnitureTextareaElement = document.getElementsByTagName('textarea')[1];

    let generateButton = document.getElementsByTagName('button')[0];
    let buyButton = document.getElementsByTagName('button')[1];

    generateButton.addEventListener('click', generateFurnitureTableRows);

    buyButton.addEventListener('click', buyFurnitures);

    function generateFurnitureTableRows() {
        let furnitureJson = inputFurnitureTextareaElement.value;
        inputFurnitureTextareaElement.value = '';
        if (furnitureJson === '') {
            return;
        }
        let furnituresObjectArr = JSON.parse(furnitureJson);

        furnituresObjectArr.forEach(furniture => {
            let rowElement = document.createElement('tr');
            let imageCell = document.createElement('td')
            let nameCell = imageCell.cloneNode();
            let priceCell = imageCell.cloneNode();;
            let decorationFactorCell = imageCell.cloneNode();
            let checkboxCell = imageCell.cloneNode();

            let imageElement = document.createElement('img');
            imageElement.setAttribute('src', furniture.img);
            imageCell.appendChild(imageElement);

            let paragraphNameElement = document.createElement('p');
            paragraphNameElement.textContent = furniture.name;
            nameCell.appendChild(paragraphNameElement);

            let paragrapthPriceElement = document.createElement('p');
            paragrapthPriceElement.textContent = furniture.price;
            priceCell.appendChild(paragrapthPriceElement);

            let paragrapthDecorationFactorElement = document.createElement('p');
            paragrapthDecorationFactorElement.textContent = furniture.decFactor;
            decorationFactorCell.appendChild(paragrapthDecorationFactorElement);

            let checkboxElement = document.createElement('input');
            checkboxElement.setAttribute('type', 'checkbox');
            checkboxCell.appendChild(checkboxElement);

            rowElement.appendChild(imageCell);
            rowElement.appendChild(nameCell);
            rowElement.appendChild(priceCell);
            rowElement.appendChild(decorationFactorCell);
            rowElement.appendChild(checkboxCell);
            furnitureTableBodyElement.appendChild(rowElement);
        });
    }

    function buyFurnitures() {
        let resultObject = Array.from(furnitureTableBodyElement.querySelectorAll('tr'))
            .filter(row => row.querySelector('input:checked'))
            .reduce((boughtFurnituresObject, currentRow) => {	
                let name = currentRow.querySelector('td:nth-child(2)').textContent;	
                let price = Number(currentRow.querySelector('td:nth-child(3)').textContent);	
                let decorationFactor = Number(currentRow.querySelector('td:nth-child(4)').textContent);

                boughtFurnituresObject.furnitures.push(name);
                boughtFurnituresObject.totalPrice += price;
                boughtFurnituresObject.totalDecorationFactor += decorationFactor;

                return boughtFurnituresObject;
            }, {furnitures: [], totalPrice: 0.0, totalDecorationFactor: 0.0});

        if (!resultObject.furnitures.length) {
            return;
        }

        let resultMessage = `Bought furniture: ${resultObject.furnitures.join(', ')}\n`;
        resultMessage += `Total price: ${resultObject.totalPrice.toFixed(2)}\n`;
        resultMessage += `Average decoration factor: ${(resultObject.totalDecorationFactor / resultObject.furnitures.length)}`;
        
        outputBoughtFurnitureTextareaElement.value += resultMessage;
    }

}