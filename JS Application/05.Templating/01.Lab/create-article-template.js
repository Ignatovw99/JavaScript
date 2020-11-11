function createArticleElement(data) { //behind the handlebars compilation
    return `
        <div>
            <h1>${data.title}</h1>
            <p>${data.content}</p>
            <span>${data.author}</span>
        </div>
    `;
}