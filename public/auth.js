import { onAuthStateChanged, signInAnonymously } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
import { auth } from './firebase.js';
import { initMovements } from './movements.js';

onAuthStateChanged(auth, async user => {
    if(user) {
        console.log('user logged in', user);
        initMovements();
    } 
});


export const login = () => {
    signInAnonymously(auth).catch(err => {
        console.error(err);
    });
}