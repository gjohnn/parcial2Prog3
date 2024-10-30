// Render de la vista de categories

export const renderCategories = () => {
    //elementos de la lista
    const ulList = document.getElementById("listFilter");
    //creamos elementos dentro de la lista
    ulList.innerHTML = `
        <li id="todo">Todos los productos<li/>
        <li id="hamburguesas">Hamburguesas<li/>
        <li id="papas">Papas<li/>
        <li id="mayorPrecio">Mayor precio<li/>
        <li id="menorPrecio">Menor precio<li/>
    `;

    const liElements = ulList.querySelectorAll("li");

    liElements.forEach((liElement) => {
        liElement.addEventListener("click", () => {
            handleClick(liElement);
        })
    })
    //verificar y manejar estilos
    const handleClick = (element) => {
        liElements.forEach((e) => {
            if (e.classList.contains("liActive")) {
                e.classList.remove("liActive")
            }else{
                if (element === e) {
                    e.classList.add("liActive")
                }
            }
            
        })
    }
};
