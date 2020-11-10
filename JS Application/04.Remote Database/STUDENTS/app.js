const htmlSelectors = {
    firstNameInput: () => document.querySelector('#first-name'),
    lastNameInput: () => document.querySelector('#last-name'),
    facultyNumberInput: () => document.querySelector('#faculty-number'),
    gradeInput: () => document.querySelector('#grade'),
    createButton: () => document.querySelector('#create-form > button'),
    studentsTableBody: () => document.querySelector('#results > tbody')
};

function isEmpty(value) {
    return value === '';
}

function createDOMElement(type, content, attributes, events, ...children) {

    const domElement = document.createElement(type);
    if (content !== '') {
        domElement.textContent = content;
    }
    Object.entries(attributes)
        .forEach(([attributeKey, attributeValue]) => {
            domElement.setAttribute(attributeKey, attributeValue);
        });
    Object.entries(events)
        .forEach(([eventType, eventHandler]) => {
            domElement.addEventListener(eventType, eventHandler);
        });
    domElement.append(...children);

    return domElement;
}

function renderStudent(student) {
    const studentRow = createDOMElement('tr', '', {}, {}, 
        createDOMElement('td', student.id, {}, {}),
        createDOMElement('td', student.firstName, {}, {}),
        createDOMElement('td', student.lastName, {}, {}),
        createDOMElement('td', student.facultyNumber, {}, {}),
        createDOMElement('td', student.grade, {}, {}),
    );

    htmlSelectors.studentsTableBody().appendChild(studentRow);
}

function fetchAllStudents() {
    
    htmlSelectors.studentsTableBody().innerHTML = '';

    fetch('https://books-aa485.firebaseio.com/students.json')
        .then(res => res.json())
        .then(students => {
            Object.values(students)
                .sort((f, s) => f.id - s.id)
                .forEach(renderStudent);
        });
}

async function createStudent(e) {
    e.preventDefault();

    const firstNameInput = htmlSelectors.firstNameInput();
    const lastNameInput = htmlSelectors.lastNameInput();
    const facultyNumberInput = htmlSelectors.facultyNumberInput();
    const gradeInput = htmlSelectors.gradeInput();

    const firstName = firstNameInput.value;
    const lastName = lastNameInput.value;
    const facultyNumber = facultyNumberInput.value;
    const grade = gradeInput.value;

    if (!(isEmpty(firstName) || isEmpty(lastName) || isEmpty(facultyNumber) || isEmpty(grade))) {

        const studentsRequest = await fetch('https://books-aa485.firebaseio.com/students.json');
        const studentsJson = await studentsRequest.json();
        const studentsObj = await studentsJson;
        let id = 1;
        if (studentsObj) {
            id += Object.values(studentsObj).length;
        }

        const postRequestObj = {
            method: 'POST',
            body: JSON.stringify({
                id,
                firstName,
                lastName,
                facultyNumber,
                grade
            })
        }
        fetch('https://books-aa485.firebaseio.com/students.json', postRequestObj)
            .then(fetchAllStudents);
    }
}

htmlSelectors.createButton()
    .addEventListener('click', createStudent);

fetchAllStudents();