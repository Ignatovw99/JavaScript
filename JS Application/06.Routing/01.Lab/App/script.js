const routes = {
    '/create': () => document.getElementById('create-section'),
    '/home': () => document.getElementById('home-section'),
    '/details': () => document.getElementById('details-section'),
    '/profile': () => document.getElementById('profile-section'),
}

const router = (path) => {
    if (!routes
        [location.pathname]) {
        return;
    }

    //Hide all sections
    Object.values(routes
        ).forEach(section => section().style.display = 'none');
    routes
    [location.pathname]().style.display = 'block';

    switch (path) {
        case '/home':
            renderHomePage();
            break;
    }
};

function renderHomePage() {
    const furnituresList = document.querySelector('#furniture-list');

    fetch('https://books-aa485.firebaseio.com/furnitures.json')
        .then(res => res.json())
        .then(furnituresObj => {
            let html = Object.keys(furnituresObj).map(id => furnitureItemTemplate(furnituresObj[id])).join('');
            furnituresList.innerHTML = html;
        });
}

function onRouteChange(e) {
    if (e.target.tagName !== 'A') {
        return;
    }
    
    e.preventDefault();

    history.pushState({}, '', e.target.href);
    router(location.pathname);
}

document.querySelector('nav').addEventListener('click', onRouteChange);
window.onload = router;

function onCreateFurnitureSubmit(e) {
    e.preventDefault();
    
    const make = createFormElement.querySelector('#new-make').value;
    const price = createFormElement.querySelector('#new-price').value;
    const model = createFormElement.querySelector('#new-model').value;
    const image = createFormElement.querySelector('#new-image').value;
    const year = createFormElement.querySelector('#new-year').value;
    const material = createFormElement.querySelector('#new-material').value;
    const description = createFormElement.querySelector('#new-description').value;

    const newFurniture = {
        make, price, model, image, year, material, description
    };

    fetch('https://books-aa485.firebaseio.com/furnitures.json', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newFurniture)
    })
        .then(res => res.json())
        .then(x => console.log(x));
}

const createFormElement = document.querySelector('#create-form');
createFormElement.addEventListener('submit', onCreateFurnitureSubmit);
