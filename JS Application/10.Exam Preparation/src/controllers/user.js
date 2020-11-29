import { login, register, logout } from "../data.js";
import { loadPartials, isEmpty } from "../util.js";

export async function registerGetHandler() {

    loadPartials(this);
    this.partial('/templates/user/register.hbs');
}

export async function registerPostHandler(context) {

    const { email, password, rePass } = context.params;

    try {
        if (isEmpty(email) || isEmpty(password)) {
            throw new Error('All fields are required!');
        } else if (password !== rePass) {
            throw new Error('Passwords does not match');
        } else {
            await register(email, password);
            context.redirect('/home');
        }
    } catch (error) {
        alert(error.message);
    }
}

export async function loginGetHandler() {

    loadPartials(this);
    this.partial('/templates/user/login.hbs');
}

export async function loginPostHandler(context) {

    const { email, password } = context.params;

    try {
        if (isEmpty(email) || isEmpty(password)) {
            throw new Error('All fields are required!');
        } else {
            await login(email, password);
            context.redirect('/home');
        }
    } catch (error) {
        alert(error.message);
    }
}

export async function logoutHanlder() {

    await logout();
    this.redirect('/home');
    
}