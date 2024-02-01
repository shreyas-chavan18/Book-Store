// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB-DU14NXDwQdgUUNtCxK39rDgCwDedNZM",
    authDomain: "mern-book-inventory-15c16.firebaseapp.com",
    projectId: "mern-book-inventory-15c16",
    storageBucket: "mern-book-inventory-15c16.appspot.com",
    messagingSenderId: "386426759260",
    appId: "1:386426759260:web:b4b469b59dc23588ae5e99"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;