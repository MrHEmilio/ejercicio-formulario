    const encabezadoH2 = document.getElementById("encabezado-cambiante");
    const inputName = document.getElementById("user-name");
    const btnGuardar = document.getElementById("btn-guardar");
    const btnEliminar = document.getElementById("btn-eliminar");
    if (btnGuardar) {
        btnGuardar.addEventListener("click", function (event) {
            event.preventDefault();
            localStorage.setItem("user-name", inputName.value);
            alert("Nombre guardado correctamente");
            console.log(`Nombre guardado: ${inputName.value}`);
            });
    }
    if (btnEliminar) {
        
        btnEliminar.addEventListener("click", function (event) {
            event.preventDefault();
            localStorage.removeItem("user-name");
            alert("Nombre eliminado correctamente");
            console.log(`Sin nombre registrado`);
            encabezadoH2.innerHTML = "Oops! Ya no te reconozco";
        });
    }
     if (encabezadoH2) {
         const userName = localStorage.getItem("user-name");
         if (userName) {
             encabezadoH2.innerHTML = `Hola, ${userName}. Bienvenido de nuevo!`;
         } else {
             encabezadoH2.innerHTML = "Por favor, ve a la página de inicio e ingresa tu nombre";
         }
}