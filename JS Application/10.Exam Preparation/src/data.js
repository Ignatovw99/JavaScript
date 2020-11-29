import { getAuthToken, saveUserData, getUserId, associativeArrayToIterableArray, clearUserData } from './util.js';
import { databaseUrl, firebaseConfig } from './config.js';

const endpoints = {

    LOGIN: 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=',
    REGISTER: 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=',
    ARTICLES: 'articles',
    ARTICLE_BY_ID: 'articles/'
};

function getUrlWithHost(url) {

    let result = databaseUrl + url + '.json';
    const authToken = getAuthToken();
    if (authToken) {
        result += `?auth=${authToken}`;
    }
    return result;
}

async function request(url, method, body) {

    const requestOptions = {
        method,
        headers: {
            'Content-Type': 'application/json'
        }
    };

    if (body) {
        Object.assign(requestOptions, { 
            body: JSON.stringify(body)
        });
    }
    
    const response = await fetch(url, requestOptions);
    const data = await response.json();

    if (data && data.hasOwnProperty('error')) {
        throw new Error(data.error);
    }

    return data;
}

async function get(url) {
    return request(url, 'GET');
}

async function post(url, body) {
    return request(url, 'POST', body);
}

async function patch(url, body) {
    return request(url, 'PATCH', body);
}

async function del(url) {
    return request(url, 'DELETE');
}

export async function login(email, password) {
    const loginData = await firebase.auth().signInWithEmailAndPassword(email, password);
    
    saveUserData(loginData.user);
    return loginData;
}

export async function register(email, password) {
    
    const registerData = await firebase.auth().createUserWithEmailAndPassword(email, password);
    
    saveUserData(registerData.user);
    return registerData;
}

export async function logout() {
    await firebase.auth().signOut();
    
    clearUserData();
}

export async function createArticle(article) {

    const data = Object.assign({ _ownerId: getUserId() }, article);

    return post(getUrlWithHost(endpoints.ARTICLES), data);
}

export async function getAllArticles() {
    const articlesRecords = await get(getUrlWithHost(endpoints.ARTICLES));
    return associativeArrayToIterableArray(articlesRecords);
}

export async function getAllArticlesByCategories() {

    const categoryMap = {
        'JavaScript': 'jsArticles',
        'C#': 'cSharpArticles',
        'Java': 'javaArticles',
        'Pyton': 'pytonArticles'
    };

    const result = {
        jsArticles: [],
        cSharpArticles: [],
        javaArticles: [],
        pytonArticles: []
    };

    const articles = await getAllArticles();
    articles.forEach(article => {
        if (categoryMap[article.category]) {
            result[categoryMap[article.category]].push(article);
        }
    });

    return result;
}

export async function getArticleById(id) {
    const article = await get(getUrlWithHost(endpoints.ARTICLE_BY_ID + id));
    article._id = id;
    return article;
}

export async function editArticle(id, article) {
    return patch(getUrlWithHost(endpoints.ARTICLE_BY_ID + id), article);
}

export async function deleteArticle(id) {
    return del(getUrlWithHost(endpoints.ARTICLE_BY_ID + id));
}
