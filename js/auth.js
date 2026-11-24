
/* =================================
   PUNTO GAMER - USUARIOS
================================= */

function registrarUsuario(nombre, email, password) {
    const usuarios = obtenerDatos("usuarios");

    nombre = nombre.trim();
    email = email.trim().toLowerCase();

    if (nombre.length < 2) {
        return "Ingresá un nombre válido.";
    }

    if (password.length < 6) {
        return "La contraseña debe tener al menos 6 caracteres.";
    }

    const existe = usuarios.some(
        usuario => usuario.email.toLowerCase() === email
    );

    if (existe) {
        return "Este correo ya está registrado.";
    }

    usuarios.push({
        nombre,
        email,
        password
    });

    guardarDatos("usuarios", usuarios);

    return "Registro realizado correctamente.";
}

function iniciarSesion(email, password) {
    const usuarios = obtenerDatos("usuarios");

    email = email.trim().toLowerCase();

    const usuario = usuarios.find(
        usuario =>
            usuario.email.toLowerCase() === email &&
            usuario.password === password
    );

    if (!usuario) {
        return false;
    }

    guardarDatos("usuarioActivo", {
        nombre: usuario.nombre,
        email: usuario.email
    });

    return true;
}

document.addEventListener("DOMContentLoaded", () => {

    const formularioLogin = document.querySelector("#login-form");
    const formularioRegistro = document.querySelector("#register-form");

    formularioLogin.addEventListener("submit", event => {
        event.preventDefault();

        const email = document.querySelector("#login-email").value;
        const password = document.querySelector("#login-password").value;
        const mensaje = document.querySelector("#login-message");

        const correcto = iniciarSesion(email, password);

        if (correcto) {
            mensaje.textContent = "¡Bienvenido a Punto Gamer!";
            mensaje.className = "form-message success";

            setTimeout(() => {
                window.location.href = "../index.html";
            }, 1000);

        } else {
            mensaje.textContent = "Correo o contraseña incorrectos.";
            mensaje.className = "form-message error";
        }
    });

    formularioRegistro.addEventListener("submit", event => {
        event.preventDefault();

        const nombre = document.querySelector("#register-name").value;
        const email = document.querySelector("#register-email").value;
        const password = document.querySelector("#register-password").value;
        const mensaje = document.querySelector("#register-message");

        const resultado = registrarUsuario(nombre, email, password);

        mensaje.textContent = resultado;

        if (resultado === "Registro realizado correctamente.") {
            mensaje.className = "form-message success";
            formularioRegistro.reset();

        } else {
            mensaje.className = "form-message error";
        }
    });

});
