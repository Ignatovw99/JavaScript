export const firebaseConfig = {
    apiKey: "AIzaSyBztFxwYVqW-IfMI3dRpVs1MDQmyzaGV90",
    authDomain: "movies-21406.firebaseapp.com",
    databaseURL: "https://movies-21406.firebaseio.com",
    projectId: "movies-21406",
    storageBucket: "movies-21406.appspot.com",
    messagingSenderId: "491481076622",
    appId: "1:491481076622:web:a6ed40fb1807469ce90adf"
};

export function init() {

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
}

export const databaseUrl = 'https://movies-21406.firebaseio.com/';