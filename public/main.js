// main.js
import { observeAuth } from "./auth.js";
import { addMovement, listenMovements } from "./movements.js";

// Elementos del DOM
const form = document.getElementById("movementForm");
const list = document.getElementById("movementList");

// Escuchar estado de autenticación
observeAuth((user) => {
  if (user) {
    console.log("Usuario logueado:", user.uid);
    listenMovements(renderMovements);
  } else {
    console.log("No autenticado");
    list.innerHTML = "";
  }
});

// Enviar formulario
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    type: document.getElementById("type").value,
    amount: document.getElementById("amount").value,
    category: document.getElementById("category").value,
    description: document.getElementById("description").value
  };

  try {
    await addMovement(data);
    form.reset();
  } catch (error) {
    alert(error.message);
  }
});

// Renderizar movimientos
function renderMovements(movements) {
  list.innerHTML = "";

  movements.forEach((m) => {
    const li = document.createElement("li");
    li.textContent = `${m.type.toUpperCase()} - ${m.amount} - ${m.category}`;
    list.appendChild(li);
  });
}