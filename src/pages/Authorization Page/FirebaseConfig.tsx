import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyD0yp4ZJ8tyoNWvsxSwqhG68NjsL8_RdM0",
    authDomain: "fir-react-auth-5a6ec.firebaseapp.com",
    projectId: "fir-react-auth-5a6ec",
    storageBucket: "fir-react-auth-5a6ec.appspot.com",
    messagingSenderId: "270995606690",
    appId: "1:270995606690:web:225452663e360bb1f69bfb",
    measurementId: "G-QF8TF3XFH3"
};


const app = initializeApp(firebaseConfig);

export const auth  = getAuth(app);