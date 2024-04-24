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

