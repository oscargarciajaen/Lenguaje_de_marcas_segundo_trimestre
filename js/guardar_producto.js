const boton = document.querySelectorAll('.producto__boton');
const articulo = document.querySelectorAll('.producto');
const imagen = document.querySelectorAll('.producto__imagen');
const nombre = document.querySelectorAll('.producto__nombre');
const precio = document.querySelectorAll('.producto__precio');

// Guardar la información en el localStorage
boton.forEach((btn, index) => {
    btn.addEventListener('click', function(event) {
        const producto = {
            nombre: nombre[index].textContent,
            imagen: imagen[index].src,
            precio: precio[index].textContent
        };

        let carrito = JSON.parse(localStorage.getItem("productosCarrito")) || [];

        carrito.push(producto);

        localStorage.setItem("productosCarrito", JSON.stringify(carrito));
    });
});

let carrito = JSON.parse(localStorage.getItem("productosCarrito")) || [];

// Acceder al contenedor del carrito
let carritoLista = document.querySelector(".carrito__lista");

// Mostrar los productos en el carrito
carrito.forEach(producto => {
    let nuevoItem = document.createElement("li");
    nuevoItem.classList.add("carrito__item");

    let imagenCarrito = document.createElement("img");
    imagenCarrito.classList.add("item__imagen");
    imagenCarrito.src = producto.imagen;
    imagenCarrito.alt = producto.nombre;

    let detalles = document.createElement("article");
    detalles.classList.add("item__detalle");

    let nombreProducto = document.createElement("h2");
    nombreProducto.classList.add("detalle__nombre");
    nombreProducto.textContent = producto.nombre;

    let precioProducto = document.createElement("p");
    precioProducto.classList.add("detalle__precio");
    precioProducto.textContent = producto.precio;

    let botonEliminar = document.createElement("button");
    botonEliminar.classList.add("item__eliminar");
    botonEliminar.textContent = "Eliminar";

    detalles.appendChild(nombreProducto);
    detalles.appendChild(precioProducto);
    nuevoItem.appendChild(imagenCarrito);
    nuevoItem.appendChild(detalles);
    nuevoItem.appendChild(botonEliminar);

    carritoLista.appendChild(nuevoItem);
});
