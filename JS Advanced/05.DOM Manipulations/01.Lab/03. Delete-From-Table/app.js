function deleteByEmail() {
    
    let inputElement = document.querySelector('input[name="email"]');
    let tableRowsElement = document.querySelectorAll('table > tbody > tr');
    let resultDivElement = document.getElementById('result');

    let emailToBeDelete = inputElement.value;

    Array.from(tableRowsElement)
        .forEach(emailRow => {
            let currentEmail = emailRow.querySelector(':nth-child(2)').textContent;
            if (currentEmail === emailToBeDelete) {
                emailRow.remove();
                resultDivElement.textContent = 'Deleted';
            } else {
                resultDivElement.textContent = 'Not found.';
            }
        });
}