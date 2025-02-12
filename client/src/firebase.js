// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-6c508.firebaseapp.com",
  projectId: "mern-blog-6c508",
  storageBucket: "mern-blog-6c508.firebasestorage.app",
  messagingSenderId: "1025876350642",
  appId: "1:1025876350642:web:4bf8f138ce7416340a1bab"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
