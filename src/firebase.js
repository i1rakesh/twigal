import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import {getStorage} from "firebase/storage"
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDLRhoZMCdxdJ61GrjhapNxBhjZ09rsMTQ",
  authDomain: "twigal-bb3d5.firebaseapp.com",
  projectId: "twigal-bb3d5",
  storageBucket: "twigal-bb3d5.appspot.com",
  messagingSenderId: "633773688153",
  appId: "1:633773688153:web:024c9fd5d03a9653b5f848",
  measurementId: "G-PS5SZW0L7D"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()