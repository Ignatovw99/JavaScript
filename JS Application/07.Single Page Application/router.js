function renderTemplate(appContainer, templateId, templateData, templateEventHandlers = {}) {
    appContainer.innerHTML = '';
    const templateHTML = htmlDomElementHelper.createHtmlTemplate(templateId, templateData);
    const domElement = htmlDomElementHelper.createDomElementFromHtmlText(templateHTML);
    eventListenerHelper.attachEventHanlderObjectTo(domElement, templateEventHandlers);
    appContainer.addEventListener('click', navigateHandler, false);
    appContainer.appendChild(domElement);
}

const navigate = path => {
    history.pushState({}, '', path);
    let event = new CustomEvent('popstate', {
        state: {},
        title: '',
        path
    }); 

    window.dispatchEvent(event);
}

window.addEventListener('popstate', e => {
    router(location.pathname)
});

const routesHandler = {
    '/': homeTemplateHandler,
    '/login': loginTemplateHandler,
    '/register': registerTemplateHnalder,
    '/logout': logoutTemplateHandler,
    '/add-movie': (appContainerElement) => renderTemplate(appContainerElement, 'add-movie-form-template', authService.getData()),
    '/details': movieDetailsTemplateHandler
}

const router = async (fullPath) => {
    const appContainer = document.querySelector('#app');
    const [path, pathVariable] = fullPath.split('/').filter(x => x.trim() !== '');
    const route = '/' + (path || '');
    routesHandler[route](appContainer, pathVariable);
}