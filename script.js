document.addEventListener('DOMContentLoaded', () => {
  
  // 1. Menú Móvil
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  if(menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      menuToggle.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
    });
  }

  // 2. Animación Voto
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

  // 3. Modales "Leer Más"
  const btnsLeerMas = document.querySelectorAll('.btn-leer-mas');
  const overlay = document.getElementById('modal-overlay');
  const closeBtns = document.querySelectorAll('.close-modal');

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

  const closeModal = () => {
    document.querySelectorAll('.modal').forEach(m => m.classList.remove('active-modal'));
    overlay.classList.remove('active-modal');
  };

  closeBtns.forEach(btn => btn.addEventListener('click', closeModal));
  if(overlay) overlay.addEventListener('click', closeModal);

  // 4. Historias "Ver Más"
  const btnVerMasHistorias = document.getElementById('btn-ver-mas-historias');
  const hiddenStories = document.querySelectorAll('.hidden-story');

  if(btnVerMasHistorias) {
    btnVerMasHistorias.addEventListener('click', () => {
      hiddenStories.forEach(story => {
        story.classList.add('active-story');
        story.classList.remove('hidden-story');
      });
      btnVerMasHistorias.style.display = 'none';
    });
  }
});