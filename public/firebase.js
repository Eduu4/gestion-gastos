import {
  initializeApp
} from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import {
  getFirestore,
  connectFirestoreEmulator
} from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";
import {
  getAuth,
  connectAuthEmulator,
  signInAnonymously
} from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";

// TODO: Replace with your project's customized FirebaseCREDENTIALS
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
const firestore = getFirestore(app);
const auth = getAuth(app);

// If we are in a development environment, connect to the emulators
// The host value is derived from the exposed port of the hosting emulator
if (window.location.hostname === "localhost" || window.location.hostname.includes("-5000.")) {
  console.log("Connecting to local Firebase emulators");

  // Point Firestore to the local emulator
  connectFirestoreEmulator(firestore, 'localhost', 8080);

  // Point Auth to the local emulator
  connectAuthEmulator(auth, "http://localhost:9099");
}

// Sign in the user anonymously
signInAnonymously(auth).catch((error) => {
  console.error("Anonymous sign-in failed:", error);
});

export { app, firestore, auth };