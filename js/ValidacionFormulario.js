document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contacto__formulario");
    const inputs = form.querySelectorAll("input[type='text'], input[type='email'], input[type='tel'], textarea");
    const radios = form.querySelectorAll("input[type='radio']");
    const checkboxes = form.querySelectorAll("input[type='checkbox']");

    // Validación dinámica para inputs y textarea
    inputs.forEach(input => {
        input.addEventListener("blur", function () {
            validarCampo(input);
        });
    });

    // Validación dinámica para radios
    radios.forEach(radio => {
        radio.addEventListener("change", function () {
            validarRadios();
        });
    });

    // Validación dinámica para checkboxes
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", function () {
            validarCheckboxes();
        });
    });

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

    function mostrarError(element, message) {
        const error = document.createElement("span");
        error.className = "error-message";
        error.textContent = message;

        // Estilos en línea para forzar que esté debajo y centrado
        error.style.color = "red";
        error.style.display = "block";
        error.style.marginTop = "5px";
        error.style.fontSize = "0.9em";
        error.style.textAlign = "center";
        error.style.width = "100%";

        element.insertAdjacentElement('afterend', error);
    }

    function eliminarError(element) {
        const error = element.parentNode.querySelector(".error-message");
        if (error) {
            error.remove();
        }
    }
});
