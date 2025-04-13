// Esperamos a que el DOM cargue
window.addEventListener('DOMContentLoaded', () => {
    const galeriaInteractiva = document.querySelector('.GaleriaInteractiva');

    // Centramos la galería
    galeriaInteractiva.style.display = 'flex';
    galeriaInteractiva.style.flexDirection = 'column';
    galeriaInteractiva.style.alignItems = 'center';
    galeriaInteractiva.style.margin = '2rem auto';
    galeriaInteractiva.style.maxWidth = '80%';

    // Creamos y añadimos el formulario para subir imágenes
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

    const inputImagen = form.querySelector('.galeria__input');

    // Contenedor de las imágenes añadidas
    const contenedorImagenes = document.createElement('div');
    contenedorImagenes.classList.add('tienda__contenedor'); // Reutilizamos estilos de tienda
    contenedorImagenes.style.justifyContent = 'center'; // Centramos contenido
    contenedorImagenes.style.width = '100%';
    galeriaInteractiva.appendChild(contenedorImagenes);

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

            // Limpiamos el input para permitir subir la misma imagen si se desea
            inputImagen.value = '';
        } else {
            alert('Por favor selecciona una imagen.');
        }
    });

    function agregarImagen(src) {
        const producto = document.createElement('div');
        producto.classList.add('producto');
        producto.style.maxWidth = '300px'; // Limita el ancho del contenedor de la imagen
        producto.style.margin = '1rem';

        producto.innerHTML = `
            <img src="${src}" alt="Imagen de la galería" class="producto__imagen" style="max-width: 100%; height: auto; display: block; margin: 0 auto 1rem;">
            <button class="producto__boton">Eliminar</button>
        `;

        // Botón eliminar
        const botonEliminar = producto.querySelector('button');
        botonEliminar.addEventListener('click', () => {
            producto.remove();
        });

        contenedorImagenes.appendChild(producto);
    }
});
