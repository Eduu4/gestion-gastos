import { db, auth } from "./firebase.js";
import {
  collection,
  addDoc,
  query,
  where,
  orderBy,
  onSnapshot,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

export async function addMovement(data) {
  const user = auth.currentUser;
  if (!user) throw new Error("No autenticado");

  await addDoc(collection(db, "movements"), {
    userId: user.uid,
    type: data.type,
    amount: Number(data.amount),
    category: data.category,
    description: data.description || "",
    source: "web",
    createdAt: serverTimestamp()
  });
}

export function listenMovements(callback) {
  const user = auth.currentUser;
  if (!user) return;

  const q = query(
    collection(db, "movements"),
    where("userId", "==", user.uid),
    orderBy("createdAt", "desc")
  );

  return onSnapshot(q, (snapshot) => {
    const movements = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    callback(movements);
  });
}