
/* =================================
   PUNTO GAMER - FAVORITOS
================================= */

// AGREGAR A FAVORITOS

function agregarAFavoritos(id) {

    const favoritos = obtenerDatos("favoritos");
    const numero = Number(id);

    const existe = productos.some(p => p.id === numero);

    if (!existe) return;

    if (favoritos.includes(numero)) {
        alert("Este juego ya está en favoritos.");
        return;
    }

    favoritos.push(numero);

    guardarDatos("favoritos", favoritos);

    actualizarContadores();

    alert("Juego agregado a favoritos.");
}


// QUITAR DE FAVORITOS

function eliminarDeFavoritos(id) {

    const favoritos = obtenerDatos("favoritos");

    const nuevos = favoritos.filter(
        p => p !== Number(id)
    );

    guardarDatos("favoritos", nuevos);

    mostrarFavoritos();

    actualizarContadores();
}


// COMPROBAR SI ES FAVORITO

function esFavorito(id) {

    const favoritos = obtenerDatos("favoritos");

    return favoritos.includes(Number(id));
}


// ALTERNAR FAVORITO

function alternarFavorito(id) {

    if (esFavorito(id)) {
        eliminarDeFavoritos(id);
    } else {
        agregarAFavoritos(id);
    }
}


// MOSTRAR FAVORITOS

function mostrarFavoritos() {

    const contenedor = document.querySelector(".favorites.product-list");

    if (!contenedor) return;

    const favoritos = obtenerDatos("favoritos");

    const seleccionados = productos.filter(
        p => favoritos.includes(p.id)
    );

    if (seleccionados.length === 0) {

        contenedor.innerHTML = `
            <div class="favorites-empty">
                <h2>Todavía no tenés favoritos.</h2>
                <p>Explorá el catálogo y guardá tus videojuegos preferidos.</p>
                <a href="catalogo.html" class="btn">
                    Explorar catálogo
                </a>
            </div>
        `;

        return;
    }

    contenedor.innerHTML = seleccionados.map(producto => `

        <article class="product-card">

            <img
                src="${obtenerImagen(producto)}"
                alt="${producto.nombre}"
                loading="lazy"
            >

            <h3>${producto.nombre}</h3>

            <p>${formatoPrecio(producto.precio)}</p>

            <p>${producto.estado}</p>

            <a href="detalle.html?id=${producto.id}">
                Ver producto
            </a>

            <button
                type="button"
                onclick="eliminarDeFavoritos(${producto.id})"
            >
                Quitar de favoritos
            </button>

        </article>

    `).join("");
}


// CARGAR FAVORITOS

document.addEventListener("DOMContentLoaded", () => {

    mostrarFavoritos();

    actualizarContadores();

});
