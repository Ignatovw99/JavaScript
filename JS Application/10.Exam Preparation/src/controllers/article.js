import { loadPartials, getUserData, isEmpty } from '../util.js';
import { createArticle, deleteArticle, editArticle, getArticleById } from '../data.js';

export async function createGetHandler() {

    await loadPartials(this);
    this.partial('/templates/articles/create.hbs', getUserData());
}

export async function createPostHandler(context) {

    const { title, category, content } = context.params;
    try {
        if (isEmpty(title) || isEmpty(category) || isEmpty(content)) {
            throw new Error('All fields are required!');
        } else {
            await createArticle({ title, category, content });
            context.redirect('/home');
        }
    } catch (error) {
        alert(error.message);
    }
}

export async function editGetHandler() {

    const id = this.params.id;

    await loadPartials(this);
    const userData = getUserData();
    const article = await getArticleById(id);
    const data = Object.assign({}, userData, article);
    this.partial('/templates/articles/edit.hbs', data);
}

export async function editPostHandler(context) {

    const { id, title, category, content } = context.params;
    try {
        if (isEmpty(title) || isEmpty(category) || isEmpty(content)) {
            throw new Error('All fields are required!');
        } else {
            await editArticle(id, { title, category, content });
            context.redirect('/home');
        }
    } catch (error) {
        alert(error.message);
    }
}

export async function detailsHandler() {
    const id = this.params.id;

    try {
        await loadPartials(this);
        const userData = getUserData();
        const article = await getArticleById(id);
        const data = Object.assign({}, article, userData);
        data.canModify = userData.localId === article._ownerId;

        this.partial('/templates/articles/details.hbs', data);
    } catch (err) {
        alert(err.message);
    }
}

export async function deleteHandler() {
    const id = this.params.id;
    try {
        await deleteArticle(id);
        this.redirect('/home');
    } catch (err) {
        alert(err.message);
    }
}
