import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBTqO2MseZvfV9AZy_7BKg7N8sI5V95pqc",
  authDomain: "chat-app-d064a.firebaseapp.com",
  projectId: "chat-app-d064a",
  storageBucket: "chat-app-d064a.appspot.com",
  messagingSenderId: "876916874733",
  appId: "1:876916874733:web:a496a45f9954c0ea709be4",
  measurementId: "G-ETZ006L65R",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
