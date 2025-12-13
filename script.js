document.addEventListener('DOMContentLoaded', () => {
  // === MENÚ MÓVIL ===
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
  });

  // === ANIMACIÓN CÍCLICA ===
  const svgX = document.querySelector('.x-animada');
  setInterval(() => {
    const newSvg = svgX.cloneNode(true);
    svgX.parentNode.replaceChild(newSvg, svgX);
    const currentSvg = document.querySelector('.x-animada');
  }, 5000); 
});