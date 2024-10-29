import { setInLocalStorage } from "./src/persistence/localStorage.js";
import { renderCategories } from "./src/services/categories.js";
import './style.css';
renderCategories();

// PRODUCT

// ========= POPUP =========

const buttonAdd = document.getElementById("buttonAddElement")

buttonAdd.addEventListener("click", () => {
    openModal();
})

const buttonCancel = document.getElementById("cancelBtn")

buttonCancel.addEventListener("click", () => {
    handleCancelBtn();
})

const handleCancelBtn = () => {
    closeModal();
}

//ABRIR - CERRAR MODAL
const openModal = () => {
    const modal = document.getElementById("modalPopUP")
    modal.style.display = "flex";
}

const closeModal = () => {
    const modal = document.getElementById("modalPopUP")
    modal.style.display = "none";
}

// GUARDAR O MODIFICAR ELEMENTOS

const acceptBtn = document.getElementById("acceptBtn")

acceptBtn.addEventListener("click", () => {
    handleSaveOrModify();
})

const handleSaveOrModify = () => {
    const nombreInput = document.getElementById("nombre").value
    const imgInput = document.getElementById("img").value
    const precioInput = document.getElementById("precio").value
    const categoriaInput = document.getElementById("categoria").value

    let obj = {
        id: new Date().toISOString(), 
        nombreInput, 
        imgInput, 
        precioInput, 
        categoriaInput
    }
    
    setInLocalStorage(obj);
    console.log(obj);

    closeModal();

}