function renderTemplate(appContainer, templateId, templateData) {
    const template = Handlebars.compile(document.getElementById(templateId).innerHTML);
    appContainer.innerHTML = template(templateData);
}

const navigate = path => {
    history.pushState({}, '', path);
    router(path);
}

const routesHandler = {
    '/': homeTemplateHandler,
    '/login': loginTemplateHandler,
    '/register': registerTemplateHnalder,
    '/logout': logoutTemplateHandler,
    '/add-movie': (appContainerElement) => renderTemplate(appContainerElement, 'add-movie-form-template', authService.getData()),
    '/details': async (appContainerElement, id) => {
        const authData = authService.getData();
        const movie = await movieService.getById(id);
        renderTemplate(appContainerElement, 'movie-description-template', Object.assign({}, authData, movie))
    }
}

const router = async (fullPath) => {
    const appContainer = document.querySelector('#app');
    const pathPattern = /\/[^\s/]*/g;
    const [path, pathVariable] = fullPath.matchAll(pathPattern);

    routesHandler[path](appContainer, pathVariable);
}