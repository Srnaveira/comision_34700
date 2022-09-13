// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyBMUHpT0xZBwl9MpvP453Kutf9CHi4a9ZM",
  authDomain: "react-34700.firebaseapp.com",
  projectId: "react-34700",
  storageBucket: "react-34700.appspot.com",
  messagingSenderId: "213306663173",
  appId: "1:213306663173:web:a770d08b51d7882d8ed76c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const DB = getFirestore(app);

export const AUTH = getAuth(app);

