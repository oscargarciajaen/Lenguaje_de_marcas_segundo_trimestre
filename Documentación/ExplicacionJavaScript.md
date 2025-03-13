## **Identificación y Clasificación de los Lenguajes de Script de Cliente**

Los **lenguajes de script de cliente** son aquellos que se ejecutan en el navegador del usuario y permiten la interacción dinámica con la página web sin necesidad de comunicación constante con el servidor. Se pueden clasificar en diferentes categorías según su funcionalidad y uso.

### **1. Lenguajes de Marcado y Estilos (Complementarios)**
- **HTML (HyperText Markup Language)**: Define la estructura y el contenido de las páginas web.
- **CSS (Cascading Style Sheets)**: Permite el diseño y la presentación visual de los elementos HTML.

### **2. Lenguajes de Programación de Cliente**
- **JavaScript**: Es el lenguaje de scripting principal para la web. Se ejecuta en el navegador y permite manipular el DOM (Document Object Model), manejar eventos, realizar validaciones, interactuar con APIs y crear experiencias dinámicas.
- **TypeScript**: Es un superconjunto de JavaScript que añade tipado estático y características avanzadas, facilitando el mantenimiento y escalabilidad del código.
- **Dart**: Desarrollado por Google, se usa principalmente con el framework Flutter para aplicaciones web y móviles.
- **WebAssembly (Wasm)**: No es un lenguaje de scripting en sí, sino un formato binario que permite ejecutar código compilado de otros lenguajes como C, C++ y Rust en el navegador con alto rendimiento.

### **3. Lenguajes de Scripting Especializados**
- **VBScript**: Un lenguaje de scripting de Microsoft que fue usado en Internet Explorer, pero ya no es compatible en navegadores modernos.
- **ActionScript**: Lenguaje usado en Adobe Flash, ahora obsoleto.

## **Diferencias, Usos y Estándares de JavaScript en la Web**

JavaScript se distingue de otros lenguajes de cliente por su versatilidad y su integración con los navegadores. Algunas diferencias clave incluyen:

- **Ejecución en el Cliente**: Se ejecuta directamente en el navegador, reduciendo la carga en el servidor.
- **Manipulación del DOM**: Permite modificar la estructura y estilo de una página en tiempo real.
- **Interactividad**: Se usa para manejar eventos (clics, teclas, desplazamiento) y mejorar la experiencia del usuario.
- **Uso con APIs**: Puede interactuar con APIs externas como `Fetch API`, `WebSockets`, `Geolocation`, `LocalStorage`, etc.
- **Multiplataforma**: Funciona en cualquier navegador sin necesidad de instalación adicional.
- **Asincronía**: Soporta asincronía con `setTimeout`, `setInterval`, `Promises` y `async/await`.

Los estándares de JavaScript están definidos por ECMAScript, que es el conjunto de especificaciones que regulan el lenguaje.

## **Evolución de JavaScript y Relación con ECMAScript (ES6+)**

JavaScript fue creado en 1995 por **Brendan Eich** y rápidamente se convirtió en el estándar para la web. Sin embargo, para garantizar su compatibilidad y evolución, se estableció **ECMAScript (ES)** como su especificación oficial.

### **Principales versiones de ECMAScript**

- **ES5 (2009)**: Introdujo `JSON`, `strict mode`, `Object.defineProperty`, y mejoras en funciones de arrays (`map`, `filter`, `reduce`).
- **ES6 / ES2015**: Marcó una evolución importante con nuevas características como:
    - `let` y `const` (variables con alcance de bloque).
    - Arrow functions (`=>`).
    - Clases (`class`).
    - Desestructuración de objetos y arrays.
    - Template literals.
    - Promesas (`Promise`).
    - `import` y `export` para módulos.
- **ES7 - ES13 (2016 - 2022)**: Han seguido añadiendo características como:
    - `async/await` para asincronía (ES8).
    - `Optional chaining` (`?.`) para evitar errores en objetos anidados (ES11).
    - `Nullish coalescing` (`??`) para manejar valores nulos (ES11).
    - Métodos como `Array.prototype.includes` y `Object.entries`.

JavaScript sigue evolucionando bajo el estándar ECMAScript, con actualizaciones anuales que introducen mejoras en rendimiento, sintaxis y nuevas APIs.
