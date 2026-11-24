
/* =================================
   PUNTO GAMER - BASE DE PRODUCTOS
================================= */

const productos = [
    {
        id: 1,
        nombre: "EA Sports FC 27",
        plataforma: ["PC", "PlayStation", "Xbox"],
        genero: "Deportes",
        imagen: "fifa-27.jpg",
        precio: 75000,
        estado: "Disponible"
    },
    {
        id: 2,
        nombre: "Grand Theft Auto VI",
        plataforma: ["PlayStation", "Xbox"],
        genero: "Accion",
        imagen: "gta-vi.jpg",
        precio: 0,
        estado: "Proximamente"
    },
    {
        id: 3,
        nombre: "Grand Theft Auto V",
        plataforma: ["PC", "PlayStation", "Xbox"],
        genero: "Accion",
        imagen: "gta-v.jpg",
        precio: 35000,
        estado: "Disponible"
    },
    {
        id: 4,
        nombre: "God of War (2018)",
        plataforma: ["PC", "PlayStation"],
        genero: "Accion",
        imagen: "god-of-war.jpg",
        precio: 28000,
        estado: "Disponible"
    },
    {
        id: 5,
        nombre: "Elden Ring",
        plataforma: ["PC", "PlayStation", "Xbox"],
        genero: "RPG",
        imagen: "elden-ring.jpg",
        precio: 45000,
        estado: "Disponible"
    },
    {
        id: 6,
        nombre: "Fortnite",
        plataforma: ["PC", "PlayStation", "Xbox"],
        genero: "Accion",
        imagen: "fortnite.jpg",
        precio: 0,
        estado: "Disponible"
    },
    {
        id: 7,
        nombre: "Call of Duty: Black Ops 7",
        plataforma: ["PC", "PlayStation", "Xbox"],
        genero: "Accion",
        imagen: "call-of-duty-black-ops-7.jpg",
        precio: 85000,
        estado: "Disponible"
    },
    {
        id: 8,
        nombre: "Roblox",
        plataforma: ["PC", "PlayStation", "Xbox"],
        genero: "Aventura",
        imagen: "roblox.jpg",
        precio: 0,
        estado: "Disponible"
    },
    {
        id: 9,
        nombre: "Minecraft",
        plataforma: ["PC", "PlayStation", "Xbox"],
        genero: "Aventura",
        imagen: "minecraft.jpg",
        precio: 25000,
        estado: "Disponible"
    },
    {
        id: 10,
        nombre: "Rocket League",
        plataforma: ["PC", "PlayStation", "Xbox"],
        genero: "Deportes",
        imagen: "rocket-league.jpg",
        precio: 0,
        estado: "Disponible"
    },
    {
        id: 11,
        nombre: "Rainbow Six Siege",
        plataforma: ["PC", "PlayStation", "Xbox"],
        genero: "Accion",
        imagen: "rainbow-six-siege.jpg",
        precio: 30000,
        estado: "Disponible"
    },
    {
        id: 12,
        nombre: "Marvel Rivals",
        plataforma: ["PC", "PlayStation", "Xbox"],
        genero: "Accion",
        imagen: "marvel-rivals.jpg",
        precio: 0,
        estado: "Disponible"
    },
    {
        id: 13,
        nombre: "Overwatch 2",
        plataforma: ["PC", "PlayStation", "Xbox"],
        genero: "Accion",
        imagen: "overwatch-2.jpg",
        precio: 0,
        estado: "Disponible"
    },
    {
        id: 14,
        nombre: "Red Dead Redemption 2",
        plataforma: ["PC", "PlayStation", "Xbox"],
        genero: "Aventura",
        imagen: "red-dead-redemption-2.jpg",
        precio: 40000,
        estado: "Disponible"
    },
    {
        id: 15,
        nombre: "NBA 2K26",
        plataforma: ["PC", "PlayStation", "Xbox"],
        genero: "Deportes",
        imagen: "nba-2k26.jpg",
        precio: 65000,
        estado: "Disponible"
    },
    {
        id: 16,
        nombre: "Battlefield 6",
        plataforma: ["PC", "PlayStation", "Xbox"],
        genero: "Accion",
        imagen: "battlefield-6.jpg",
        precio: 80000,
        estado: "Disponible"
    },
    {
        id: 17,
        nombre: "Hogwarts Legacy",
        plataforma: ["PC", "PlayStation", "Xbox"],
        genero: "Aventura",
        imagen: "hogwarts-legacy.jpg",
        precio: 35000,
        estado: "Disponible"
    },
    {
        id: 18,
        nombre: "Assassin's Creed Shadows",
        plataforma: ["PC", "PlayStation", "Xbox"],
        genero: "Accion",
        imagen: "assassins-creed-shadows.jpg",
        precio: 70000,
        estado: "Disponible"
    },
    {
        id: 19,
        nombre: "Ghost of Yotei",
        plataforma: ["PlayStation"],
        genero: "Accion",
        imagen: "ghost-of-yotei.jpg",
        precio: 80000,
        estado: "Disponible"
    },
    {
        id: 20,
        nombre: "ARC Raiders",
        plataforma: ["PC", "PlayStation", "Xbox"],
        genero: "Accion",
        imagen: "arc-raiders.jpg",
        precio: 50000,
        estado: "Disponible"
    },
    {
        id: 21,
        nombre: "Clair Obscur: Expedition 33",
        plataforma: ["PC", "PlayStation", "Xbox"],
        genero: "RPG",
        imagen: "clair-obscur-expedition-33.jpg",
        precio: 55000,
        estado: "Disponible"
    },
    {
        id: 22,
        nombre: "Monster Hunter Wilds",
        plataforma: ["PC", "PlayStation", "Xbox"],
        genero: "Aventura",
        imagen: "monster-hunter-wilds.jpg",
        precio: 75000,
        estado: "Disponible"
    },
    {
        id: 23,
        nombre: "Forza Horizon 5",
        plataforma: ["PC", "Xbox"],
        genero: "Carreras",
        imagen: "forza-horizon-5.jpg",
        precio: 45000,
        estado: "Disponible"
    },
    {
        id: 24,
        nombre: "The Forest",
        plataforma: ["PC", "PlayStation"],
        genero: "Aventura",
        imagen: "the-forest.jpg",
        precio: 18000,
        estado: "Disponible"
    },
    {
        id: 25,
        nombre: "Need for Speed Heat",
        plataforma: ["PC", "PlayStation", "Xbox"],
        genero: "Carreras",
        imagen: "need-for-speed-heat.jpg",
        precio: 30000,
        estado: "Disponible"
    }
];


// =================================
// FORMATO DE PRECIOS
// =================================

function formatoPrecio(precio) {

    if (precio === 0) {
        return "Gratis";
    }

    return new Intl.NumberFormat("es-AR", {
        style: "currency",
        currency: "ARS",
        maximumFractionDigits: 0
    }).format(precio);
}


// =================================
// OBTENER RUTA DE IMAGEN
// =================================

function obtenerImagen(producto) {

    const carpeta = window.location.pathname.includes("/pages/")
        ? "../assets/img/productos/"
        : "assets/img/productos/";

    return carpeta + producto.imagen;
}
