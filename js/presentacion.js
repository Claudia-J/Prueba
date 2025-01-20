const presentacionContainer = document.getElementById('presentacion-container')

const url = window.location.pathname;

// Detectar la profundidad del archivo actual para ajustar las rutas
const basePath = url.includes('/views/') ? '../' : './';

fetch(`${basePath}assets/data/datos.json`)
     .then(response => {
        if (!response.ok) {
            throw new Error(`Error al cargar JSON: ${response.statusText}`);
        }
        return response.json();
    })
     .then(data => {
        data.presentacion.map((item) => {
            presentacionContainer.innerHTML +=
            `
            <img class="img-circular" src="assets/images/FotoCV.jpeg" alt="Foto de perfil" height="600" width="600">
            <h3>${item.nombre} - ${item.trabajo}</h3>
            <p>${item.descripcion}</p>
            <div class="iconos">
                <a href=${item.linkedin} target="_blank">
                <img class="icono" src="assets/images/linkedin-svgrepo-com.svg" alt="icono linkedin" height="40" width="40">
                </a>
                <a href=${item.instagram} target="_blank">
                <img class="icono" src="assets/images/instagram-svgrepo-com.svg" alt="icono de instagram" height="40" width="40">
                </a>
                <a href="${item.cvLink}" target="_blank">
                <img class="icono" src="assets/images/curriculum-resume-svgrepo-com.svg" alt="icono cv" height="40" width="40">
                </a>
            </div>
            `
        })
     })

     const noticiasContainer = document.getElementById('noticias-container')

     fetch("../assets/data/datos.json")
     .then(response => response.json())
     .then(data => {
        data.noticias.map((item) => {
            noticiasContainer.innerHTML +=
            `<div class = "contenedorNoticia">
            <h2>${item.titulo}</h2>
            <p>${item.descripcion}</p>
            </div>
            `
        })
     })

     

