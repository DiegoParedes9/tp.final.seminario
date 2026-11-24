
/* =================================
   PUNTO GAMER - DETALLE DE PRODUCTO
================================= */


// OBTENER ID DESDE LA URL

const parametros = new URLSearchParams(window.location.search);
const idProducto = parametros.get("id");


// BUSCAR PRODUCTO

const producto = productos.find(
    p => String(p.id) === idProducto
);


// ELEMENTOS HTML

const imagen = document.querySelector("#detalle-imagen");
const nombre = document.querySelector("#detalle-nombre");
const genero = document.querySelector("#detalle-genero");
const plataforma = document.querySelector("#detalle-plataforma");
const estado = document.querySelector("#detalle-estado");
const precio = document.querySelector("#detalle-precio");
const descripcion = document.querySelector("#detalle-descripcion");

const botonCarrito = document.querySelector("#btn-agregar-carrito");
const botonFavorito = document.querySelector("#btn-agregar-favorito");


// MOSTRAR INFORMACION

if (producto) {

    imagen.src = obtenerImagen(producto);
    imagen.alt = producto.nombre;

    nombre.textContent = producto.nombre;

    genero.textContent =
        "Género: " + producto.genero;

    plataforma.textContent =
        "Plataformas: " + producto.plataforma.join(" / ");

    estado.textContent =
        "Estado: " + producto.estado;

    precio.textContent =
        formatoPrecio(producto.precio);


    // MOSTRAR DESCRIPCION

    if (descripcion) {

        descripcion.textContent =
            descripcionesProductos[producto.id] ||
            "Actualmente no hay una descripción disponible para este videojuego.";

    }


    // CONECTAR BOTON DEL CARRITO

    if (botonCarrito) {

        if (producto.estado === "Disponible") {

            botonCarrito.addEventListener("click", () => {
                agregarAlCarrito(producto.id);
            });

        } else {

            botonCarrito.textContent = "Próximamente";
            botonCarrito.disabled = true;

        }

    }


    // CONECTAR BOTON DE FAVORITOS

    if (botonFavorito) {

        actualizarBotonFavorito();

        botonFavorito.addEventListener("click", () => {

            alternarFavorito(producto.id);

            actualizarBotonFavorito();

        });

    }


    // ACTUALIZAR TEXTO DEL BOTON

    function actualizarBotonFavorito() {

        if (esFavorito(producto.id)) {

            botonFavorito.textContent = "♥ Quitar de favoritos";

        } else {

            botonFavorito.textContent = "♡ Agregar a favoritos";

        }

    }

} else {

    nombre.textContent = "Producto no encontrado";

    genero.textContent = "";
    plataforma.textContent = "";
    estado.textContent = "";
    precio.textContent = "";

    if (descripcion) {
        descripcion.textContent = "";
    }

    imagen.style.display = "none";

    if (botonCarrito) {
        botonCarrito.style.display = "none";
    }

    if (botonFavorito) {
        botonFavorito.style.display = "none";
    }

}
