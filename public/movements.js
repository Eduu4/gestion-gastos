import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";
import { auth, db } from './firebase.js';
import { getMovements, setMovements } from "./main.js";

const MOVEMENTS_COLLECTION = 'movements';

export const saveMovement = (movement) => {
    const { uid } = auth.currentUser;
    addDoc(collection(db, MOVEMENTS_COLLECTION), {
        ...movement,
        timestamp: serverTimestamp(),
        uid,
    });
}

export const initMovements = () => {
    const { uid } = auth.currentUser;
    const q = query(collection(db, MOVEMENTS_COLLECTION), orderBy('timestamp', 'desc'));

    onSnapshot(q, (querySnapshot) => {
        const movements = [];
        querySnapshot.forEach((doc) => {
            const movement = doc.data();
            movements.push(movement);
        });
        setMovements(movements);
    });
}