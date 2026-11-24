
/* =================================
   PUNTO GAMER - CARRITO
================================= */

// AGREGAR PRODUCTO

function agregarAlCarrito(id) {

    const producto = productos.find(
        p => p.id === Number(id)
    );

    if (!producto || producto.estado !== "Disponible") {
        alert("Este producto no está disponible.");
        return;
    }

    const carrito = obtenerDatos("carrito");

    const existente = carrito.find(
        p => p.id === producto.id
    );

    if (existente) {
        existente.cantidad++;
    } else {
        carrito.push({
            id: producto.id,
            cantidad: 1
        });
    }

    guardarDatos("carrito", carrito);

    actualizarContadores();

    alert("Producto agregado al carrito.");
}


// CAMBIAR CANTIDAD

function cambiarCantidad(id, cambio) {

    const carrito = obtenerDatos("carrito");

    const producto = carrito.find(
        p => p.id === Number(id)
    );

    if (!producto) return;

    producto.cantidad += cambio;

    if (producto.cantidad < 1) {
        producto.cantidad = 1;
    }

    guardarDatos("carrito", carrito);

    mostrarCarrito();
    actualizarContadores();
}


// ELIMINAR PRODUCTO

function eliminarDelCarrito(id) {

    const carrito = obtenerDatos("carrito");

    const nuevoCarrito = carrito.filter(
        p => p.id !== Number(id)
    );

    guardarDatos("carrito", nuevoCarrito);

    mostrarCarrito();
    actualizarContadores();
}


// MOSTRAR CARRITO

function mostrarCarrito() {

    const contenedor = document.querySelector(".cart-items");
    const subtotalElemento = document.querySelector("#cart-subtotal");
    const totalElemento = document.querySelector("#cart-total");
    const botonCompra = document.querySelector("#btn-continuar-compra");

    if (!contenedor) return;

    const carrito = obtenerDatos("carrito");

    if (carrito.length === 0) {

        contenedor.innerHTML = `
            <div class="cart-empty">
                <h2>Tu carrito está vacío</h2>
                <p>Agregá videojuegos para comenzar tu compra.</p>
                <a href="catalogo.html" class="btn">
                    Explorar catálogo
                </a>
            </div>
        `;

        if (subtotalElemento) {
            subtotalElemento.textContent = formatoPrecio(0);
        }

        if (totalElemento) {
            totalElemento.textContent = formatoPrecio(0);
        }

        if (botonCompra) {
            botonCompra.disabled = true;
        }

        return;
    }

    let total = 0;

    contenedor.innerHTML = carrito.map(item => {

        const producto = productos.find(
            p => p.id === item.id
        );

        if (!producto) return "";

        const subtotal = producto.precio * item.cantidad;

        total += subtotal;

        return `
            <article class="cart-product">

                <img
                    src="${obtenerImagen(producto)}"
                    alt="${producto.nombre}"
                >

                <div class="cart-product-info">

                    <h3>${producto.nombre}</h3>

                    <p>
                        Precio unitario:
                        ${formatoPrecio(producto.precio)}
                    </p>

                    <div class="cart-quantity">

                        <button
                            type="button"
                            onclick="cambiarCantidad(${producto.id}, -1)"
                        >
                            -
                        </button>

                        <span>${item.cantidad}</span>

                        <button
                            type="button"
                            onclick="cambiarCantidad(${producto.id}, 1)"
                        >
                            +
                        </button>

                    </div>

                    <p>
                        Subtotal:
                        ${formatoPrecio(subtotal)}
                    </p>

                    <button
                        type="button"
                        onclick="eliminarDelCarrito(${producto.id})"
                    >
                        Eliminar
                    </button>

                </div>

            </article>
        `;

    }).join("");

    if (subtotalElemento) {
        subtotalElemento.textContent = formatoPrecio(total);
    }

    if (totalElemento) {
        totalElemento.textContent = formatoPrecio(total);
    }

    if (botonCompra) {
        botonCompra.disabled = false;
    }
}


// CARGAR CARRITO

document.addEventListener("DOMContentLoaded", () => {

    mostrarCarrito();

    actualizarContadores();

});
