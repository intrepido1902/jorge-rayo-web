document.addEventListener('DOMContentLoaded', () => {
  
  // 1. Lógica Menú Móvil
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  if(menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      menuToggle.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
    });
  }

  // 2. Lógica Animación Voto (IntersectionObserver)
  const casilla = document.getElementById('casilla-82');
  const sectionVoto = document.getElementById('como-votar');
  if (casilla && sectionVoto) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          casilla.classList.add('active-animation');
        } else {
          casilla.classList.remove('active-animation');
        }
      });
    }, { threshold: 0.4 });
    observer.observe(sectionVoto);
  }

  // 3. Lógica "Leer Más" (Modales)
  const btnsLeerMas = document.querySelectorAll('.btn-leer-mas');
  const overlay = document.getElementById('modal-overlay');
  const closeBtns = document.querySelectorAll('.close-modal');

  // Abrir Modal
  btnsLeerMas.forEach(btn => {
    btn.addEventListener('click', () => {
      const modalId = btn.getAttribute('data-target');
      const modal = document.getElementById(modalId);
      if(modal) {
        modal.classList.add('active-modal');
        overlay.classList.add('active-modal');
      }
    });
  });

  // Cerrar Modal (Botón X y Overlay)
  const closeModal = () => {
    document.querySelectorAll('.modal').forEach(m => m.classList.remove('active-modal'));
    overlay.classList.remove('active-modal');
  };

  closeBtns.forEach(btn => btn.addEventListener('click', closeModal));
  if(overlay) overlay.addEventListener('click', closeModal);

  // 4. Lógica "Ver Más Historias"
  const btnVerMasHistorias = document.getElementById('btn-ver-mas-historias');
  const hiddenStories = document.querySelectorAll('.hidden-story');

  if(btnVerMasHistorias) {
    btnVerMasHistorias.addEventListener('click', () => {
      hiddenStories.forEach(story => {
        story.classList.add('active-story'); // Clase para mostrar
        story.classList.remove('hidden-story'); // Quitar clase de oculto
      });
      btnVerMasHistorias.style.display = 'none'; // Ocultar botón tras usarlo
    });
  }
});