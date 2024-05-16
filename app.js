const hamburguesa = document.querySelector('.hamburguesa');
const navegacion = document.querySelector('.navegacion');
const enlaces = document.querySelectorAll('.navegacion a');
const fecha = document.querySelector('.fecha');
document.addEventListener('DOMContentLoaded', () => {
    const hamburguesa = document.querySelector(".hamburguesa");
    const navegacion = document.querySelector(".navegacion");

    hamburguesa.addEventListener("click", function() {
        navegacion.classList.toggle("mostrar"); // Agregar o quitar la clase 'mostrar'
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const hamburguesa = document.querySelector('.hamburguesa');
    const menuNavegacion = document.querySelector('.navegacion');

    hamburguesa.addEventListener('click', function() {
        menuNavegacion.classList.toggle('ocultar');
    });
});



function cerrarMenu(){
    enlaces.forEach(enlace =>{
        enlace.addEventListener('click',(e)=>{
            e.preventDefault();
            const seccion = document.querySelector(e.target.attributes.href.value);
            cambioSeccion(seccion);
            if(e.target.tagName === 'A'){
                navegacion.classList.add('ocultar');
            }
        });
    });
}

function cambioSeccion(seccion){
    seccion.scrollIntoView({
        behavior:'smooth'
    })
}

function fechaActual(){
    let fechaHoy = new Date().getFullYear();
    fecha.textContent = fechaHoy;
}


document.addEventListener("DOMContentLoaded", function() {
    const ventajas = document.querySelectorAll(".ventaja2");
    const btnCerrarPopups = document.querySelectorAll(".btnCerrarPopup");
    const ventanasPopups = document.querySelectorAll(".popup");

    ventajas.forEach(function(ventaja) {
        ventaja.addEventListener("click", function(e) {
            e.preventDefault();
            const popupId = ventaja.getAttribute("data-popup");
            const popup = document.getElementById(popupId);
            if (popup) {
                // Mostrar la ventana emergente
                popup.style.display = "block";
                // Ajustar el z-index para que esté por encima del contenido de "Lo que ofrecemos"
                popup.style.zIndex = "1001";
            }
        });
    });

    btnCerrarPopups.forEach(function(btnCerrarPopup) {
        btnCerrarPopup.addEventListener("click", function(e) {
            const popup = btnCerrarPopup.closest(".popup");
            if (popup) {
                popup.style.display = "none";
            }
        });
    });

    // Código adicional para expandir y contraer respuestas a preguntas
    const questions = document.querySelectorAll('.question');
    questions.forEach(function(question) {
        question.addEventListener('click', function() {
            const answer = question.nextElementSibling;
            answer.classList.toggle('active');
        });
    });
});


document.addEventListener("DOMContentLoaded", function() {
    // Seleccionar todos los elementos de servicio
    const servicios = document.querySelectorAll('.servicio');

    // Iterar sobre cada servicio
    servicios.forEach(function(servicio) {
        // Seleccionar el enlace dentro de cada servicio
        const enlace = servicio.querySelector('a');

        // Agregar evento de clic al enlace
        enlace.addEventListener('click', function(e) {
            // Evitar el comportamiento predeterminado de redireccionamiento
            e.preventDefault();
            // Obtener la URL del enlace
            const destino = enlace.getAttribute('href');
            // Abrir el enlace en una nueva pestaña
            window.open(destino, '_blank');
        });
    });
});


