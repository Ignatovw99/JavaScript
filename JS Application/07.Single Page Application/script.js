
Handlebars.registerPartial('navigation-partial', document.querySelector('#navigation-template').innerHTML);
Handlebars.registerPartial('movie-partial', document.querySelector('#movie-partial').innerHTML);
Handlebars.registerPartial('movies-partial', document.querySelector('#movies-template').innerHTML);
Handlebars.registerPartial('footer-partial', document.querySelector('#footer-template').innerHTML);

navigate(location.pathname);

const messageSelectors = {
    errorSectionTemplate: () => document.querySelector('#error-section-template').innerHTML,
}

function navigateHandler(e) {
    e.preventDefault();

    let anchorElement;
    if (e.target.tagName === 'A') {
        anchorElement = e.target;
    } else {
        let candidate = e.target.closest('a');
        if (!candidate) {
            return;
        }
        anchorElement = candidate;
    }
    
    const url =  new URL(anchorElement.href);
    navigate(url.pathname);
}

function onLoginSubmit(e) {
    e.preventDefault();
    e.stopPropagation();

    const formData = new FormData(document.forms['login-form']);
    const email = formData.get('email');
    const password = formData.get('password');

    authService.login(email, password)
        .then(() => navigate('/'));
}

function onRegisterSubmit(e) {
    e.preventDefault();
    e.stopPropagation();

    const formData = new FormData(document.forms['register-form']);
    const email = formData.get('email');
    const password = formData.get('password');
    const repeatPassword = formData.get('repeatPassword');

    if (email === '' || password.length < 6 || password !== repeatPassword) {
        const errorSectionElement = htmlDomElementHelper.getDomFromTextTemplate('error-section-template', {message: 'Invalid data. Please try again!'});
        document.getElementById('register-form').prepend(errorSectionElement)
        setTimeout(() => errorSectionElement.remove(), 5000);
    }

    authService.register(email, password)
        .then(() => {

            navigate('/');
            const successfulSectionElement = htmlDomElementHelper.getDomFromTextTemplate('successful-section-template', {message: 'Successful registration!'});
            document.getElementsByTagName('nav')[0].append(successfulSectionElement)
            setTimeout(() => successfulSectionElement.remove(), 5000);
        });
}

function onAddMovieSubmit(e) {
    e.preventDefault();

    const formData = new FormData(document.forms['add-movie-form']);

    const title = formData.get('title');
    const description = formData.get('description');
    const imageUrl = formData.get('imageUrl');

    movieService.add({ 
        title,
        description,
        imageUrl,
        creator: '',
        likedBy: []
    })
        .then(() => navigate('/'));
}