function attachEvents() {

    const [ 
        addAnglerInputElement,
        addWeightInputElement,
        addSpeciesInputElement,
        addLocationInputElement,
        addBaitInputElement,
        addCaptureTimeInputElement 
    ] = Array.from(document.querySelector('#addForm').children)
                .filter(element => element.tagName === 'INPUT');
    
    const catchesElement = document.querySelector('#catches');

    const addCatchButton = document.querySelector('.add');
    const loadCatchesButton = document.querySelector('.load');
    
    addCatchButton.addEventListener('click', addCatch);
    loadCatchesButton.addEventListener('click', loadAllCatches);

    function loadAllCatches() {
        catchesElement.innerHTML = '';
        
        const catchesUrl = 'https://fisher-game.firebaseio.com/catches.json';

        fetch(catchesUrl)
            .then(res => res.json())
            .then(catches => {
                console.log(catches);
                Object.keys(catches)
                    .forEach(x => createCatchElement(x, catches[x]));
            });
    }

    function createCatchElement(id, catchObj) {
        
        const anglerInput = createElement('input', null, { type: 'text', class: 'angler', value: catchObj.angler });
        const weightInput = createElement('input', null, { type: 'text', class: 'angler', value: catchObj.angler });
        const speciesInput = createElement('input', null, { type: 'text', class: 'species', value: catchObj.species });
        const locationInput = createElement('input', null, { type: 'text', class: 'location', value: catchObj.location });
        const baitInput = createElement('input', null, { type: 'text', class: 'bait', value: catchObj.bait });
        const captureTimeInput = createElement('input', null, { type: 'number', class: 'captureTime', value: catchObj.captureTime });

        const deleteButton = createElement('button', 'Delete', { class: 'delete' });
        const updateButton = createElement('button', 'Update', { class: 'update' });
        const catchElement = createElement('div', [
            createElement('label', 'Angler'),
            anglerInput,
            createElement('hr', null),
            createElement('label', 'Weight'),
            weightInput,
            createElement('hr', null),
            createElement('label', 'Species'),
            speciesInput,
            createElement('hr', null),
            createElement('label', 'Location'),
            locationInput,
            createElement('hr', null),
            createElement('label', 'Bait'),
            baitInput,
            createElement('hr', null),
            createElement('label', 'Capture Time'),
            captureTimeInput,
            createElement('hr', null),
            updateButton,
            deleteButton
        ], { class: 'catch', 'data-id': id });

        deleteButton.addEventListener('click', function() {
            fetch(`https://fisher-game.firebaseio.com/catches/${id}.json`, { method: 'DELETE' })
                .then(res => {
                    catchElement.remove();
                });
        });

        updateButton.addEventListener('click', function() {
            let updatedCatch = {
                angler: anglerInput.value,
                weight: weightInput.value,
                species: speciesInput.value,
                location: locationInput.value,
                bait: baitInput.value,
                captureTime: captureTimeInput.value
            };
            
            fetch(`https://fisher-game.firebaseio.com/catches/${id}.json`, { 
                method: 'PUT',
                body: JSON.stringify(updatedCatch)
            });
        });

        catchesElement.appendChild(catchElement);
    }

    function addCatch() {
        const createNewCatchUrl = 'https://fisher-game.firebaseio.com/catches.json';

        let newCatch = {
            angler: addAnglerInputElement.value,
            weight: addWeightInputElement.value,
            species: addSpeciesInputElement.value,
            location: addLocationInputElement.value,
            bait: addBaitInputElement.value,
            captureTime: addCaptureTimeInputElement.value
        };

        fetch(createNewCatchUrl, {
            method: 'POST',
            body: JSON.stringify(newCatch)
        })
            .then(res => res.json())
            .then(catchResponse => createCatchElement(catchResponse.name, newCatch));
    }
}

function createElement(type, content, attributes) {
    const result = document.createElement(type);

    if (attributes !== undefined) {
        Object.keys(attributes)
                .forEach(att => result.setAttribute(att, attributes[att]));
    }

    if (Array.isArray(content)) {
        content.forEach(appendChildNode);
    } else {
        result.innerHTML = content;
    }

    function appendChildNode(node) {
        if (typeof node === 'string') {
            node = document.createTextNode(node);
        }
        result.appendChild(node);
    }

    return result;
}

attachEvents();
