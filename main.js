
/* Que el header se mueva*/

document.addEventListener("DOMContentLoaded", function() {
    let lastScrollTop = 0; 
    let timeout; 
    const header = document.getElementById("header"); 

    window.addEventListener("scroll", function() {
        clearTimeout(timeout); 

        const scrollTop = window.scrollY || document.documentElement.scrollTop; 

        if (scrollTop > lastScrollTop) {
            
            header.style.top = "-200px"; 
        } else {
        
            header.style.top = "-200px"; 
        }

        
        timeout = setTimeout(function() {
            header.style.top = "0"; 
        }, 300); //

        lastScrollTop = scrollTop; 
    });
});


/* scroll smooth

const scroll = new LocomotiveScroll({
    el: document.querySelector('body'),
    smooth: true,
    inertia: 0.5
});*/






/*function changeButton() {
    const button = document.getElementById("myButton");
    
    button.textContent = "Envíanos un whatsapp"; // Cambia el texto del botón
    button.style.color = "#ffffff" ;
}

function resetButton() {
    const button = document.getElementById("myButton");
    
    button.textContent = "Solicitar cotización";
    button.style.color = "#000000"
}
*/


document.addEventListener("DOMContentLoaded", function() {
    const rellax = new Rellax('.rellax', {
        center:true,
    });
});

/*const imageContainer = document.getElementById('containerrellax');

    // Función para inicializar Rellax cuando el contenedor está visible
    const observerRellax = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                rellax.refresh(); // Asegúrate de refrescar Rellax si es necesario
            }
        });
    });

    // Observa el contenedor
    observerRellax.observe(containerrellax);*/



const texts = [
    "Es una parte fundamental a la hora de vender.",
    "Pero tranquilo",
    "De eso nos encargamos nosotros!",

];
const typingElement = document.getElementById("text");
let index = 0; // Índice del texto actual
let charIndex = 0; // Índice de carácter actual
let isDeleting = false; // Estado de si está borrando

function type() {
    if (!isDeleting) {
        if (charIndex < texts[index].length) {
            typingElement.textContent += texts[index].charAt(charIndex);
            charIndex++;
            setTimeout(type, 50); // Ajusta la velocidad de escritura
        } else {
            // Inicia el borrado después de un tiempo
            setTimeout(() => {
                isDeleting = true;
                type();
            }, 1000); // Tiempo antes de comenzar a borrar
        }
    } else {
        if (charIndex > 0) {
            typingElement.textContent = texts[index].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(type, 40); // Ajusta la velocidad de borrado
        } else {
            // Cambia al siguiente texto
            isDeleting = false;
            index = (index + 1) % texts.length; // Cambia al siguiente texto en bucle
            setTimeout(() => {
                type();
            }, 0); // Espera un poco antes de comenzar a escribir el nuevo texto
        }
    }
}

setTimeout(() => {
    type(); // Inicia el efecto
}, 1000);



const textarea = document.getElementById('message');

textarea.addEventListener('input', function() {
    this.style.height = 'auto'; // Reinicia la altura
    this.style.height = this.scrollHeight + 'px'; // Ajusta la altura al scrollHeight
});

// Inicializa el tamaño en la carga de la página
textarea.style.height = textarea.scrollHeight + 'px';






const animatedElements = document.querySelectorAll('.animate__animated');


const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            
            entry.target.classList.add('animate__fadeInUp');
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); 
        }
    });
}, { threshold: 0.000001 });


animatedElements.forEach(element => {
    observer.observe(element);
});


const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', function() {
    navMenu.classList.toggle('show'); // Alterna la clase para mostrar/ocultar el menú
});




const container = document.getElementById('imageContainer');

let position = 0; // Posición inicial

function animate() {
    position -= 3; // Mover hacia la izquierda
    if (Math.abs(position) >= container.scrollWidth / 2) { 
        position = 0; // Reiniciar la posición al inicio
    }
    container.style.transform = `translateX(${position}px)`; // Aplicar la transformación
    requestAnimationFrame(animate); // Llamar a la función de nuevo en el siguiente frame
}

animate();