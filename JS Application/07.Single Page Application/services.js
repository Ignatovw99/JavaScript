const apiKey = 'AIzaSyBztFxwYVqW-IfMI3dRpVs1MDQmyzaGV90';
const databaseUrl = 'https://movies-21406.firebaseio.com';

const request = async (url, method = 'GET', body) => {
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
}

const authService = {

    async login(email, password) {
        const loginData = await request(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`, 'POST', { email, password });

        localStorage.setItem('auth', JSON.stringify(loginData));

        return loginData;
    },

    getData() {
        try {
            const authData = JSON.parse(localStorage.getItem('auth'));
            return {
                isAuthenticated: Boolean(authData.idToken),
                email: authData.email || ''
            };
        } catch (err) {
            return {
                isAuthenticated: false,
                email: ''
            };      
        }
    },

    logout() {
        localStorage.setItem('auth', '');
    }
}

const movieService = {

    async add(movieData) {
        const response = await request(`${databaseUrl}/movies.json`, 'POST', movieData);
        return response;
    },

    async getAll() {
        const response = await request(`${databaseUrl}/movies.json`);
        return response;
    },
    
    async getById(id) {
        const response = await request(`${databaseUrl}/movies/${id}.json`);
        return response;
    }
}