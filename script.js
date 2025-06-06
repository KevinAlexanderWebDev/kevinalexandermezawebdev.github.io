// Animación al hacer scroll (reveal)
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
  
    const revealOnScroll = () => {
      const triggerBottom = window.innerHeight * 0.85;
  
      sections.forEach(section => {
        const boxTop = section.getBoundingClientRect().top;
  
        if (boxTop < triggerBottom) {
          section.classList.add('visible');
        } else {
          section.classList.remove('visible');
        }
      });
    };
  
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // ejecutar al inicio
  });
  
  // Validación del formulario de contacto
  document.querySelector('.form-contacto')?.addEventListener('submit', function (e) {
    const nombre = this.querySelector('input[type="text"]');
    const correo = this.querySelector('input[type="email"]');
    const mensaje = this.querySelector('textarea');
  
    if (!nombre.value || !correo.value || !mensaje.value) {
      e.preventDefault();
      alert('Por favor, completa todos los campos antes de enviar.');
    }
  });
  