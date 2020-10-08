function solve() {

    let dropdownButton = document.getElementById('dropdown');
    let dropdownMenu = document.getElementById('dropdown-ul');
    let boxElement = document.getElementById('box');

    dropdownButton.addEventListener('click', chooseYouStyleHandler);
    dropdownMenu.addEventListener('click', function(e) {
        let tagName = e.target.tagName;
        console.log
        if (tagName !== 'LI') {
            return;
        }
        changeColor.call(e.target);
    })

    function changeColor() {
        let color = this.innerHTML;
        boxElement.style.color = 'black';
        boxElement.style.backgroundColor = color;
    }

    function evictColors() {
        boxElement.style.color = 'white';
        boxElement.style.backgroundColor = 'black';
    }

    function checkIfDropdownMenuIsHidden() {
        let dropdownMenuDisplayValue = dropdownMenu.style.display;
        return dropdownMenuDisplayValue === '' || dropdownMenuDisplayValue === 'none';
    }

    function chooseYouStyleHandler() {
        if (checkIfDropdownMenuIsHidden()) {
            dropdownMenu.style.display = 'block';
        } else {
            dropdownMenu.style.display = 'none';
            evictColors();
        }
    }
}