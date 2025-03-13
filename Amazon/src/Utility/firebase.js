import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "clone-dffee.firebaseapp.com",
  projectId: "clone-dffee",
  storageBucket: "clone-dffee.appspot.com",
  messagingSenderId: "1019945493736",
  appId: "1:1019945493736:web:603b1402d42b1bf149955d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth and Firestore
export const auth = getAuth(app);
export const db = getFirestore(app);
