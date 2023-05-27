import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import {getStorage} from "firebase/storage"
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";
import "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyB3RyxEmlIcNXwCisKf1jTM45MWm_c4r9s",
    authDomain: "twigal2.firebaseapp.com",
    projectId: "twigal2",
    storageBucket: "twigal2.appspot.com",
    messagingSenderId: "273014406464",
    appId: "1:273014406464:web:53d4d887a115fb8a1d8ea5"
  };

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
export const provider = new GoogleAuthProvider();
