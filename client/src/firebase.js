// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "genwebai-ccea1.firebaseapp.com",
  projectId: "genwebai-ccea1",
  storageBucket: "genwebai-ccea1.firebasestorage.app",
  messagingSenderId: "1072417689404",
  appId: "1:1072417689404:web:f11566672e2c3ec6ecd839",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
