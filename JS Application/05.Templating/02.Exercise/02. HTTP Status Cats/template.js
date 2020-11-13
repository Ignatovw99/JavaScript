(() => {

    const htmlSelectors = {
        allCats: () => document.querySelector('#allCats')
    };

     renderCatTemplate();

     function renderCatTemplate() {
         Promise.all([ 
            getTemplate('./cats-template.hbs'),
            getTemplate('./cat-partial.hbs'),
         ])
            .then(([templateSource, partialSource]) => {
                Handlebars.registerPartial('cat', partialSource);
                const template = Handlebars.compile(templateSource);
                const catsHTML = template({ cats });
                htmlSelectors.allCats().innerHTML = catsHTML;
                attachEventListener();
            })
            .catch(console.error);
     }

     async function getTemplate(templateLocation) {
         return fetch(templateLocation)
            .then(res => res.text());
    }

    function attachEventListener() {
        htmlSelectors.allCats().addEventListener('click', function(e) {
            const { target } = e;
            if (target.nodeName === 'BUTTON' && target.className === 'showBtn') {
                const divStatus = target.parentNode.querySelector('div.status');
                if (divStatus.style.display === 'none') {
                    divStatus.style.display = 'block';
                    target.textContent = 'Hide status code';
                } else {
                    divStatus.style.display = 'none';
                    target.textContent = 'Show status code';
                }
            }
        });
    }
})();
