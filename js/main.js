
/* =================================
   PUNTO GAMER - FUNCIONES GENERALES
================================= */

document.addEventListener("DOMContentLoaded", () => {
    actualizarContadores();
});

function actualizarContadores() {
    const carrito = obtenerDatos("carrito");
    const favoritos = obtenerDatos("favoritos");

    const totalCarrito = carrito.reduce(
        (total, producto) => total + producto.cantidad, 0
    );

    const contadorCarrito = document.querySelector("#contador-carrito");
    const contadorFavoritos = document.querySelector("#contador-favoritos");

    if (contadorCarrito) {
        contadorCarrito.textContent = totalCarrito;
    }

    if (contadorFavoritos) {
        contadorFavoritos.textContent = favoritos.length;
    }
}
