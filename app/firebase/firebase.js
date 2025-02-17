import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAPR4nilZxCZLgQlQ2rRVpwKc935UNrjH8",
    authDomain: "koftagy-28846.firebaseapp.com",
    projectId: "koftagy-28846",
    storageBucket: "koftagy-28846.appspot.com",
    messagingSenderId: "1034051004902",
    appId: "1:1034051004902:web:71880e2cb0a277972ece27"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)