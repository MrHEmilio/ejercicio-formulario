// let encabezadoH2 = document.getElementById("encabezado-cambiante");
// let btnGuardar = document.getElementById("btn-guardar");
// let btnEliminar = document.getElementById("btn-eliminar");

// document.addEventListener("DOMContentLoaded", function(event){
//     const form = document.querySelector("form");
//     const inputName = document.getElementById ("user-name");

// });

// btnGuardar.addEventListener("click", function(event){
//     event.preventDefault();
//     localStorage.setItem("user-name", inputName.value);
//     alert("Nombre guardado en localStorage");

// });

// btnEliminar.addEventListener("click", function(event){
//     event.preventDefault();
//     localStorage.removeItem("user-name");
//     alert("Nombre eliminado de localStorage");
// })



// if (localStorage.getItem("user-name") != null){
//     let userName = localStorage.getItem("user-name");
//     encabezadoH2.innerHTML = `Hola, ${userName}. Bienvenido de nuevo!`;
//     console.log(userName);
// }  else {
//     encabezadoH2.innerHTML = "Por favor, ve a la página de incio e ingresa tu nombre";
//     console.log("No hay nombre de usuario en localStorage");
// }

document.addEventListener("DOMContentLoaded", function () {
    const encabezadoH2 = document.getElementById("encabezado-cambiante");
    const inputName = document.getElementById("user-name");
    const btnGuardar = document.getElementById("btn-guardar");
    const btnEliminar = document.getElementById("btn-eliminar");
    if (btnGuardar) {
        btnGuardar.addEventListener("click", function (event) {
            event.preventDefault();
            localStorage.setItem("user-name", inputName.value);
            alert("Nombre guardado en localStorage");
        });
    }
    if (btnEliminar) {
        btnEliminar.addEventListener("click", function (event) {
            event.preventDefault();
            localStorage.removeItem("user-name");
            alert("Nombre eliminado de localStorage");
            encabezadoH2.innerHTML = "Por favor, ve a la página de inicio e ingresa tu nombre";
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
});