
/* Que el header se mueva*/

document.addEventListener("DOMContentLoaded", function() {
    let lastScrollTop = 0; 
    let timeout; 
    const header = document.getElementById("header"); 

    window.addEventListener("scroll", function() {
        clearTimeout(timeout); 

        const scrollTop = window.scrollY || document.documentElement.scrollTop; 

        if (scrollTop > lastScrollTop) {
            
            header.style.top = "-60px"; 
        } else {
        
            header.style.top = "-60px"; 
        }

        
        timeout = setTimeout(function() {
            header.style.top = "0"; 
        }, 500); //

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
    });
});



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
            setTimeout(type, 70); // Ajusta la velocidad de escritura
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
            }, 1000); // Espera un poco antes de comenzar a escribir el nuevo texto
        }
    }
}

type(); // Inicia el efecto

type(); 



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



const carruselWrapper = document.getElementById('carruselWrapper');
const carruselItems = document.querySelectorAll('.carruselitem');
let startX; // Posición inicial del toque
let currentTranslateX = 0; // Posición actual del desplazamiento
let isDragging = false; // Estado de arrastre
let totalItems = carruselItems.length / 2; // Cantidad de imágenes originales
let currentIndex = 0; // Índice actual

// Maneja el inicio del toque
carruselWrapper.addEventListener('touchstart', (event) => {
    isDragging = true;
    startX = event.touches[0].clientX; // Guarda la posición inicial del toque
});

// Maneja el movimiento del toque
carruselWrapper.addEventListener('touchmove', (event) => {
    if (!isDragging) return;

    const currentX = event.touches[0].clientX; // Posición actual del toque
    const diffX = currentX - startX; // Diferencia entre la posición actual y la inicial

    // Desplaza el carrusel
    carruselWrapper.style.transform = `translateX(${currentTranslateX + diffX}px)`;
});

// Maneja el final del toque
carruselWrapper.addEventListener('touchend', () => {
    isDragging = false;

    // Calcula la nueva posición al soltar el dedo
    const currentX = parseFloat(carruselWrapper.style.transform.replace('translateX(', '').replace('px)', ''));
    const threshold = 100; // Umbral para cambiar de imagen

    // Determina si se debe cambiar a la siguiente o anterior imagen
    if (currentX - startX < -threshold) {
        // Siguiente imagen
        currentIndex++;
    } else if (currentX - startX > threshold) {
        // Imagen anterior
        currentIndex--;
    }

    // Limita el índice al rango de imágenes
    if (currentIndex >= totalItems) {
        currentIndex = 0; // Vuelve al inicio
    } else if (currentIndex < 0) {
        currentIndex = totalItems - 1; // Va al final
    }

    // Calcula la nueva posición de desplazamiento
    currentTranslateX = -currentIndex * (70 + 15); // Ajusta según el ancho de los elementos

    // Aplica la transformación final
    carruselWrapper.style.transform = `translateX(${currentTranslateX}%)`;
});