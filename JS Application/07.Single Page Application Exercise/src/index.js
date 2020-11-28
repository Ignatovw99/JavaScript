import { homeHandler } from '/src/controllers/home.js';
import { registerGetHandler, loginGetHandler, loginPostHandler, logoutHandler, registerPostHandler } from '/src/controllers/user.js';
import { init } from '/src/config.js';

const app = Sammy('#root', function() {

    this.use('Handlebars', 'hbs');

    //Home routes
    this.get('/home', homeHandler);

    this.get('/login', loginGetHandler);

    this.post('/login', loginPostHandler);

    this.get('/register', registerGetHandler);

    this.post('/register', registerPostHandler);

    this.get('/logout', logoutHandler);


    //Offer routes
    this.get('/offer-create', );
    
    this.post('/offer-create', );

    this.get('/offer-edit/:id', );
    
    this.get('/details/:id', );
});

(() => {
    init();
    app.run('/home');
})();
