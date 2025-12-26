
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";

// Your web app's Firebase configuration
// IMPORTANT: REPLACE WITH YOUR FIREBASE PROJECT CONFIG
const firebaseConfig = {
  apiKey: "AIzaSyAhAP6g5GaNhQnwMHC5GNxCq4pCA3Vo3kA",
  authDomain: "gestion-gastos-d07b8.firebaseapp.com",
  projectId: "gestion-gastos-d07b8",
  storageBucket: "gestion-gastos-d07b8.firebasestorage.app",
  messagingSenderId: "968316670962",
  appId: "1:968316670962:web:590e5ad89385e9297d916b",
  measurementId: "G-8QST497D6K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
