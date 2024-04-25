window.sr = ScrollReveal();

var containerOptions = {
    duration: 2000,
    origin: 'left',
    distance: '-400px',
    reset: true // Es 
};


var containerSectionsOptions = {
    duration: 4000,
    origin: 'bottom',
    distance: '-100px',
    reset: true
};

var containerDetailOptions = {
    duration: 4000,
    origin: 'bottom',
    distance: '-100px',
    reset: true
};



sr.reveal('.container', containerOptions);
sr.reveal('.container-sections', containerSectionsOptions);
sr.reveal('.container-detail', containerDetailOptions);



function abrirCertificado(){
    window.open('./assets/Certificado Desarrollador Web.png', '_blank');
}


document.querySelector('.menu-toggle').addEventListener('click', function() {
    this.classList.toggle('clicked'); // Agregar o quitar la clase 'clicked' al icono del menú hamburguesa
    document.querySelector('.nav-dropdown').classList.toggle('active'); // Mostrar u ocultar la lista desplegable al hacer clic en el icono del menú hamburguesa 
});

// document.querySelector('.menu-toggle').addEventListener('click', function() {
//     this.classList.toggle('clicked'); // Agregar o quitar la clase 'clicked' al icono del menú hamburguesa
//     document.querySelector('.nav-links').classList.toggle('active'); // Mostrar u ocultar la lista de enlaces de navegación al hacer clic en el icono del menú hamburguesa 
// });

