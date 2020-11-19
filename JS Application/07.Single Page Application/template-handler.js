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

    renderTemplate(appContainerElement, templateId, authData);
};

const registerTemplateHnalder = (appContainerElement) => renderTemplate(appContainerElement, 'register-form-template');

const logoutTemplateHandler = () => {
    authService.logout();
    navigate('/');
};