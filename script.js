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
          alert('Por favor, completa todos los campos antes de enviar. | Please complete all fields before sending.');
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
  //Comportamiento de las cards en su versión móvil only//
  document.addEventListener("DOMContentLoaded", () => {
    if (window.innerWidth <= 768) {
      const sliders = document.querySelectorAll('.imagen-slider');

      sliders.forEach(slider => {
        const images = slider.querySelectorAll('.mobile-img');
        if (images.length < 2) return;

        let index = 0;
        images.forEach(img => img.classList.remove('active'));
        images[0].classList.add('active');

        setInterval(() => {
          images[index].classList.remove('active');
          index = (index + 1) % images.length;
          images[index].classList.add('active');
        }, 3000); // cambia cada 3 segundos
      });
    }
  });
  // script.js
const traducciones = {
  es: {
    "nombre": "Kevin Alexander Meza Morales",
    "nav.about": "Sobre mí",
    "nav.skills": "Conocimientos",
    "nav.projects": "Proyectos",
    "nav.contact": "Contacto",
    "about.title": "Sobre mí",
    "about.presentation": "📌 Presentación",
    "about.intro": "Apasionado por crear soluciones digitales modernas y funcionales.",
    "about.text1": "Hola, soy Kevin Alexander Meza Morales, recién egresado de la Ingeniería en Tecnologías de la Información y Comunicaciones (TIC´s) del Instituto Tecnológico Superior de Naranjos.",
    "about.text2": "Renacido cual ave Fénix tengo actualmente 22 años, aunque dicen que la edad es atemporal, me apasiona el desarrollo web, la investigación y la vida saludable. Ojo, no se confundan, no soy una rata de laboratorio, también me gusta hacer ejercicio, dibujar, tocar piano y cocinar, pero sobre todo aprender cosas nuevas.",
    "about.skills": "🛠️ Conocimientos",
    "li.developer": "Desarrollo web", 
    "li.content": "Gestores de contenido", 
    "li.sites web": "Mantenimiento a sitios web", 
    "li.design responsive": "Diseño web responsivo", 
    "li.seo": "Prácticas SEO", 
    "li.webaccesibility": "Accesibilidad web", 
    "li.UI UX design": "Diseño UI | UX",
    "li.agils": "Metodologías Ágiles: Scrum",
    "about.strengths": "💡 Fortalezas y Habilidades",
    "li.strongen": "Inglés Técnico" , 
    "li.strong1": "Certificación como Entrenador Personal por la AFFEV",
    "li.strong2": "Conocimientos de Nutrición deportiva", 
    "li.strong3": "Entrenamiento funcional", 
    "li.strong4": "Suplementación deportiva",
    "li.strong5": "Trabajo en equipo", 
    "li.strong6": "Trato frente a público",
    "li.strong7": "Seguridad de palabra", 
    "p.learning": "¡Tengo total iniciativa para aprender nuevas tecnologías web y mantenerme actualizado con el mercado y tendencias. Compruébalo! ;)",
    "proyectos.title": "🚀 Proyectos recientes",
    "proyectos.1": "Tienda PYMETECH",
    "proyectosspan.1": "Desarrollo de eCommerce para empresa tecnológica en Tampico, con diseño responsive, SEO y personalización en WordPress.",
    "see.project": "Ver Proyecto", 
    "contacto.title": "Contacto",
    "form.name": "Nombre",
    "form.email": "Correo electrónico",
    "form.message": "Mensaje",
    "form.submit": "Enviar",
    "footer.copy": "© 2025 Kevin Alexander Meza Morales"
  },
  en: {
    "nombre": "Kevin Alexander Meza Morales",
    "nav.about": "About Me",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "about.title": "About Me",
    "about.presentation": "📌 Presentation",
    "about.intro": "Passionate about creating modern and functional digital solutions.",
    "about.text1": "Hello, I am Kevin Alexander Meza Morales, recently graduated from the Engineering in Information and Communication Technologies (ICTs) of the Instituto Tecnológico Superior de Naranjos. ",
    "about.text2": "Reborn as a Phoenix bird I am currently 22 years old, although they say age is timeless, I am passionate about web development, research and healthy living. Be careful, do not be confused, I am not a laboratory rat, I also like to exercise, draw, play piano and cook, but above all learn new things.",
    "about.skills": "🛠️ Skills",
    "li.developer": "Web development", 
    "li.content": "Content managers", 
    "li.sites web": "Website maintenance", 
    "li.design responsive": "Responsive web design", 
    "li.seo": "Web accessibility", 
    "li.webaccesibility": "Seo Practices", 
    "li.UI UX design": "UI Design | UX",
    "li.agils": "Agile Methodologies: Scrum",
    "about.strong": "💡 Strengths and Abilities",
    "li.strongen": "Technical English", 
    "li.strong1": "CCertification as Personal Trainer by AFFEV",
    "li.strong2": "Knowledge of Sports Nutrition", 
    "li.strong3": "Functional training", 
    "li.strong4": "Sports supplementation",
    "li.strong5": "Teamwork", 
    "li.strong6": "I try in front of the public",
    "li.strong7": "Word security", 
    "p.learning": "I have full initiative to learn new web technologies and stay up-to-date with the market and trends. Check it out! ;)",
    "proyectos.title": "🚀 Recent Projects",
    "proyectos.1": "PYMETECH store",
    "proyectosspan.1": "ECommerce development for technology company in Tampico, with responsive design, SEO and WordPress customization.",
    "see.project": "See Project",
    "contacto.title": "Contact",
    "form.name": "Name",
    "form.email": "Email",
    "form.message": "Message",
    "form.submit": "Send",
    "footer.copy": "© 2025 Kevin Alexander Meza Morales"
  }
};

  let idiomaActual = "es";

  function cambiarIdioma() {
    idiomaActual = idiomaActual === "es" ? "en" : "es";

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const clave = el.getAttribute("data-i18n");
      el.textContent = traducciones[idiomaActual][clave] || clave;
    });

    // Alternar íconos
    const iconoEs = document.querySelector(".icono-idioma-icono-es");
    const iconoEn = document.querySelector(".icono-idioma-icono-en");

    if (idiomaActual === "es") {
      iconoEs.style.display = "none";
      iconoEn.style.display = "inline";
    } else {
      iconoEs.style.display = "inline";
      iconoEn.style.display = "none";
    }
  }

  document.getElementById("lang-toggle").addEventListener("click", cambiarIdioma);

  // Mostrar el ícono correcto al cargar la página
  window.addEventListener("DOMContentLoaded", () => {
    const iconoEs = document.querySelector(".icono-idioma-icono-es");
    const iconoEn = document.querySelector(".icono-idioma-icono-en");

    if (idiomaActual === "es") {
      iconoEs.style.display = "none";
      iconoEn.style.display = "inline";
    } else {
      iconoEs.style.display = "inline";
      iconoEn.style.display = "none";
    }
  });
  const openBtn = document.getElementById("open-form-btn");
    const overlay = document.getElementById("form-overlay");
    const closeBtn = document.getElementById("close-form");

    openBtn.addEventListener("click", () => {
      overlay.style.display = "flex";
    });

    closeBtn.addEventListener("click", () => {
      overlay.style.display = "none";
    });

    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        overlay.style.display = "none";
      }
    });

    document.getElementById("whatsapp-form").addEventListener("submit", function (e) {
      e.preventDefault();
      const nombre = document.getElementById("name").value;
      const mensaje = document.getElementById("message").value;

      const numero = "528332875807"; 
      const texto = encodeURIComponent(`Hola, soy ${nombre}. ${mensaje}`);
      const enlace = `https://api.whatsapp.com/send?phone=${numero}&text=${texto}`;

      window.open(enlace, "_blank");
      overlay.style.display = "none";
    });

      //Certificate seccion//
      function abrirModal(img) {
      const modal = document.getElementById("modalCert");
      const modalImg = document.getElementById("imgGrande");
      modal.style.display = "flex";
      modalImg.src = img.src;
    }

    function cerrarModal() {
      document.getElementById("modalCert").style.display = "none";
    }

    // Cierra si se hace clic fuera de la imagen
    window.addEventListener("click", function (e) {
      const modal = document.getElementById("modalCert");
      const img = document.getElementById("imgGrande");
      if (e.target === modal && e.target !== img) {
        cerrarModal();
      }
    });