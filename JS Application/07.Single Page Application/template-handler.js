const homeTemplateHandler = async (appContainerElement) => {
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

    renderTemplate(appContainerElement, 'home-template', templateData);
};

const loginTemplateHandler = (appContainerElement) => {
    const authData = authService.getData();
    const templateId = authData.isAuthenticated ? 'home-template' : 'login-form-template';

    const templateEventHandlers = {
        '#login-form button': eventListenerHelper.createEventListenerEntry(onLoginSubmit)
    };
    renderTemplate(appContainerElement, templateId, authData, templateEventHandlers);
};

const registerTemplateHnalder = (appContainerElement) => { 
    const templateEventHandlers = {
        '#register-form button':  eventListenerHelper.createEventListenerEntry(onRegisterSubmit)
    };

    renderTemplate(appContainerElement, 'register-form-template', authService.getData(), templateEventHandlers);
};

const logoutTemplateHandler = () => {
    authService.logout();
    navigate('/');
};

const movieDetailsTemplateHandler = async (appContainerElement, id) => {
    const authData = authService.getData();
    const movie = await movieService.getById(id);
    const templateData = Object.assign(authData, ({ id, ...movie }));

    renderTemplate(appContainerElement, 'movie-description-template', templateData)
};