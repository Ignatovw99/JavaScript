const htmlSelectors = {
    registerBtn: () => document.querySelector('#register-btn'),
    registerEmailInput: () => document.querySelector('#register-form input[type="email"]'),
    registerPasswordInput: () => document.querySelector('#register-form input[type="password"]'),
    loginBtn: () => document.querySelector('#login-btn'),
    loginEmailInput: () => document.querySelector('#login-form input[type="email"]'),
    loginPasswordInput: () => document.querySelector('#login-form input[type="password"]'),
    logoutBtn: () => document.querySelector('#logout-btn'),
};

function registerUser(e) {
    e.preventDefault();

    const emailInput = htmlSelectors.registerEmailInput();
    const passwordInput = htmlSelectors.registerPasswordInput();

    const email = emailInput.value;
    const password = passwordInput.value;

    if (email !== '' && password.length >= 6) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(res => console.log(res))
            .catch(console.log);
    }
}

function loginUser(e) {
    e.preventDefault();

    const emailInput = htmlSelectors.loginEmailInput();
    const passwordInput = htmlSelectors.loginPasswordInput();

    firebase.auth().signInWithEmailAndPassword(emailInput.value, passwordInput.value)
        .then(console.log)
        .catch(console.error);
}

function logout() {
    firebase.auth().signOut()
        .then(console.log)
        .catch(console.error);
}

htmlSelectors.registerBtn()
    .addEventListener('click', registerUser);

htmlSelectors.loginBtn()
    .addEventListener('click', loginUser);

htmlSelectors.logoutBtn()
    .addEventListener('click', logout);
