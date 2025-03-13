# Eliminar sección

En este archivo JavaScript se encuentra el código necesario para eliminar una sección de la página web.

[EliminarSeccion.js](js/EliminarSeccion.js)

## Explicación del código

1. Espera a que el contenido de la página esté cargada.


    (function() {
        document.addEventListener("DOMContentLoaded", function() {


2. Crea una variable que almacene la sección que se quiere eliminar.


    let prismaticsSection = document.querySelector(".tienda__Prismatics-evolutions");


3. Comprueba si la sección existe.

        if (prismaticsSection) {


4. Si la sección existe, la elimina.


            prismaticsSection.remove();


## ¿Por qué se ha tomado esta decisión?

Los requisitos del proyecto exigen la eliminación de elementos de una página web. 
En este caso, se ha decidido eliminar la sección de Prismatics Evolutions de la tienda,
ya que es un apartado bastante grande en la web y nos permite eliminar una gran cantidad de elementos de una sola vez.





