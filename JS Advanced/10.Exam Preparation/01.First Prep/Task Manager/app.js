function solve() {

    const sectionElements = document.querySelectorAll('section');
    const openDivTasksElement = sectionElements.item(1).querySelectorAll('div').item(1);
    const progressDivTasksElement = sectionElements.item(2).querySelectorAll('div').item(1);
    const finishedDivTasksElement = sectionElements.item(3).querySelectorAll('div').item(1);

    const inputTaskElement = document.querySelector('#task');
    const inputTaskDescriptionElement = document.querySelector('#description');
    const inputDateElement = document.querySelector('#date');

    document.querySelector('#add').addEventListener('click', addTask);

    function addTask(e) {
        e.preventDefault();

        const taskName = inputTaskElement.value;
        const taskDescription = inputTaskDescriptionElement.value;
        const taskDate = inputDateElement.value;

        if (taskName.length == 0 || taskDescription.length == 0 || taskDate.length == 0) {
            return;
        }

        const startBtn = createElement('button', 'Start', { className: 'green' });
        const finishBtn = createElement('button', 'Finish', { className: 'orange' });
        const deleteBtn = createElement('button', 'Delete', { className: 'red' });
        
        const btnDiv = createElement('div', [
            startBtn,
            deleteBtn
        ], { className: 'flex' });

        const taskElement = createElement('article', [
            createElement('h3', taskName),
            createElement('p', `Description: ${taskDescription}`),
            createElement('p', `Due Date: ${taskDate}`),
            btnDiv
        ]);

        startBtn.addEventListener('click', () => {
            progressDivTasksElement.appendChild(taskElement);
            startBtn.remove();
            btnDiv.appendChild(finishBtn);
        });

        finishBtn.addEventListener('click', () => {
            finishedDivTasksElement.appendChild(taskElement);
            btnDiv.remove();
        });

        deleteBtn.addEventListener('click', () => taskElement.remove());

        openDivTasksElement.appendChild(taskElement);
    }

    function createElement(type, content, attributes) {
        const result = document.createElement(type);

        if (attributes !== undefined) {
            Object.assign(result, attributes);
        }

        if (Array.isArray(content)) {
            content.forEach(appendChildNode);
        } else {
            appendChildNode(content);
        }

        function appendChildNode(node) {
            if (typeof node === 'string') {
                node = document.createTextNode(node);
            }
            result.appendChild(node);
        }
    
        return result;
    }
}