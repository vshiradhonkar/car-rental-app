// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";



import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
apiKey: "AIzaSyDh39ylyUqo7MR5fBk6dkYz9rm2F9A1a0Q",
authDomain: "car-rental-cr.firebaseapp.com",
projectId: "car-rental-cr",
storageBucket: "car-rental-cr.appspot.com",
messagingSenderId: "129022294201",
appId: "1:129022294201:web:4ffbaa736965b34b3b4368",
measurementId: "G-L6S5X1S6K2"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const firestore = firebase.firestore();

export { auth, firestore }; // Add this line to export 'firestore'