# Validación dinámica de formulario de contacto

Este archivo JavaScript gestiona la validación dinámica del formulario de contacto.  
Valida de manera interactiva los siguientes campos:
- **Inputs de texto** (nombre, email, teléfono)
- **Textarea** (mensaje)
- **Radios** (sexo)
- **Checkboxes** (incidencias)

[validacionFormulario.js](../js/validacionFormulario.js)

---

## Explicación del código

### 1. Esperamos a que el contenido del DOM esté completamente cargado

Utilizamos `DOMContentLoaded` para asegurarnos de que todos los elementos del formulario estén disponibles antes de ejecutar la validación.

```javascript
document.addEventListener("DOMContentLoaded", function () {
```

### 2. Seleccionamos los elementos del formulario que vamos a validar
   
Identificamos:

- El formulario.

- Los inputs de tipo texto, email, teléfono y textarea.

- Los radio buttons.

- Los checkboxes.

```javascript
const form = document.querySelector(".contacto__formulario");
const inputs = form.querySelectorAll("input[type='text'], input[type='email'], input[type='tel'], textarea");
const radios = form.querySelectorAll("input[type='radio']");
const checkboxes = form.querySelectorAll("input[type='checkbox']");
```

### 3. Configuramos la validación dinámica para inputs y textarea
   
Escuchamos el evento blur para validar cuando el usuario salga de cada campo de texto o textarea.

```javascript
inputs.forEach(input => {
    input.addEventListener("blur", function () {
        validarCampo(input);
    });
});
```

### 4. Configuramos la validación dinámica para los radio buttons

Escuchamos el evento change para validar la selección de los radio buttons cuando el usuario selecciona una opción.

```javascript
radios.forEach(radio => {
    radio.addEventListener("change", function () {
        validarRadios();
    });
});
```

### 5. Configuramos la validación dinámica para los checkboxes

Validamos dinámicamente que el usuario seleccione al menos una incidencia.

```javascript
checkboxes.forEach(checkbox => {
    checkbox.addEventListener("change", function () {
        validarCheckboxes();
    });
});
```

### 6. Función para validar campos de texto y textarea
   
Revisamos si:

- El campo está vacío.

- El email tiene un formato válido.

- El teléfono sigue el formato requerido.

- El mensaje tiene al menos 100 caracteres.

```javascript
function validarCampo(input) {
    const value = input.value.trim();
    let errorMessage = "";

    if (!value) {
        errorMessage = "Este campo es obligatorio.";
    } else {
        if (input.type === "email" && !/^\S+@\S+\.\S+$/.test(value)) {
            errorMessage = "Introduce un email válido.";
        }

        if (input.type === "tel" && !/^\+\d{1,3} \d{9}$/.test(value)) {
            errorMessage = "Formato de teléfono incorrecto. Usa +34 XXXXXXXXX.";
        }

        if (input.tagName.toLowerCase() === "textarea" && value.length < 100) {
            errorMessage = "El mensaje debe tener al menos 100 caracteres.";
        }
    }

    eliminarError(input);

    if (errorMessage) {
        mostrarError(input, errorMessage);
    }
}
```

### 7. Función para validar los radio buttons
   
Nos aseguramos que al menos un radio button esté seleccionado.

```javascript
function validarRadios() {
    const radioGroup = document.getElementsByName("sexo");
    const container = radioGroup[radioGroup.length - 1].parentNode;
    let isChecked = false;

    radioGroup.forEach(radio => {
        if (radio.checked) {
            isChecked = true;
        }
    });

    eliminarError(container);

    if (!isChecked) {
        mostrarError(container, "Selecciona una opción de sexo.");
    }
}
```

### 8. Función para validar los checkboxes

Revisamos que el usuario seleccione al menos una incidencia.

```javascript
function validarCheckboxes() {
    const container = checkboxes[checkboxes.length - 1].parentNode;
    let isChecked = false;

    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            isChecked = true;
        }
    });

    eliminarError(container);

    if (!isChecked) {
        mostrarError(container, "Selecciona al menos una incidencia.");
    }
}
```

### 9. Función para mostrar mensajes de error

Crea dinámicamente un span debajo del campo con el mensaje de error correspondiente.

```javascript
function mostrarError(element, message) {
    const error = document.createElement("span");
    error.className = "error-message";
    error.textContent = message;

    error.style.color = "red";
    error.style.display = "block";
    error.style.marginTop = "5px";
    error.style.fontSize = "0.9em";
    error.style.textAlign = "center";
    error.style.width = "100%";

    element.insertAdjacentElement('afterend', error);
}
```

### 10. Función para eliminar mensajes de error

Si un campo que tenía error se corrige, se elimina automáticamente el mensaje.

```javascript
function eliminarError(element) {
    const error = element.parentNode.querySelector(".error-message");
    if (error) {
        error.remove();
    }
}
```