import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import emailjs from 'emailjs-com';

emailjs.init("_H59xsezjb2loQduM");

const firebaseConfig = {
    apiKey: "AIzaSyDh39ylyUqo7MR5fBk6dkYz9rm2F9A1a0Q",
    authDomain: "car-rental-cr.firebaseapp.com",
    projectId: "car-rental-cr",
    storageBucket: "car-rental-cr.appspot.com",
    messagingSenderId: "129022294201",
    appId: "1:129022294201:web:4ffbaa736965b34b3b4368",
    measurementId: "G-L6S5X1S6K2",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const firestore = firebase.firestore();

// Set persistence to 'session'
auth.setPersistence(firebase.auth.Auth.Persistence.SESSION);

const signInWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
        const result = await auth.signInWithPopup(provider);
        const user = result.user;
        console.log(user);
    } catch (error) {
        console.error("Error signing in with Google:", error);
    }
};

export { auth, firestore, signInWithGoogle };


//EMailJS Necessary details
// template id : template_2yjjf7e
// service id : service_2p5z0ka
// API key : _H59xsezjb2loQduM