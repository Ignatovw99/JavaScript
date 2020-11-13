const htmlSelectors = {
    townInput: () => document.querySelector('#towns'),
    button: () => document.querySelector('#btnLoadTowns'),
    root: () => document.querySelector('#root')
};

htmlSelectors.button()
    .addEventListener('click', getInputDetails);

function getInputDetails(e) {
    e.preventDefault();

    const { value } = htmlSelectors.townInput();
    const towns = value.split(/[, ]+/g).map(x => ({ name: x })); 
    renderTowns(towns);
}

function renderTowns(towns) {
    getTemplate()
        .then(templateSource => {
            const template = Handlebars.compile(templateSource);
            const htmlResult = template({ towns });
            htmlSelectors.root().innerHTML = htmlResult;
        })
        .catch((e) => console.error(e));
}

function getTemplate() {
    return fetch('./template.hbs')
        .then(res => res.text());
}