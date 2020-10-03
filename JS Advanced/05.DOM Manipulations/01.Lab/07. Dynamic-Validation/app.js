function validate() {

    let emailRegexPattern = /[a-z]+\@[a-z]+\.[a-z]+/;
    let errorClass = 'error';

    let emailInputElement = document.getElementById('email');

    emailInputElement.addEventListener('change', (e) => {
        let email = e.target.value;
        let isValid = emailRegexPattern.test(email);

        if (!isValid) {
            emailInputElement.classList.add(errorClass);
        } else {
            emailInputElement.classList.remove(errorClass);
        }
    })
}
