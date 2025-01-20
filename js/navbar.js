const navbarLinks = document.getElementById('links-navbar');

const url = window.location.pathname;
console.log(url);

const mainPath = `${url}/Prueba`

// Detectar la profundidad del archivo actual para ajustar las rutas
const basePath = window.location.pathname.includes('/views/') ? '../' : './';

fetch(`${basePath}assets/data/datos.json`)
     .then(response => response.json())
     .then(data => {
        data.navItems.map(link => {

            //Ajustar la URL de cada enlace dinámicamente

            const adjustedUrl = `${basePath}${link.url}`;

            const clase = url.includes(link.url)?'botonin': '';
          
            navbarLinks.innerHTML += 
            `
                <a class="${clase}" href="${adjustedUrl}">${link.title}</a>
            `;
     });
})

.catch(error => {
    console.error("Error al cargar los datos.",error);
});
