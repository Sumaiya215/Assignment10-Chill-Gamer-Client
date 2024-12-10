// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFGf4wcfrUDfHw8ziagxa_hzD8T_64JV4",
  authDomain: "chill-gamer-7847f.firebaseapp.com",
  projectId: "chill-gamer-7847f",
  storageBucket: "chill-gamer-7847f.firebasestorage.app",
  messagingSenderId: "933320729332",
  appId: "1:933320729332:web:52e5e89cb3c1e659e434a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);