document.addEventListener('DOMContentLoaded', () => {
  
  // 1. Lógica del Menú Móvil
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if(menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      menuToggle.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
    });
  }

  // 2. Lógica de Animación del Voto (IntersectionObserver Optimizado)
  // En lugar de JS intervals, usamos JS para prender/apagar la clase CSS que tiene el loop.
  const casilla = document.getElementById('casilla-82');
  const sectionVoto = document.getElementById('como-votar');

  if (casilla && sectionVoto) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Si es visible, agregar clase que inicia la animación CSS infinita
          casilla.classList.add('active-animation');
        } else {
          // Si no es visible, quitar clase para ahorrar recursos
          casilla.classList.remove('active-animation');
        }
      });
    }, { threshold: 0.4 }); // Se activa cuando el 40% de la sección es visible

    observer.observe(sectionVoto);
  }
});