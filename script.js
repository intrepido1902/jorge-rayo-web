document.addEventListener('DOMContentLoaded', () => {
  
  // 1. Lógica del Menú Móvil (Se mantiene igual)
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if(menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      menuToggle.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
    });
  }

  // 2. Lógica de Animación del Voto (IntersectionObserver)
  const casilla = document.getElementById('casilla-82');
  let animationInterval;

  const startAnimationLoop = () => {
    // Ejecutar inmediatamente
    triggerAnimation();
    // Y luego repetir cada 2.5 segundos
    animationInterval = setInterval(triggerAnimation, 2500);
  };

  const stopAnimationLoop = () => {
    clearInterval(animationInterval);
    // Limpiar clase para dejarlo limpio si se va
    if(casilla) casilla.classList.remove('animate-now');
  };

  const triggerAnimation = () => {
    if (!casilla) return;
    
    // Resetear la animación quitando la clase y forzando reflow
    casilla.classList.remove('animate-now');
    void casilla.offsetWidth; // Hack para reiniciar animación CSS
    
    // Activar animación
    casilla.classList.add('animate-now');
  };

  // Observador: Solo anima si el elemento es visible en pantalla
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        startAnimationLoop();
      } else {
        stopAnimationLoop();
      }
    });
  }, { threshold: 0.5 }); // Se activa cuando el 50% de la sección es visible

  const sectionVoto = document.getElementById('como-votar');
  if (sectionVoto) {
    observer.observe(sectionVoto);
  }
});