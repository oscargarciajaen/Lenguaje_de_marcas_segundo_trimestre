# **Actualizar noticias en la página**

En este archivo JavaScript se encuentra el código necesario para modificar dinámicamente las noticias de la página web.

[ActualizarNoticias.js](ActualizarNoticias.js)

## Explicación del código

1. Espera a que el contenido de la página esté cargado.


    document.addEventListener("DOMContentLoaded", () => {


2. Selecciona todas las noticias de la página.


    // Seleccionamos todas las noticias
    let noticias = document.querySelectorAll(".noticias__articulo");


3. Define los nuevos datos para las noticias.


        // Datos nuevos de las noticias
    let nuevasNoticias = [
        {
            imagen: "./assets/NuevaExpansion.png",
            titulo: "Nueva Expansión TCG",
            texto: "25 de febrero de 2025 <br><br> Se anuncia una nueva expansión de cartas Pokémon con temática de Sinnoh."
        },
        {
            imagen: "./assets/Mundial2025.jpg",
            titulo: "Campeonato Mundial 2025",
            texto: "1 de marzo de 2025 <br><br> El torneo oficial de TCG se celebrará en Tokio con premios millonarios."
        },
        {
            imagen: "./assets/CharizardShiny.avif",
            titulo: "Carta de Charizard sube de precio",
            texto: "10 de marzo de 2025 <br><br> Charizard Shiny de Evoluciones se vende por más de 10,000€ en subastas."
        }
    ];


4. Modifica cada noticia con los nuevos datos.


    // Modificar cada noticia
    noticias.forEach((noticia, index) => {
        let imagen = noticia.querySelector(".noticias__imagen"); // Imagen de la noticia
        let titulo = noticia.querySelector(".noticias__titulo"); // Título de la noticia
        let texto = noticia.querySelector(".noticias__informacion"); // Texto de la noticia

        if (imagen && titulo && texto) {
            // Cambiar el contenido con los nuevos datos
            imagen.src = nuevasNoticias[index].imagen;
            imagen.alt = nuevasNoticias[index].titulo;
            titulo.textContent = nuevasNoticias[index].titulo;
            texto.innerHTML = nuevasNoticias[index].texto;
        } else {
            console.error(`No se encontraron elementos dentro de la noticia #${index + 1}`);
        }
    });


5. Muestra un mensaje en la consola cuando la actualización se complete.


    console.log("Noticias actualizadas correctamente.");


## ¿Por qué se ha tomado esta decisión?

Los requisitos del proyecto exigen la modificación de contenido de una página web.
En este caso, se han reemplazado las noticias existentes por algunas con información actualizada sobre eventos relevantes de Pokémon TCG,
lo que permite que la página muestre información más reciente sin necesidad de modificar el código HTML manualmente.