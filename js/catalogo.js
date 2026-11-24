
/* =================================
   PUNTO GAMER - CATALOGO DINAMICO
================================= */

const contenedorCatalogo = document.querySelector("#lista-productos");
const cantidadResultados = document.querySelector("#cantidad-resultados");

const buscador = document.querySelector("#search");
const filtroGenero = document.querySelector("#genre");
const filtroPlataforma = document.querySelector("#platform");
const botonLimpiar = document.querySelector("#limpiar-filtros");

let productosMostrados = productos;


// NORMALIZAR TEXTO
function normalizarTexto(texto) {
    return texto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim();
}


// MOSTRAR PRODUCTOS
function mostrarProductos(lista) {

    if (!contenedorCatalogo) return;

    productosMostrados = lista;

    if (cantidadResultados) {
        cantidadResultados.textContent =
            `${lista.length} videojuegos encontrados`;
    }

    if (lista.length === 0) {
        contenedorCatalogo.innerHTML =
            "<p>No se encontraron videojuegos.</p>";

        return;
    }

    contenedorCatalogo.innerHTML = lista.map(producto => `

        <article class="product-card">

            <img
                src="${obtenerImagen(producto)}"
                alt="${producto.nombre}"
                loading="lazy"
            >

            <h3>${producto.nombre}</h3>

            <p>${formatoPrecio(producto.precio)}</p>

            <span>${producto.plataforma.join(" / ")}</span>

            <p>${producto.estado}</p>

            <div class="product-actions">

                <a href="${window.location.pathname.includes('/pages/')
                    ? 'detalle.html'
                    : 'pages/detalle.html'}?id=${producto.id}">
                    Ver producto
                </a>

                ${
                    producto.estado === "Disponible"
                    ? `
                        <button
                            type="button"
                            onclick="agregarAlCarrito(${producto.id})"
                        >
                            Agregar al carrito
                        </button>
                    `
                    : `
                        <button type="button" disabled>
                            Próximamente
                        </button>
                    `
                }

                <button
                    type="button"
                    onclick="alternarFavorito(${producto.id}); actualizarVistaActual()"
                >
                    ${esFavorito(producto.id)
                        ? "♥ Quitar de favoritos"
                        : "♡ Agregar a favoritos"}
                </button>

            </div>

        </article>

    `).join("");
}


// ACTUALIZAR VISTA ACTUAL
function actualizarVistaActual() {
    mostrarProductos(productosMostrados);
}


// BUSCADOR
if (buscador) {
    buscador.addEventListener("input", filtrarProductos);
}


// FILTRO POR GENERO
if (filtroGenero) {
    filtroGenero.addEventListener("change", filtrarProductos);
}


// FILTRO POR PLATAFORMA
if (filtroPlataforma) {
    filtroPlataforma.addEventListener("change", filtrarProductos);
}


// FILTRAR PRODUCTOS
function filtrarProductos() {

    const texto = buscador
        ? normalizarTexto(buscador.value)
        : "";

    const genero = filtroGenero
        ? normalizarTexto(filtroGenero.value)
        : "";

    const plataforma = filtroPlataforma
        ? normalizarTexto(filtroPlataforma.value)
        : "";

    const resultados = productos.filter(producto => {

        const coincideNombre =
            normalizarTexto(producto.nombre).includes(texto);

        const coincideGenero =
            !genero ||
            normalizarTexto(producto.genero) === genero;

        const coincidePlataforma =
            !plataforma ||
            producto.plataforma.some(p =>
                normalizarTexto(p) === plataforma
            );

        return coincideNombre &&
            coincideGenero &&
            coincidePlataforma;
    });

    mostrarProductos(resultados);
}


// LIMPIAR FILTROS
if (botonLimpiar) {

    botonLimpiar.addEventListener("click", () => {

        if (buscador) buscador.value = "";
        if (filtroGenero) filtroGenero.value = "";
        if (filtroPlataforma) filtroPlataforma.value = "";

        filtrarProductos();
    });

}


// CARGAR CATALOGO
mostrarProductos(productos);
