function solve() {

    for (const siteDivElement of document.querySelectorAll('.link-1')) {
        siteDivElement.addEventListener('click', function () {
            let visitedTextParagraphElement = this.getElementsByTagName('p')[0];
            let newVisitedCount = Number(visitedTextParagraphElement.innerHTML.split(' ')[1]) + 1;
            visitedTextParagraphElement.innerHTML = `visited ${newVisitedCount} times`;
        });
    }
}