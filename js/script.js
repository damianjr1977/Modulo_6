// Espera a que todo el contenido del DOM esté cargado antes de ejecutar scripts
document.addEventListener('DOMContentLoaded', function () {

  // ========================================
  // VALIDACIÓN DE FORMULARIO DE PRESUPUESTO
  // ========================================
  const formulario = document.querySelector('form');

  if (formulario) {
    formulario.addEventListener('submit', function (e) {
      const nombre = document.getElementById('nombre');
      const email = document.getElementById('email');
      const telefono = document.getElementById('telefono');
      const mensaje = document.getElementById('mensaje');
      const politica = document.getElementById('privacidad'); // ID corregido

      if (
        !nombre.value.trim() ||
        !email.value.trim() ||
        !telefono.value.trim() ||
        !mensaje.value.trim()
      ) {
        alert('Por favor, complete todos los campos del formulario.');
        e.preventDefault();
        return;
      }

      if (!politica.checked) {
        alert('Debe aceptar la Política de privacidad para continuar.');
        e.preventDefault();
        return;
      }

      // Mostrar mensaje de confirmación y limpiar el formulario
      alert('Formulario enviado correctamente. ¡Gracias por su solicitud!');
      formulario.reset();
      e.preventDefault(); // Detenemos envío real ya que es una simulación
    });
  }

  // ========================================
  // EFECTO DE ENTRADA SUAVE PARA SECCIONES
  // ========================================
  const secciones = document.querySelectorAll('.seccion');

  const mostrarSeccion = (entrada) => {
    entrada.forEach((elemento) => {
      if (elemento.isIntersecting) {
        elemento.target.classList.add('visible');
      }
    });
  };

  const observer = new IntersectionObserver(mostrarSeccion, {
    threshold: 0.2
  });

  secciones.forEach((seccion) => {
    observer.observe(seccion);
  });

  // ========================================
  // CARRUSEL CON EFECTO FADE SUAVE
  // Solo presente en index.html
  // ========================================
  let fadeCurrent = 0;
  const fadeSlides = document.querySelectorAll('.fade-slide');

  function fadeShowSlide(index) {
    fadeSlides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  }

  function fadeNextSlide() {
    fadeCurrent = (fadeCurrent + 1) % fadeSlides.length;
    fadeShowSlide(fadeCurrent);
  }

  if (fadeSlides.length > 0) {
    fadeShowSlide(fadeCurrent);
    setInterval(fadeNextSlide, 5000);
  }
});