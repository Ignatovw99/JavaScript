function createArticle() {

    let titleElement = document.getElementById('createTitle');
    let contentElement = document.getElementById('createContent');

    if (titleElement.value === '' || contentElement.value === '') {
        return;
    }
    let articleHeadingElement = document.createElement('h3');
    articleHeadingElement.textContent = titleElement.value;
    titleElement.value = '';

    let contentArticleElement = document.createElement('p');
    contentArticleElement.textContent = contentElement.value;
    contentElement.value = '';

    let articleElement = document.createElement('article');
    articleElement.appendChild(articleHeadingElement);
    articleElement.appendChild(contentArticleElement);

    let articleSectionElement = document.getElementById('articles');
    articleSectionElement.appendChild(articleElement);
}