import { setInLocalStorage } from "./src/persistence/localStorage.js";
import { renderCategories } from "./src/services/categories.js";
import { handleGetProductsToStore } from "./src/views/store.js";
import './style.css';

// APP
handleGetProductsToStore();
renderCategories();

// Obtener elementos del DOM
const buttonAddElement = document.getElementById("buttonAddElement");
const acceptBtn = document.getElementById("acceptBtn");
const buttonCancel = document.getElementById("cancelBtn");
const modalPop = document.getElementById("modalPopUP");

// Funciones
const openModal = () => {
    if (modalPop) {
        modalPop.style.display = "flex";
    }
};

const closeModal = () => {
    if (modalPop) {
        modalPop.style.display = "none";
    }
};

const handleSaveOrModify = () => {
    const nombre = document.getElementById("nombre").value;
    const img = document.getElementById("img").value;
    const precio = document.getElementById("precio").value;
    const categoria = document.getElementById("categoria").value;

    let obj = {
        id: new Date().toISOString(),
        nombre,
        img,
        precio,
        categoria
    };

    setInLocalStorage(obj);
    console.log(obj);

    closeModal();
};

// Eventos

buttonAddElement.addEventListener("click", openModal);

acceptBtn.addEventListener("click", handleSaveOrModify);

buttonCancel.addEventListener("click", closeModal);

