# Añadir un elemento dinámicamente al carrito con almacenamiento local

Este archivo JavaScript permite añadir productos al carrito de la tienda y conservarlos usando **localStorage**, de modo que aunque el usuario recargue la página, los productos siguen apareciendo en el carrito.

[AñadirAlCarrito.js](../js/A%C3%B1adirAlCarrito.js)

---

## Explicación del código

### 1. Seleccionamos todos los elementos necesarios de la tienda

Primero seleccionamos:
- Los botones de "Añadir al carrito".
- Los artículos de la tienda.
- Las imágenes, nombres y precios de cada producto.

```javascript
const boton = document.querySelectorAll('.producto__boton');
const articulo = document.querySelectorAll('.producto');
const imagen = document.querySelectorAll('.producto__imagen');
const nombre = document.querySelectorAll('.producto__nombre');
const precio = document.querySelectorAll('.producto__precio');
```

### 2. Añadimos evento de click a cada botón para guardar la información del producto en localStorage

Recorremos todos los botones y añadimos un "escuchador de eventos" (eventListener) que guarda la información de cada producto seleccionado.

```javascript
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
```

De esta manera:

Cada vez que haces click en "Añadir al carrito", se guarda un objeto con la información del producto.

Se guarda en localStorage, por lo que si recargas la página, los datos no se pierden.

### 3. Recuperamos los productos guardados en localStorage

Cuando se carga la página, consultamos si hay productos guardados en el carrito.

```javascript
let carrito = JSON.parse(localStorage.getItem("productosCarrito")) || [];
```

### 4. Seleccionamos el contenedor del carrito en el DOM

Esto es para poder insertar los productos dentro del HTML del carrito:

```javascript
let carritoLista = document.querySelector(".carrito__lista");
```

### 5. Mostramos los productos almacenados en el carrito

Recorremos cada producto guardado y creamos dinámicamente los elementos para mostrarlos dentro del carrito:

```javascript
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
```

Así, cuando el usuario vuelve al carrito, ve todos los productos que ya había seleccionado anteriormente, gracias a que los cargamos desde el almacenamiento local.
