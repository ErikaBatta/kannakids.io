
// alerta de envio formulario

// paso 1: llamar al elemento
let formulario = document.getElementById('miformulario');

// Paso 2: Definir qué hacer cuando se envía
function manejarEnvio(evento) {
  evento.preventDefault(); // Previene que se recargue la página
  alert("Los datos fueron enviados correctamente.");
}

// Paso 3: Conectar el evento con la función
formulario.addEventListener('submit', manejarEnvio);

function vaciar(){
  this.reset();
}

const slides = document.querySelectorAll('.slide');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

// Opcional: auto-slide
setInterval(nextSlide, 3000);