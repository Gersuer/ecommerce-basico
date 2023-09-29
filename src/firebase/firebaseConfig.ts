import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCCYrNOAt6uHPsHQj7oakHDB6bHIrnWiO8",
    authDomain: "ecommerce-3bc3f.firebaseapp.com",
    projectId: "ecommerce-3bc3f",
    storageBucket: "ecommerce-3bc3f.appspot.com",
    messagingSenderId: "145658879070",
    appId: "1:145658879070:web:f90bea139bd9f994f5a8cf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db }