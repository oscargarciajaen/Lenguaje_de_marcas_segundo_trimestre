# Galería Interactiva de Imágenes

Este archivo JavaScript permite añadir imágenes dinámicamente a una galería interactiva en la página.  
Los usuarios pueden subir imágenes desde su dispositivo y verlas como "productos" dentro de una galería que reutiliza los estilos de la tienda.

[galeriaInteractiva.js](../js/galeriaInteractiva.js)

---

## Explicación del código

### 1. Esperamos que el DOM cargue completamente

Usamos `DOMContentLoaded` para asegurarnos de que todos los elementos del HTML estén disponibles antes de que se ejecute el script.

```javascript
window.addEventListener('DOMContentLoaded', () => {
```

### 2. Seleccionamos la sección de la galería interactiva

Seleccionamos la sección donde vamos a construir la galería y aplicamos estilos básicos para centrarla visualmente.

```javascript
const galeriaInteractiva = document.querySelector('.GaleriaInteractiva');

galeriaInteractiva.style.display = 'flex';
galeriaInteractiva.style.flexDirection = 'column';
galeriaInteractiva.style.alignItems = 'center';
galeriaInteractiva.style.margin = '2rem auto';
galeriaInteractiva.style.maxWidth = '80%';
```

### 3. Creamos y añadimos un formulario para subir imágenes

Generamos un formulario dinámico que incluye:

- Un input para seleccionar la imagen.

- Un botón para subirla.

```javascript
const form = document.createElement('form');
form.style.display = 'flex';
form.style.flexDirection = 'column';
form.style.alignItems = 'center';
form.style.marginBottom = '2rem';

form.innerHTML = `
    <input type="file" accept="image/*" class="galeria__input" style="margin-bottom: 1rem;">
    <button type="submit" class="producto__boton">Agregar Imagen</button>
`;

galeriaInteractiva.appendChild(form);
```

### 4. Creamos el contenedor para las imágenes añadidas

Creamos un contenedor que reutiliza los estilos de la tienda para mostrar las imágenes subidas.

```javascript
const contenedorImagenes = document.createElement('div');
contenedorImagenes.classList.add('tienda__contenedor'); // Reutilizamos estilos de la tienda
contenedorImagenes.style.justifyContent = 'center';
contenedorImagenes.style.width = '100%';
galeriaInteractiva.appendChild(contenedorImagenes);
```

### 5. Gestionamos el envío del formulario para subir imágenes

Escuchamos el evento de envío del formulario, procesamos la imagen seleccionada y la mostramos en la galería.

```javascript
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const archivo = inputImagen.files[0];
    if (archivo) {
        const reader = new FileReader();
        reader.onload = function(event) {
            const imagenSrc = event.target.result;
            agregarImagen(imagenSrc);
        };
        reader.readAsDataURL(archivo);

        inputImagen.value = ''; // Limpiamos el input
    } else {
        alert('Por favor selecciona una imagen.');
    }
});
```

### 6. Función para agregar imágenes a la galería
   
Creamos dinámicamente una "tarjeta" de producto por cada imagen añadida:

- Imagen subida por el usuario.

- Botón para eliminar la imagen.

```javascript
function agregarImagen(src) {
    const producto = document.createElement('div');
    producto.classList.add('producto');
    producto.style.maxWidth = '300px';
    producto.style.margin = '1rem';

    producto.innerHTML = `
        <img src="${src}" alt="Imagen de la galería" class="producto__imagen" style="max-width: 100%; height: auto; display: block; margin: 0 auto 1rem;">
        <button class="producto__boton">Eliminar</button>
    `;

    const botonEliminar = producto.querySelector('button');
    botonEliminar.addEventListener('click', () => {
        producto.remove();
    });

    contenedorImagenes.appendChild(producto);
}
```
