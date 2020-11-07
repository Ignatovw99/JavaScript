function attachEvents() {

    const getAndPostUrl = 'https://phonebook-nakov.firebaseio.com/phonebook.json';

    const phonebookListElement = document.querySelector('#phonebook');
    const personInputElement = document.querySelector('#person');
    const phoneInputElement = document.querySelector('#phone');

    const createButton = document.querySelector('#btnCreate');
    const loadButton = document.querySelector('#btnLoad');

    loadButton.addEventListener('click', loadPhonebooks);
    createButton.addEventListener('click', createPhonebook);

    function loadPhonebooks() {
        phonebookListElement.innerHTML = '';
        fetch(getAndPostUrl)
            .then(response => response.json())
            .then(phonebooks => {
                if (phonebooks === null) {
                    return;
                }

                Object.keys(phonebooks).forEach(key => {
                    createListItemElement(phonebooks, key);
                })
            });
    }

    function deletePhonebook(key) {
        const deleteUrl = `https://phonebook-nakov.firebaseio.com/phonebook/${key}.json`;
        fetch(deleteUrl, { method: 'DELETE' })
            .then(() => loadPhonebooks());
    }

    function createListItemElement(phonebooks, key) {
        const currentPhonebook = phonebooks[key];
        const itemElement = document.createElement('li');
                    
        const deleteButtonElement = document.createElement('button');
        deleteButtonElement.textContent = 'Delete';
        deleteButtonElement.addEventListener('click', function() { // this function declaration is a callback listener!!!
            deletePhonebook(key);
        });

        // deleteButtonElement.addEventListener('click', () => deletePhonebook(key)); //Another way
        itemElement.textContent = `${currentPhonebook.person}: ${currentPhonebook.phone}`;
        itemElement.appendChild(deleteButtonElement);
    
        phonebookListElement.appendChild(itemElement);
    }

    function createPhonebook() {
        let person = personInputElement.value;
        let phone = phoneInputElement.value;

        fetch(getAndPostUrl, { 
            'method': 'POST',
            'body': JSON.stringify({ person, phone })
        })
        .then(() => {
            personInputElement.value = '';
            phoneInputElement.value = '';
            loadPhonebooks();
        });
    }
}

attachEvents();