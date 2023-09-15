// Import the functions you need from the SDKs you need
import { getAuth } from "@firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCE-Fk3hn6tloddfDhYXfnbg2yHgC8IFNY",
    authDomain: "notebook-119d7.firebaseapp.com",
    projectId: "notebook-119d7",
    storageBucket: "notebook-119d7.appspot.com",
    messagingSenderId: "1009883050648",
    appId: "1:1009883050648:web:2eba2764edfa7e21f896ed",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
export const db = getFirestore(app);
export const auth = getAuth(app);
