window.sr = ScrollReveal();


// sr.reveal('.container', {
//     duration: 3000,
//     origin: 'left',
//     distance: '-400px' 
// });


// sr.reveal('.container-sections', {
//     duration: 4000,
//     origin: 'bottom',
//     distance: '-100px' 
// });

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


sr.reveal('.container', containerOptions);
sr.reveal('.container-sections', containerSectionsOptions);

