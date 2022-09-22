// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAp6AYpBnGTPLmHrWtYLT8rWymfuZJOEw",
  authDomain: "elementos-final.firebaseapp.com",
  projectId: "elementos-final",
  storageBucket: "elementos-final.appspot.com",
  messagingSenderId: "473023483128",
  appId: "1:473023483128:web:7a9fe893b7ebae8a6eff0d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);