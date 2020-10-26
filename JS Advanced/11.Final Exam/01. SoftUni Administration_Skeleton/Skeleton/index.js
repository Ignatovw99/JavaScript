function solve() {

    const lectureNameInput = document.querySelector('form input[name=lecture-name]');
    const lectureDateInput = document.querySelector('form input[name=lecture-date]');
    const lectureModuleInput = document.querySelector('form select[name=lecture-module]');
    const addBtn = document.querySelector('form button');

    const modules = document.querySelector('div[class=modules]');

    addBtn.addEventListener('click', addLecture);

    function addLecture(e) {
        e.preventDefault();

        const name = lectureNameInput.value;
        const date = lectureDateInput.value;
        let module = lectureModuleInput.options[lectureModuleInput.selectedIndex].value;

        if (isEmpty(name) || isEmpty(date) || lectureModuleInput.selectedIndex === 0) {
            return;
        }

        module = (module + '-' + 'Module').toUpperCase();

        let currentModule = Array.from(modules.children)
                    .find(x => x.querySelector('h3').textContent === module);
        
        if (currentModule === undefined) {
            currentModule = createElement('div', [
                createElement('h3', module),
                createElement('ul', '')
            ], { className: 'module' });
            modules.appendChild(currentModule);
        }

        let moduleLectures = currentModule.querySelector('ul');
    
        let delBtn = createElement('button', 'Del', {className: 'red'});
        let lecture = createElement(
            'li',
            [
                createElement('h4', name + ' - ' + formatDate(date)),
                delBtn
            ],
            { className: 'flex' }
        );

        moduleLectures.appendChild(lecture);

        let sortedLecures = Array.from(moduleLectures.children).sort((f, s) => {
            let first = f.querySelector('h4');
            let second = s.querySelector('h4');
            let firstDate = first.textContent.substring(first.textContent.indexOf(' - ') + 3);
            let secondDate = second.textContent.substring(second.textContent.indexOf(' - ') + 3)
            return firstDate.localeCompare(secondDate);
        });

        // Array.from(moduleLectures.children).forEach(x => x.remove());
        sortedLecures.forEach(l => moduleLectures.appendChild(l));

        delBtn.addEventListener('click', (e) => {
            lecture.remove();
            if (moduleLectures.children.length === 0) {
                currentModule.remove();
            }
        });
    }

    

    function isEmpty(value) {
        return value.length == 0;
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
    function formatDate(date) {
        let d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = ''+ d.getFullYear(),
            hour = '' + d.getHours(),
            minutes = '' + d.getMinutes();
    
        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;

        if (hour.length < 2) 
            hour = '0' + hour;
        if (minutes.length < 2) 
            minutes = '0' + minutes;
    
        return year + '/' + month + '/' + day + ' - ' + hour + ':' + minutes; 
    }
};