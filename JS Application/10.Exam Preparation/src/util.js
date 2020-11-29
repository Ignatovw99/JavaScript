export function getUserData() {

    const authData = JSON.parse(localStorage.getItem('auth'));
    if (authData === null) {
        return {
            isAuthenticated: false,
            email: '',
            authToken: '',
            localId: ''
        };
    } else {  
        return {
            isAuthenticated: Boolean(authData.authToken),
            email: authData.email || '',
            authToken: authData.idToken || '',
            localId: authData.localId || ''
        };
    }
}

export function saveUserData(user) {
    const { email, uid, ya } = user;
    const data = {
        email,
        localId: uid,
        authToken: ya
    };

    localStorage.setItem('auth', JSON.stringify(data));
}

export function clearUserData() {

    localStorage.removeItem('auth');
}

export function getAuthToken() {
    return getUserData().authToken;
}

export function getUserId() {
    return getUserData().localId;
}

export function associativeArrayToIterableArray(data) {
    if (!data) {
        return [];
    }
    return Object.entries(data)
                .map(([key, value]) => Object.assign({_id: key}, value));
}

export async function loadPartials(context) {
    const [headerPartial, footerPartial] = await Promise.all([
        context.load('/templates/common/header.hbs'),
        context.load('/templates/common/footer.hbs')
    ]);
    
    context.partials = {
        header: headerPartial,
        footer: footerPartial
    };
}

export function isEmpty(value) {
    return value.length === 0;
}