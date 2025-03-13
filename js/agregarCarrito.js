/* document.addEventListener("DOMContentLoaded", () => {
    let carritoLista = document.querySelector(".carrito__lista"); // Contenedor de productos
    let resumenCarrito = document.querySelector(".carrito__resumen"); // Resumen del carrito

    if (carritoLista && resumenCarrito) { // Verificamos que ambos elementos existan
        // Crear el nuevo producto
        let nuevoItem = document.createElement("li");
        nuevoItem.classList.add("carrito__item");

        // Crear la imagen
        let imagen = document.createElement("img");
        imagen.classList.add("item__imagen");
        imagen.src = "./assets/giratina_fullArt.jpg";
        imagen.alt = "Producto 4";

        // Crear el contenedor de detalles
        let detalles = document.createElement("article");
        detalles.classList.add("item__detalle");

        // Crear el nombre del producto
        let nombreProducto = document.createElement("h2");
        nombreProducto.classList.add("detalle__nombre");
        nombreProducto.textContent = "Giratina V - Full Art";

        // Crear el precio del producto
        let precioProducto = document.createElement("p");
        precioProducto.classList.add("detalle__precio");
        precioProducto.textContent = "550 €";

        // Crear el botón de eliminar
        let botonEliminar = document.createElement("button");
        botonEliminar.classList.add("item__eliminar");
        botonEliminar.textContent = "Eliminar";

        // Insertar elementos en el <li>
        detalles.appendChild(nombreProducto);
        detalles.appendChild(precioProducto);
        nuevoItem.appendChild(imagen);
        nuevoItem.appendChild(detalles);
        nuevoItem.appendChild(botonEliminar);

        carritoLista.appendChild(nuevoItem);

    } else {
        console.error("No se encontró el contenedor de la lista del carrito o el resumen.");
    }
});
