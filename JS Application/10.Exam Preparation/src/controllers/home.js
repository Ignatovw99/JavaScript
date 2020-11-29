import { getAllArticlesByCategories } from '../data.js';
import { getUserData, loadPartials } from '../util.js';

export async function homeHanlder() {
    try {
        await loadPartials(this);
        this.partials.article = await this.load('/templates/articles/article.hbs');

        const userData = getUserData();
        if (userData.isAuthenticated) {
            const articles = await getAllArticlesByCategories();
            Object.values(articles)
                .forEach(categoryArticles => categoryArticles.sort((f, s) => s.title.localeCompare(f.title)));
            const data = Object.assign({}, articles, userData);
    
            this.partial('/templates/articles/home.hbs', data);
        } else {
            this.partial('/templates/user/login.hbs', userData);
        }
    } catch (err) {
        alert(err.message);
    }
}