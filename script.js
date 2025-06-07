document.addEventListener('DOMContentLoaded', () => {
    // 1) TOGGLE modo oscuro
    const toggle = document.getElementById('modo-oscuro-toggle');
    if (toggle) {
      const icono = toggle.querySelector('img');
      toggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
          icono.src = 'modo-claro.png';
        } else {
          icono.src = 'modo-oscuro.png';
        }
      });
    }
  
    // 2) Tarjetas clicables por teclado
    document.querySelectorAll('.card[role="link"]').forEach(card => {
      card.addEventListener('keydown', e => {
        if (e.key === 'Enter') {
          const enlace = card.querySelector('a.btn');
          if (enlace) enlace.click();
        }
      });
    });
  
    // 3) Validación del formulario
    const formContacto = document.querySelector('.form-contacto');
    if (formContacto) {
      formContacto.addEventListener('submit', function (e) {
        const nombre = this.querySelector('input[type="text"]');
        const correo = this.querySelector('input[type="email"]');
        const mensaje = this.querySelector('textarea');
        if (!nombre.value.trim() || !correo.value.trim() || !mensaje.value.trim()) {
          e.preventDefault();
          alert('Por favor, completa todos los campos antes de enviar.');
        }
      });
    }
  
    // 4) “Reveal on Scroll” 
     function animateOnScroll() {
    const sections = document.querySelectorAll('.section');
    const triggerBottom = window.innerHeight * 0.85;

    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;

      if (sectionTop < triggerBottom) {
        section.classList.add('animate');
      }
    });
  }

  window.addEventListener('scroll', animateOnScroll);
  window.addEventListener('load', animateOnScroll);
    // 5) Scroll-to-Top
    const scrollBtn = document.getElementById('scroll-to-top');
    if (scrollBtn) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
          scrollBtn.classList.add('show');
        } else {
          scrollBtn.classList.remove('show');
        }
      });
      scrollBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  });
  