# Modificar estilos de los títulos de la tienda

En este archivo JavaScript se encuentra el código necesario para modificar los estilos de los títulos de la tienda.

[CambiarColores.js](js/CambiarColores.js)

## Explicación del código

1. Espera a que el contenido de la página esté cargado.
    
    
    document.addEventListener("DOMContentLoaded", () => {


2. Selecciona todos los títulos de la tienda.


    let titulosTienda = document.querySelectorAll(".tienda__h1"); // Selecciona todos los títulos de la tienda


3. Recorre cada título y aplica los nuevos estilos.

    
        titulosTienda.forEach((titulo) => {
        titulo.style.fontFamily = "'Courier New', Courier, monospace"; // Cambia la fuente
        titulo.style.color = "#FF5733"; // Cambia el color a un tono anaranjado
    });


4. Imprime un mensaje en la consola indicando que los estilos han sido actualizados.


        console.log("Estilos de los títulos actualizados.");

## ¿Por qué se ha tomado esta decisión?

Los requisitos del proyecto exigen la modificación de los estilos de ciertos elementos de la página mediante JavaScript.
En este caso, se ha decidido cambiar la fuente y el color de los títulos de la tienda
para mejorar la apariencia visual y hacerlos más llamativos en la interfaz de usuario.


