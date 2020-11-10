const htmlSelectors = {
    'loadBooks': () => document.querySelector('#loadBooks'),    //The arrow function is used becasue the value reference can be changed womewhere in the code // The arrow will always return the same refernece
    'createButton': () => document.querySelector('#create-form > button'),
    'createTitleInput': () => document.querySelector('#create-title'),
    'createAuthorInput': () => document.querySelector('#create-author'),
    'createIsbnInput': () => document.querySelector('#create-isbn'),
    'booksContainer': () => document.querySelector('table > tbody'),
    'errorContainer': () => document.querySelector('#error-notification'),
    'editButton': () => document.querySelector('#edit-form > button'),
    'editForm': () => document.querySelector('#edit-form'),
    'editTitleInput': () => document.querySelector('#edit-title'),
    'editAuthorInput': () => document.querySelector('#edit-author'),
    'editIsbnInput': () => document.querySelector('#edit-isbn'),
    'deleteForm': () => document.querySelector('#delete-form'),
    'deleteTitleInput': () => document.querySelector('#delete-title'),
    'deleteAuthorInput': () => document.querySelector('#delete-author'),
    'deleteIsbnInput': () => document.querySelector('#delete-isbn'),
    'deleteButton': () => document.querySelector('#delete-form > button'),
};

function createDOMElement(type, content, attributes, events, ...children) {

    const domElement = document.createElement(type);
    if (content !== '') {
        domElement.textContent = content;
    }
    Object.entries(attributes) //return array from [key - value] pair
        .forEach(([attributeKey, attributeValue]) => {
            domElement.setAttribute(attributeKey, attributeValue);
        });
    Object.entries(events)
        .forEach(([eventType, eventHandler]) => {
            domElement.addEventListener(eventType, eventHandler);
        });
    // children
        // .forEach(child => domElement.appendChild(child));
    domElement.append(...children);

    return domElement;
}

function handleError(err) {
    const errorContainer = htmlSelectors['errorContainer']();
    errorContainer.textContent = err.message;
    errorContainer.style.display = 'block';
    
    setTimeout(() => {
        errorContainer.style.display = 'none';  
    }, 5000);
}

function editBook(e) {
    e.preventDefault();
    const bookId = this.getAttribute('data-key');
    const titleInput = htmlSelectors['editTitleInput']();
    const authorInput = htmlSelectors['editAuthorInput']();
    const isbnInput = htmlSelectors['editIsbnInput']();

    const requestObj = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title: titleInput.value, author: authorInput.value, isbn: isbnInput.value })
    }

    fetch(`https://books-aa485.firebaseio.com/books/${bookId}.json`, requestObj)
        .then(() => {
            htmlSelectors['editForm']().style.display = 'none';    
            fetchAllBooks();
        })
        .catch(handleError);
}

function deleteBook() {
    const bookId = this.getAttribute('data-key');

    fetch(`https://books-aa485.firebaseio.com/books/${bookId}.json`, { method: 'DELETE' })
        .then(() => {
            htmlSelectors['deleteForm']().style.display = 'none';
            fetchAllBooks();
        })
        .catch(handleError);
}

function confirmitionDeleteBook(e) {
    e.preventDefault();
    deleteBook.call(this);
}

function loadDeleteBookById() {
    const bookId = this.getAttribute('data-key');

    fetch(`https://books-aa485.firebaseio.com/books/${bookId}.json`)
        .then(res => res.json())
        .then(({title, author, isbn}) => {
            htmlSelectors['deleteTitleInput']().value = title;
            htmlSelectors['deleteAuthorInput']().value = author;
            htmlSelectors['deleteIsbnInput']().value = isbn;

            htmlSelectors['deleteForm']().style.display = 'block';
            htmlSelectors['deleteButton']().setAttribute('data-key', bookId);
        })
        .catch(handleError);
}

function loadEditBookById() {
    const bookId = this.getAttribute('data-key');

    fetch(`https://books-aa485.firebaseio.com/books/${bookId}.json`)
        .then(res => res.json())
        .then(({title, author, isbn}) => {
            htmlSelectors['editTitleInput']().value = title;
            htmlSelectors['editAuthorInput']().value = author;
            htmlSelectors['editIsbnInput']().value = isbn;

            htmlSelectors['editForm']().style.display = 'block';
            htmlSelectors['editButton']().setAttribute('data-key', bookId);
        })
        .catch(handleError);
}

function renderBook(id, bookObj, parentElement) {

    const { title, author, isbn } = bookObj;
    const bookTableRow = createDOMElement('tr', '', {}, {},
        createDOMElement('td', title, {}, {}),
        createDOMElement('td', author, {}, {}),
        createDOMElement('td', isbn, {}, {}),
        createDOMElement('td', '', {}, {}, 
            createDOMElement('button', 'Edit', { 'data-key':  id}, { click: loadEditBookById }),
            createDOMElement('button', 'Delete', { 'data-key': id }, { click: loadDeleteBookById })
        )
    );

    parentElement.appendChild(bookTableRow);
}

function fetchAllBooks() {

    fetch('https://books-aa485.firebaseio.com/books.json')
        .then(res => res.json())
        .then(booksData => {
            const booksContainerElement = htmlSelectors['booksContainer']();
            if (!booksData) {
                booksContainerElement.innerHTML = '';
                return Promise.reject({ message: 'No books' });
            }
            if (booksContainerElement.innerHTML !== '') {
                booksContainerElement.innerHTML = '';
            }
            Object.entries(booksData)
                .forEach(([id, book]) => renderBook(id, book, booksContainerElement));
        })
        .catch(handleError);
        
}

function createBook(e) {
    e.preventDefault();
    const titleInput = htmlSelectors['createTitleInput']();
    const authorInput = htmlSelectors['createAuthorInput']();
    const isbnInput = htmlSelectors['createIsbnInput']();

    if (titleInput.value !== '' && authorInput.value !== '' && isbnInput.value !== '') {
        const newBook = {
            title: titleInput.value,
            author: authorInput.value,
            isbn: isbnInput.value
        };

        const postRequestObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newBook)
        };

        fetch('https://books-aa485.firebaseio.com/books.json', postRequestObj)
            .then((res) => res.json())
            .then(idObj => renderBook(idObj.name, newBook, htmlSelectors['booksContainer']()))
            .catch(handleError);

        titleInput.value = '';
        authorInput.value = '';
        isbnInput.value = '';
    } else {
        const error = { message: '' };

        if (titleInput.value === '') {
            error.message += 'Title must not be mepty! ';
        }
        if (authorInput.value === '') {
            error.message += 'Author must not be empty! ';
        }
        if (isbnInput.value === '') {
            error.message += 'ISBN must not be empty! ';
        }

        handleError(error);
    }
}


htmlSelectors['loadBooks']()
    .addEventListener('click', fetchAllBooks);

htmlSelectors['createButton']()
    .addEventListener('click', createBook);

htmlSelectors['editButton']()
    .addEventListener('click', editBook);

htmlSelectors['deleteButton']()
    .addEventListener('click', confirmitionDeleteBook);
