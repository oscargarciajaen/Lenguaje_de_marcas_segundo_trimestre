# Agregar un elemento al carrito

En este archivo JavaScript se encuentra el código necesario para añadir un elemento al carrito.

[agregarCarrito.js](../js/agregarCarrito.js)

## Explicación del código

1. Espera a que el contenido de la página esté cargado.


    document.addEventListener("DOMContentLoaded", () => {


2. Crea dos variables que almacenan los contenedores de la lista del carrito y el resumen del carrito.
    

    let carritoLista = document.querySelector(".carrito__lista"); // Contenedor de productos
    let resumenCarrito = document.querySelector(".carrito__resumen"); // Resumen del carrito


3. Comprueba si ambos elementos existen.


    if (carritoLista && resumenCarrito) { // Verificamos que ambos elementos existan


4. Si los elementos existen, crea un nuevo producto con su imagen, nombre, precio y botón de eliminar.


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

5. Inserta el nuevo producto en la lista del carrito.


    // Insertar elementos en el <li>
    detalles.appendChild(nombreProducto);
    detalles.appendChild(precioProducto);
    nuevoItem.appendChild(imagen);
    nuevoItem.appendChild(detalles);
    nuevoItem.appendChild(botonEliminar);
    carritoLista.appendChild(nuevoItem);


6. El producto se ha añadido con éxito al carrito y si no se encuentran los elementos, se muestra un mensaje de error en la consola.


    else {
        console.error("No se encontró el contenedor de la lista del carrito o el resumen.");
    }


## ¿Por qué se ha tomado esta decisión?

Los requisitos del proyecto exigen la creación de elementos en una página web mediante JavaScript.
La decisión ha sido agregar al carrito un producto de ejemplo, con su imagen, nombre, precio y botón de eliminar,
ya que es una función muy común en las tiendas online.







