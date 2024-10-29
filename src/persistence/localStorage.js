// LOCAL STORAGE

export const handleGetProducts = () => {
    const productos = JSON.parse(localStorage.getItem("products"))
    if (productos) {
        return productos;
    } else {
        return [];
    }
};

//Guardar

export const setInLocalStorage = (productIn) => {
    //Traer elementos
    let productsInLocal = handleGetProducts();

    const existingIndex = productsInLocal.findIndex((productsInLocal) => {
        productsInLocal.id == productIn.id
    })
    //Verificar si existe
    if (existingIndex != -1) {
        //Si existe, se reemplaza
        productsInLocal[existingIndex] = productIn;
    } else {
        productsInLocal.push(productIn)
    }

    localStorage.setItem("products", JSON.stringify(productsInLocal))

}