import { loadPartials, errorHandler } from '/src/util.js';
import { authService } from '/src/service.js';

export function registerGetHandler(context) {
    loadPartials(context)
        .then(() => context.partial('/templates/register.hbs'))
        .catch(errorHandler);
}

export function registerPostHandler(context) {
    const { email, password, rePassword } = context.params;

    if (email === '' || password.length < 6 || password !== rePassword) {
        return;
    }

    authService.register(email, password)
        .then(() => this.redirect('/home'))
        .catch(errorHandler);
}

export function loginGetHandler(context) {
    loadPartials(context)
        .then(() => context.partial('/templates/login.hbs'));
}

export function loginPostHandler(context) {
    const { email, password } = context.params;

    authService.login(email, password)
        .then(() => this.redirect('/home'))
        .catch(errorHandler);

}

export function logoutHandler(context) {
    authService.logout()
        .then(() => this.redirect('/login'));
}