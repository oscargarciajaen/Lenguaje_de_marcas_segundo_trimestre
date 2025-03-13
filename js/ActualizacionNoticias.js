/*document.addEventListener("DOMContentLoaded", () => {
    // Seleccionamos todas las noticias
    let noticias = document.querySelectorAll(".noticias__articulo");

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

    console.log("Noticias actualizadas correctamente.");
});
