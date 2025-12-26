import { login } from "./auth.js";
import { saveMovement } from "./movements.js";

const movementForm = document.querySelector("#movement-form");
const movementDescription = document.querySelector("#movement-description");
const movementAmount = document.querySelector("#movement-amount");
const movementType = document.querySelector("#movement-type");

const movementsList = document.querySelector('#movements-list');

let movements = [];

const renderMovements = () => {
    movementsList.innerHTML = movements.map(movement => {
        return `<li class="movement-item ${movement.type}">
            <span>${movement.description}</span>
            <span>${movement.amount}</span>
        </li>`;
    }).join('');
}

export const setMovements = (newMovements) => {
    movements = newMovements;
    renderMovements();
}

export const getMovements = () => {
    return movements;
}


movementForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const movement = {
        description: movementDescription.value,
        amount: movementAmount.value,
        type: movementType.value, // 'income' or 'expense'
    }
    saveMovement(movement);
});

login();