
Handlebars.registerPartial('navigation-partial', document.querySelector('#navigation-template').innerHTML);
Handlebars.registerPartial('movie-partial', document.querySelector('#movie-partial').innerHTML);
Handlebars.registerPartial('movies-partial', document.querySelector('#movies-template').innerHTML);
navigate(location.pathname);

function navigateHandler(e) {
    e.preventDefault();

    let anchorElement;
    if (e.target.tagName === 'A') {
        anchorElement = e.target;
    } else if (e.target.parentNode.tagName === 'A') {
        anchorElement = e.target.parentNode;
    } else {
        return;
    }

    const url =  new URL(anchorElement.href);
    navigate(url.pathname);
}


function onLoginSubmit(e) {
    e.preventDefault();

    const formData = new FormData(document.forms['login-form']);
    const email = formData.get('email');
    const password = formData.get('password');

    authService.login(email, password)
        .then(() => navigate('/'));
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
        imageUrl
    })
        .then(() => navigate('/'));
}