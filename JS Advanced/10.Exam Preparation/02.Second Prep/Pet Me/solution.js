function solve() {

    const inputDivContainerElement = document.querySelector('#container');
    const selectionElement = document.querySelector('#adoption');
    const [inputNameElement, inputAgeElement, inputKindElement, inputCurrentOwnerElement, addPetButtonElement] = Array.from(inputDivContainerElement.children);
    const petsListElement = selectionElement.querySelector('ul');
    const adoptedPetsElement = document.querySelector('#adopted ul');

    addPetButtonElement.addEventListener('click', addPet);

    function addPet(e) {
        e.preventDefault();

        const name = inputNameElement.value;
        const age = inputAgeElement.value;
        const kind = inputKindElement.value;
        const currentOwner = inputCurrentOwnerElement.value;

        if (isEmpty(name) || isEmpty(age) || isEmpty(kind) || isEmpty(currentOwner)) {
            return;
        }

        const ageNumber = Number(age);
        if (!ageNumber) {
            return;
        }

        let paragraphElement = document.createElement('p');
        paragraphElement.innerHTML = `<strong>${name}</strong> is a <strong>${ageNumber}</strong> year old <strong>${kind}</strong`;
        let spanElement = createElement('span', `Owner: ${currentOwner}`);
        let contactOwnerBtn = createElement('button', 'Contact with owner');

        let petItemElement = createElement('li', [
            paragraphElement,
            spanElement,
            contactOwnerBtn
        ]);

        let takeItBtn = document.createElement('button');
        takeItBtn.textContent = 'Yes! I take it!';
        let inputNewOwnerElement = document.createElement('input');
        inputNewOwnerElement.setAttribute('placeholder', 'Enter your names');
        let divElement = createElement('div', [
            inputNewOwnerElement, takeItBtn
        ]);

        petsListElement.appendChild(petItemElement);

        inputNameElement.value = '';
        inputAgeElement.value = '';
        inputKindElement.value = '';
        inputCurrentOwnerElement.value = '';

        let checkedBtn = createElement('button', 'Checked');
        
        contactOwnerBtn.addEventListener('click', (e) => {
            contactOwnerBtn.remove();
            petItemElement.appendChild(divElement);
        });

        takeItBtn.addEventListener('click', (e) => {
            let newOwner = inputNewOwnerElement.value;
            if (isEmpty(newOwner)) {
                return;
            }
            divElement.remove();
            spanElement.textContent = `New Owner: ${newOwner}`;
            petItemElement.appendChild(checkedBtn);
            adoptedPetsElement.appendChild(petItemElement);
        });

        checkedBtn.addEventListener('click', (e) => {
            petItemElement.remove();
        });
    }

    function isEmpty(value) {
        return value.length == 0;
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

