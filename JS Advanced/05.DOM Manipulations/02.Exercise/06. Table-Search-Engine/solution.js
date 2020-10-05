function solve() {

    const selectedClassName = 'select';

    let searchButton = document.getElementById('searchBtn');
    let searchInputElement = document.getElementById('searchField');

    searchButton.addEventListener('click', search)

    function search() {
        let searchTerm = searchInputElement.value;
        let tableBodyRows = document.querySelectorAll('tbody > tr');
        
        removePreviousSelectedRows(tableBodyRows);
        Array.from(tableBodyRows)
            .forEach(row => searchInRow(row, searchTerm));
        
        searchInputElement.value = '';
    }

    function includesCaseInsesntive(text, searchTerm) {
        return text.toLowerCase().includes(searchTerm.toLowerCase());
    }

    const searchInRow = (row, searchTerm) => {
        let rowIncludesSearchTerm = false;
        Array.from(row.children)
            .forEach(element => {
                if (includesCaseInsesntive(element.textContent, searchTerm)) {
                    rowIncludesSearchTerm = true;
                }
            });
        
        if (rowIncludesSearchTerm) {
            row.classList.add(selectedClassName);
        }
    };

    function removePreviousSelectedRows(tableRows) {
        Array.from(tableRows)
            .forEach(row => row.classList.remove(selectedClassName));
    }
}