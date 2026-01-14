document.addEventListener('DOMContentLoaded', () => {
  
  // 1. Lógica Menú Móvil
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if(menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      const icon = navLinks.classList.contains('active') ? '✕' : '☰';
      menuToggle.textContent = icon;
    });

    // Cerrar menú al hacer clic en un enlace
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.textContent = '☰';
      });
    });
  }

  // 2. Restauración Animación Voto (X)
  // 2. ANIMACIÓN DE LA X (Lógica corregida)
  const casilla = document.getElementById('casilla-82');
  const sectionVoto = document.getElementById('como-votar');
  
  // Verificación de seguridad para evitar errores en consola si cambia el HTML
  if (casilla && sectionVoto) {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2 // CAMBIO: Bajamos a 20% para que se active más fácil en móviles
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Entra en pantalla: Activa la animación
          casilla.classList.add('active-animation');
        } else {
          // Sale de pantalla: Pausa la animación (Mejora rendimiento)
          casilla.classList.remove('active-animation');
        }
      });
    }, observerOptions);

    observer.observe(sectionVoto);
  } else {
    console.warn('⚠️ Auditoría: No se encontró #casilla-82 o #como-votar en el DOM.');
  }

 // 3. Reparación Botones "Leer Más" (Modales) - VERSIÓN ROBUSTA
  // Seleccionamos ambos tipos de botones: los de propuestas (.btn-leer-mas) y los de testimonios (.btn-leer-mas-testimonio)
  const btnsLeerMas = document.querySelectorAll('.btn-leer-mas, .btn-leer-mas-testimonio');
  const overlay = document.getElementById('modal-overlay');
  const closeBtns = document.querySelectorAll('.close-modal');

  // Función segura para abrir con diagnósticos
  const openModal = (modalId) => {
    console.log(`Intentando abrir modal con ID: ${modalId}`); // LOG DEPURACIÓN
    
    if (!modalId) {
      console.error('ERROR: El botón no tiene un atributo data-target definido.');
      return;
    }

    const modal = document.getElementById(modalId);
    
    if (modal && overlay) {
      console.log('Modal encontrado en el DOM. Abriendo...'); // LOG DEPURACIÓN
      modal.classList.add('active-modal');
      overlay.classList.add('active-modal');
      document.body.style.overflow = 'hidden'; // Evita scroll de fondo
    } else {
      console.error(`ERROR CRÍTICO: No se encontró en el HTML un elemento con id="${modalId}" o falta el overlay.`);
    }
  };

  // Función segura para cerrar
  const closeModal = () => {
    console.log('Cerrando modales...'); // LOG DEPURACIÓN
    document.querySelectorAll('.modal.active-modal').forEach(m => m.classList.remove('active-modal'));
    if(overlay) overlay.classList.remove('active-modal');
    document.body.style.overflow = ''; 
  };

  // Asignar eventos
  if(btnsLeerMas.length > 0) {
    console.log(`Se encontraron ${btnsLeerMas.length} botones de "Leer más". Asignando eventos...`); // LOG DEPURACIÓN
    
    btnsLeerMas.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault(); 
        const targetId = btn.getAttribute('data-target');
        console.log('Click detectado en botón. Target:', targetId); // LOG DEPURACIÓN
        openModal(targetId);
      });
    });
  } else {
    console.warn('ADVERTENCIA: No se encontraron botones con la clase .btn-leer-mas ni .btn-leer-mas-testimonio');
  }

  if(closeBtns.length > 0) {
    closeBtns.forEach(btn => btn.addEventListener('click', closeModal));
  }

  if(overlay) {
    overlay.addEventListener('click', closeModal);
  }
  // 4. Lógica "Ver Más Historias"
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

//domain version