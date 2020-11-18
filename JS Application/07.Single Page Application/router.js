function routeObject(templateId, templateData, navigationPath, routeHandler) {
    if (templateData === undefined) {
        templateData = Object.create({});
    }
    if (templateData.isAuthenticated === undefined) {
        Object.assign(templateData, authService.getData());
    }
    return {
        templateId, templateData, navigationPath, routeHandler
    };
}

const routes = {
    '/': async () => {
        const templateData = authService.getData();
        if (templateData.isAuthenticated) {
            const moviesResponse = await movieService.getAll();
            let movies;
            if (moviesResponse) {
                movies = Object.entries(moviesResponse).map(([id, movie]) => ({ id, ...movie }));
            } else {
                movies = [];
            }
            Object.assign(templateData, { movies });
        }
        return routeObject('home-template', templateData );
    },
    '/login': () => {
        const authData = authService.getData();
        let templateId;
        if (authData.isAuthenticated) {
            templateId = 'home-template';
        } else {
            templateId = 'login-form-template';
        }
        return routeObject(templateId);
    },
    '/register': () => routeObject('register-form-template'),
    '/logout': () => routeObject(undefined, undefined, '/', () => authService.logout()),
    '/add-movie': () => routeObject('add-movie-form-template'),
    '/details': async (id) => {
        const movie = await movieService.getById(id);
        return routeObject('movie-description-template', movie);
    }
}

const router = async (fullPath) => {
    const appContainer = document.querySelector('#app');
    const pathPattern = /\/[^\s/]*/g;

    const [path, pathVariable] = fullPath.matchAll(pathPattern);

    const templateObj = await routes[path](pathVariable);

    if (templateObj.routeHandler !== undefined) {
        templateObj.routeHandler();
    }
    
    if (templateObj.templateId !== undefined) {
        const template = Handlebars.compile(document.getElementById(templateObj.templateId).innerHTML);
        appContainer.innerHTML = template(templateObj.templateData);
    } else if (templateObj.navigationPath !== undefined) {
        navigate(templateObj.navigationPath);
    }
}

const navigate = path => {
    history.pushState({}, '', path);
    router(path);
}