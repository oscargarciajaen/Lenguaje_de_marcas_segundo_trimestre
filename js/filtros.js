document.addEventListener('DOMContentLoaded', () => {
    // Seleccionamos el formulario del filtro
    const formularioFiltro = document.getElementById('formulario-filtro');

    // Centramos y damos separación desde JS
    formularioFiltro.style.display = 'flex';
    formularioFiltro.style.justifyContent = 'center';
    formularioFiltro.style.flexWrap = 'wrap';
    formularioFiltro.style.gap = '1.5rem';
    formularioFiltro.style.margin = '2rem 0';

    const sectionFiltro = document.querySelector('.filtro');
    sectionFiltro.style.marginBottom = '2rem';

    // El resto de tu código de filtro...
    const checkboxes = document.querySelectorAll('#formulario-filtro input[type="checkbox"]');
    const productos = document.querySelectorAll('.producto');

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', filtrarProductos);
    });

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
});