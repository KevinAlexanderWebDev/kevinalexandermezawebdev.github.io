document.addEventListener('DOMContentLoaded', () => {
    // 1) TOGGLE modo oscuro (queda igual que antes)
    const toggle = document.getElementById('modo-oscuro-toggle');
    const icono = toggle.querySelector('img');
  
    toggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      if (document.body.classList.contains('dark-mode')) {
        icono.src = 'modo-claro.png';
      } else {
        icono.src = 'modo-oscuro.png';
      }
    });

    document.querySelectorAll('.card[role="link"]').forEach(card => {
        card.addEventListener('keydown', e => {
          if (e.key === 'Enter') {
            const enlace = card.querySelector('a.btn');
            if (enlace) enlace.click();
          }
        });
      });      
  
    // 2) Validación del formulario (igual que antes)
    document.querySelector('.form-contacto')?.addEventListener('submit', function (e) {
      const nombre = this.querySelector('input[type="text"]');
      const correo = this.querySelector('input[type="email"]');
      const mensaje = this.querySelector('textarea');
  
      if (!nombre.value || !correo.value || !mensaje.value) {
        e.preventDefault();
        alert('Por favor, completa todos los campos antes de enviar.');
      }
    });
  
    // 3) IntersectionObserver para animar secciones (.section)
    const secciones = document.querySelectorAll('.section');
    if (secciones.length) {
      const observerOptions = {
        root: null,
        rootMargin: '0px 0px -15% 0px',
        threshold: 0,
      };
  
      const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      };
  
      const observer = new IntersectionObserver(observerCallback, observerOptions);
      secciones.forEach(sec => observer.observe(sec));
    }
  });
  