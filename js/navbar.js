const navbarLinks = document.getElementById('links-navbar');

const url = window.location.pathname;

// Detectar la profundidad del archivo actual para ajustar las rutas
const basePath = url.includes('/views/') ? '../' : './';

fetch(`${basePath}assets/data/datos.json`)
     .then(response => response.json())
     .then(data => {
        data.navItems.forEach(link => {

           // Ajustar la URL eliminando posibles barras redundantes
           const adjustedUrl = `${basePath}${link.url}`.replace(/\/{2,}/g, '/');

            const clase = url.includes(link.url)?'botonin': '';
          
            navbarLinks.innerHTML += `
                <a class="${clase}" href="${adjustedUrl}">${link.title}</a>
            `;
     });
})

.catch(error => {
    console.error("Error al cargar los datos.",error);
});
