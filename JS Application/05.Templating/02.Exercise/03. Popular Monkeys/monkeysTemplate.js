// import monkeys from './monkeys.js';

const htmlSelectors = {
    allMonkeys: () => document.querySelector('.monkeys'),
};

fetch('./monkeys.hbs')
    .then(res => res.text())
    .then(renderMonkeys)
    .catch(console.error);

function renderMonkeys(monkeyView) {
    const monkeysTemplate = Handlebars.compile(monkeyView);
    const monkeysResultHTML = monkeysTemplate({ monkeys });
    htmlSelectors.allMonkeys().innerHTML = monkeysResultHTML;
    attachEventListener();
}

function attachEventListener() {
    htmlSelectors.allMonkeys().addEventListener('click', e => {
        const { target } = e;

        if (target.nodeName !== 'BUTTON' || target.textContent !== 'Info') {
            return;
        }

        const infoParagraph = target.parentNode.querySelector('p');

        if (infoParagraph.style.display === 'none') {
            infoParagraph.style.display = 'block';
        } else {
            infoParagraph.style.display = 'none';
        }
    });
}
