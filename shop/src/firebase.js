// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "process.env.REACT_APP_AIzaSyA0nTyxXuNk9P9PoWg4kA936fC9ezq3q1g",
  authDomain: "process.env.REACT_APP_capstone-16a74.firebaseapp.com",
  projectId: "process.env.REACT_APP_capstone-16a74",
  storageBucket: "process.env.REACT_APP_capstone-16a74.appspot.com",
  messagingSenderId: "process.env.REACT_APP_650956541054",
  appId: "process.env.REACT_APP_1:650956541054:web:833e361d6dcd7d11785c2f",
  measurementId: "process.env.REACT_APP_G-6Z6L9HMR0R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }