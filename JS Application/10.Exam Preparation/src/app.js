import { homeHanlder } from './controllers/home.js';
import { registerGetHandler, registerPostHandler, loginGetHandler, loginPostHandler, logoutHanlder } from './controllers/user.js';
import { createGetHandler, createPostHandler, editGetHandler, editPostHandler, detailsHandler, deleteHandler } from './controllers/article.js';
import * as api from './data.js';
import * as util from './util.js';
import { init } from './config.js';

window.api = api;
window.util = util;

init();


const app = Sammy('#root', function() {

    this.use('Handlebars', 'hbs');

    this.get('/', homeHanlder);
    this.get('/home', homeHanlder);

    this.get('/register', registerGetHandler);
    this.get('/login', loginGetHandler);

    this.post('/register', (context) => { registerPostHandler(context); });
    this.post('/login', (context) => { loginPostHandler(context); });

    this.get('/logout', logoutHanlder);

    this.get('/create', createGetHandler);
    this.post('/create', (context) => { createPostHandler(context) });
    this.get('/edit/:id', editGetHandler);
    this.post('/edit/:id', (context) => { editPostHandler(context) });

    this.get('/details/:id', detailsHandler);
    this.get('/delete/:id', deleteHandler);

});

app.run();