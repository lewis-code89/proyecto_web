// Selecciona el formulario por su ID ("miFormulario")
// y escucha cuando el usuario hace clic en "submit" (enviar)
document.getElementById("form_index").addEventListener("submit", function(event) {
// Evita que el formulario se envíe de forma normal
    // (es decir, evita que la página se recargue)
    event.preventDefault(); // evita recarga
    // =========================
    // OBTENER LOS DATOS
    // =========================
    // Obtener datos
    // Obtiene el valor escrito en el input con id="dni"
    let dni = document.getElementById("dni").value;
    // Obtiene el valor del CUI
    let cui = document.getElementById("cui").value;
    // Obtiene la fecha de nacimiento
    let fecha = document.getElementById("fecha").value;
    // =========================
    // VALIDACIONES
    // =========================
    // Validación DNI
    // Verifica:
    // - que el DNI tenga exactamente 8 caracteres
    // - y que sea un número (isNaN = "no es un número")
    if (dni.length !== 8 || isNaN(dni)) {
        alert("El DNI debe tener 8 números"); // muestra mensaje
        return; // detiene la ejecución del código
    }

    // Validación CUI
    // Verifica el CUI solo si el usuario escribió algo
    // - si no está vacío ("")
    // - y si no es un número → error
    if (cui !== "" && isNaN(cui)) {
        alert("El CUI debe ser un número");
        return;
    }

    // Validación fecha
    // Verifica que la fecha no esté vacía
    if (fecha === "") {
        alert("Debes ingresar tu fecha de nacimiento");
        return;
    }

    // Redirección
    // =========================
    // REDIRECCIÓN SEGÚN DNI
    // =========================
    if (dni === "76359175") {
        // Redirige a la página
        window.location.href = "pweb.html";
        // Redirige a la página
    } else if (dni === "71515150" || dni==="71167132") {
        window.location.href = "web2.html";
    } else {
        // Si no coincide con ninguno, lo manda a otra página
        window.location.href = "no_encontrado.html";
    }
});// fin del evento submit