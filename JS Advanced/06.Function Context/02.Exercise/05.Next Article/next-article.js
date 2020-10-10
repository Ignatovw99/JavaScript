function getArticleGenerator(articles) {
    
    let contentElement = document.getElementById('content');
    let currentArticleIndex = 0;

    return function() {
        if (currentArticleIndex >= articles.length) {
            return;
        }
        let currentArticle = articles[currentArticleIndex++];
        let articleElement = document.createElement('article');
        articleElement.textContent = currentArticle;
        contentElement.appendChild(articleElement);
    }
}