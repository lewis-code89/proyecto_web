document.getElementById("form_index").addEventListener("submit", function(event) {
    event.preventDefault();
    let dni = document.getElementById("dni").value;
    let cui = document.getElementById("cui").value;
    let fecha = document.getElementById("fecha").value;
    if (dni.length !== 8 || isNaN(dni)) {
        alert("El DNI debe tener 8 números");
        return;
    }
    if (cui !== "" && isNaN(cui)) {
        alert("El CUI debe ser un número");
        return;
    }
    if (fecha === "") {
        alert("Debes ingresar tu fecha de nacimiento");
        return;
    }
    if (dni === "76359175") {
        window.open("pw_2.html", "_blank");
    } 
    else if (dni === "71515150") {
        window.open("pw_3.html", "_blank");
    } 
    else if (dni==="71167132") {
        window.open("pw_4.html", "_blank");
    }
    else {
        window.location.href = "no_encontrado.html";
    }
});