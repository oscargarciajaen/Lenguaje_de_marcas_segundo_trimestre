# Filtro dinámico de productos por categoría en la tienda

Este archivo JavaScript permite filtrar los productos de la tienda utilizando checkboxes, separando dinámicamente por las palabras clave del nombre del producto.  
Las categorías definidas son:
- **ETB** (si el nombre contiene la palabra "ETB")
- **Battle Box** (si el nombre contiene "Battle Box")
- **Cartas** (todos los demás productos)

[filtros.js](../js/filtros.js)

---

## Explicación del código

### 1. Esperamos a que el contenido del DOM esté completamente cargado

Utilizamos `DOMContentLoaded` para asegurarnos de que todos los elementos HTML estén disponibles antes de ejecutar el script.

```javascript
document.addEventListener('DOMContentLoaded', () => {
```

### 2. Seleccionamos el formulario del filtro para darle estilos desde JavaScript

Centramos y separamos visualmente el formulario de los filtros dinámicamente.

```javascript
const formularioFiltro = document.getElementById('formulario-filtro');

formularioFiltro.style.display = 'flex';
formularioFiltro.style.justifyContent = 'center';
formularioFiltro.style.flexWrap = 'wrap';
formularioFiltro.style.gap = '1.5rem';
formularioFiltro.style.margin = '2rem 0';

const sectionFiltro = document.querySelector('.filtro');
sectionFiltro.style.marginBottom = '2rem';
```

### 3. Seleccionamos los checkboxes y los productos de la tienda

Recogemos todos los checkboxes del formulario y todos los productos listados en la tienda.

```javascript
const checkboxes = document.querySelectorAll('#formulario-filtro input[type="checkbox"]');
const productos = document.querySelectorAll('.producto');
```

### 4. Añadimos un evento de cambio a cada checkbox

Cuando el usuario selecciona o deselecciona un filtro, ejecutamos la función filtrarProductos() para actualizar la lista de productos visibles.

```javascript
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', filtrarProductos);
});
```

### 5. Definimos la función filtrarProductos()

Esta función es la encargada de:

- Leer qué checkboxes están seleccionados.

- Recorrer todos los productos.

- Determinar a qué categoría pertenece cada producto leyendo el nombre del producto.

- Mostrar u ocultar los productos dependiendo de la selección.

```javascript
function filtrarProductos() {
    const categoriasSeleccionadas = Array.from(checkboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);

    productos.forEach(producto => {
        const nombreProducto = producto.querySelector('.producto__nombre').textContent.toLowerCase();

        let categoriaProducto = 'cartas'; // Por defecto

        if (nombreProducto.includes('etb')) {
            categoriaProducto = 'etb';
        } else if (nombreProducto.includes('battle box')) {
            categoriaProducto = 'battle_box';
        }

        if (categoriasSeleccionadas.length === 0 || categoriasSeleccionadas.includes(categoriaProducto)) {
            producto.style.display = 'block';
        } else {
            producto.style.display = 'none';
        }
    });
}
```