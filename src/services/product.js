
import { productoActivo } from "../../main.js";
import { handleGetProductsLocalStorage, setInLocalStorage } from "../persistence/localStorage.js";
import { closeModal } from "../views/modal.js";
import { handleGetProductsToStore, handleRenderList } from "../views/store.js";

const acceptBtn = document.getElementById("acceptBtn");
acceptBtn.addEventListener("click", () => {
    handleSaveOrModify();
});

const buttonCancel = document.getElementById("cancelBtn");
buttonCancel.addEventListener("click", () => {
    closeModal();
});

const handleSaveOrModify = () => {
    const nombre = document.getElementById("nombre").value;
    const img = document.getElementById("img").value;
    const precio = document.getElementById("precio").value;
    const categoria = document.getElementById("categoria").value;
    let obj = null;

    if (productoActivo) {
        obj = {
            ...productoActivo,
            nombre,
            img,
            precio,
            categoria
        };
    } else {
        obj = {
            id: new Date().toISOString(),
            nombre,
            img,
            precio,
            categoria
        };
    }
    setInLocalStorage(obj);
    handleGetProductsToStore();
    closeModal();
};

export const handleDeleteProduct = () => {

    const products = handleGetProductsLocalStorage();

    const result = products.filter((el) => el.id != productoActivo.id)
    // Guardar en Local Storage
    localStorage.setItem("products", JSON.stringify(result));

    const newProducts = handleGetProductsLocalStorage();
    handleRenderList(newProducts);
};

// Eventos



