import { databaseUrl, firebaseConfig } from '/src/config.js';


async function request(url, method = 'GET', body) {
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
    return data;
};

async function get(url) {
    return request(url, 'GET');
}

async function post(url, body) {
    return request(url, 'POST', body);
}

async function del(url) {
    return request(url, 'DELETE');
}

const authService = {

    async login(email, password) {
        const loginData = await post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${firebaseConfig.apiKey}`, { email, password });
        if (loginData.error) {
            throw new Error('Invalid credentials');
        } else {
            localStorage.setItem('auth', JSON.stringify(loginData));
            return loginData;
        }
    },

    async register(email, password) {
        const registerData = await post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${firebaseConfig.apiKey}`, { email, password });
        if (registerData.error) {
            throw new Error('Already exists');
        } else {
            localStorage.setItem('auth', JSON.stringify(registerData));
            return registerData;
        }
    },

    getData() {
        const authData = JSON.parse(localStorage.getItem('auth'));
        if (authData === null) {
            return {
                isAuthenticated: false,
                email: ''
            };
        } else {  
            return {
                isAuthenticated: Boolean(authData.idToken),
                email: authData.email || ''
            };
        }
    },

    async logout() {
        await firebase.auth().signOut()
        localStorage.removeItem('auth');
    }
}


const offerService = {


    async create(name, price, imageUrl, description, brand, creator) {
        const offer = {
            name, price, imageUrl, description, brand, creator, boughtBy: []
        };
        const response = await request(`${databaseUrl}/offers.json`, 'POST', offer);
        return response;
    },

    async getAll() {
        const response = await request(`${databaseUrl}/offers.json`);
        return response;
    },
    
    async getById(id) {
        const response = await request(`${databaseUrl}/offers/${id}.json`);
        return response;
    }

}

export {
    authService,
    offerService
};