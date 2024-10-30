// src/views/store.js
import { handleGetProductsLocalStorage } from "../persistence/localStorage";

export const handleGetProductsToStore = () => {
    const products = handleGetProductsLocalStorage();
    handleRenderList(products);
};

export const handleRenderList = (productosIn) => {

    const burgers = productosIn.filter((e) => e.categoria === "Hamburguesas");
    const papas = productosIn.filter((e) => e.categoria === "Papas");
    const gaseosas = productosIn.filter((e) => e.categoria === "Gaseosas");

    const renderProductsGroup = (productos, title) => {
        if (productos.length > 0) {
            const productosHTML = productos.map((producto, index) => {
                return `
                    <div id="product-${producto.categoria}-${index}">
                        <div>
                            <img src='${producto.img}' />
                        </div>
                        <div>
                            <h2>${producto.nombre}</h2>
                        </div>
                        <div>
                            <p>Precio: ${producto.precio}</p>
                            <p>Categoria: ${producto.categoria}</p>
                        </div>
                    </div>`;
            });

            return `
                <section>
                <h3>${title}</h3>
                <div>
                    ${productosHTML.join("")}
                </div>
                </section>
            `;
        } else {
            return ``;
        }
    };

    // Renderizar cada producto
    const appContainer = document.getElementById("storeContainer");
    appContainer.innerHTML = `
        ${renderProductsGroup(burgers, "Hamburguesas")}
        ${renderProductsGroup(papas, "Papas")}
        ${renderProductsGroup(gaseosas, "Gaseosas")}
    `;

    const addEvents = (productosIn) => {
        productosIn.forEach((element, index) => {
            const productContainer = document.getElementById(`product-${element.categoria}-${index}`);
            productContainer.addEventListener("click", () => {
                console.log("ProductoActivo", element);
            });
        });
    };

    addEvents(burgers);
    addEvents(papas);
    addEvents(gaseosas);
};
