// firebase-config.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBfPVQ611pSzHLgCGrnjpCQ40F_IdNNj4U",
    authDomain: "serverless-chat-app-c8809.firebaseapp.com",
    projectId: "serverless-chat-app-c8809",
    storageBucket: "serverless-chat-app-c8809.firebasestorage.app",
    messagingSenderId: "278882621888",
    appId: "1:278882621888:web:98e2963744ef7afbd35025",
    measurementId: "G-FSWN5L35MS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
