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

const traducciones = {
  es: {
    "nombre": "Kevin Alexander Meza Morales",
    "nav.about": "Sobre mí",
    "nav.skills": "Conocimientos",
    "nav.projects": "Proyectos",
    "nav.ct": "Certificados",
    "nav.contact": "Contacto",
    "about.title": "Sobre mí",
    "about.presentation": "📌 Presentación",
    "about.intro": "Apasionado por el mundo Tecnológico, soluciones modernas y plasmas mis ideas en código.",
    "about.text1": "Hola, soy Kevin Alexander Meza Morales, egresado de la Ingeniería en Tecnologías de la Información y Comunicaciones (TIC´s) del Instituto Tecnológico Superior de Naranjos.",
    "about.text2": "Renacido cual ave Fénix tengo actualmente 22 años, aunque dicen que la edad es atemporal, me apasiona el desarrollo web, la investigación y la vida saludable. Ojo, no se confundan, no soy una rata de laboratorio, también me gusta hacer ejercicio, dibujar, tocar piano y cocinar, pero sobre todo aprender cosas nuevas.",
    "about.skills": "🛠️ Conocimientos",
    "li.developer": "Desarrollo web", 
    "li.poo": "Programación orientada a objetos (POO)",
    "li.content": "Gestores de contenido", 
    "li.sites web": "Mantenimiento a sitios web", 
    "li.design responsive": "Diseño web responsivo", 
    "li.seo": "Prácticas SEO", 
    "li.webaccesibility": "Accesibilidad web", 
    "li.UI UX design": "Diseño UI | UX",
    "li.agils": "Metodologías Ágiles: Scrum",
    "about.strengths": "💡 Fortalezas y Habilidades",
    "li.strongen": "Inglés Técnico" , 
    "li.inv": "Conocimiento en desarrollo basado en investigación y método científico",
    "li.strong1": "Certificación como Entrenador Personal por la AFFEV",
    "li.strong2": "Conocimientos de Nutrición deportiva", 
    "li.strong3": "Entrenamiento funcional", 
    "li.strong4": "Suplementación deportiva",
    "li.strong5": "Trabajo en equipo", 
    "li.strong6": "Trato frente a público",
    "li.strong7": "Seguridad de palabra", 
    "p.learning": "¡Tengo total iniciativa para aprender nuevas tecnologías y mantenerme actualizado con el mercado y tendencias. Compruébalo! 🧠⚡",
    "proyectos.title": "🚀 Proyectos recientes",
    "proyectos.1": "Tienda PYMETECH",
    "proyectosspan.1": "Desarrollo de eCommerce para empresa tecnológica en Tampico, con diseño responsive, SEO y personalización en WordPress.",
    "proyectos.2": "El comienzo de todo 'La Nuestra 🛒'",
    "proyectosspan.2": "Desarrollo de un e-commerce inspirado en una tienda de la vida real; al ser mi primer proyecto NO es semántico, no es accesible, no es responsive y, aunque en su momento lo 'clavé' como un proyecto full stack, realmente fue todo front y lo demás pura labia. Es mi bebé, con el que comencé todo, le tengo un especial cariño y me doy cuenta lo mucho que he mejorado en esto. Todo es un coctél de cosas, no sabes en donde enfocar tu vista por tantos eventos que acontecen en el momento pero, no me juzguen, fue mi primer contacto con un desarrollo front-end.",
    "proyectos.3": "Proyecto de Servicio Social 'My Health App'",
    "proyectosspan.3": "Proyecto desarrollado en conjuto con el departamento de investigación de mi universidad | Desarrollo de un dispositivo de monitoreo del ritmo cardíaco utilizando como corazón la placa Esp32 y el sensor de monitoreo cardíaco. El sistema cuenta con sus interfaces gráficas en escritorio y una vista en mobile gracias a su sincronización con una app de monitoreo.",
    "proyecto.4": "Proyecto escolar 'Sembrando agua'",
    "proyectosspan.4": "Desarrollo de un invernadero con riego automatizado basado en las condiciones climatológicas y empleando la placa Esp32 como el corazón del proyecto. Mi rol principal: Desarrollo de la interfaces visuales para los datos provenientes de los sensores, así como el manejo de datos en bruto en la Base de datos Mysqul.",
    "proyectosspan.5": "Un proyecto web hecho con cariño, para conmemorar el Día del Padre y celebrar todo lo que mi papá significa en mi vida. No acepto malos comentarios o algo por el estilo por temas de subjetividad al deporte y equipo que a él le apasionan. ",
    "proyectosspan.6": "Este repositorio fue creado con la finalidad de culminar mis estudios del curso Angular impartido por código facilito. Opté por inspirarme en mi novia para dedicarle esta creación donde no solo empleamos front-end, sino back-end, bases de datos, etc, ¡pruébalo!.",
    "informacion.ingreso": "Puedes ingresar al proyecto usando mis credenciales de usuario: Usuario - Kevin-fit-18 | Contraseña: Guffy",
    "proyectosspan.7": "Micro Proyecto realizado con la finalidad de conmemorar la entrega de flores amarillas aquí en mi natal México. Puede ser pequeño pero al no poder estar cerca de mi pareja, este fue mi pequeño presente y no, no fue cultivado a base de abono y lluvia, sino de código bien estructurado y mucho, si mucho CSS, ese fue el abono 🤭🤣🌻.",
    "proyectos.8": "Cv-Propio",
    "proyectosspan.8": "Este código fue realizado para la creación de mi currículum vitae (cv), con la finalidad de aumentar mi impacto y nivel de conversión ante los empleadores, demostrar mis conocimientos y, sobre todo, las enormes ganas que tengo de formar parte del mundo tech.",
    "proyectosspan.9": "Este código fue realizado para la creación del currículum vitae (cv) de la señorita Isis Alejandra Avendaño Eligio con el propósito de ayudarla en su búsqueda de trabajo y mejorar el impacto que tiene ante los reclutadores. Es un sitio responsive, adaptado para toda pantalla y con un estilo visual encantador, puedes entrar a checarlo si gustas, puedes notar algunos detalles puntuales porque la señorita no me pasó su cv pdf (ya entenderás si entras porque el pdf era tan importante🤣).",
    "proyectos.activos": "⚠️ Proyectos en Proceso ⚠️",
    "activosspan": "Los siguientes son proyectos que se encuentran actualmente en proceso, realizados en angular y con dos finalidades distintas. Nombres Potenciales: Fuel-by-Peanut y Fit-couch-panel.",
    "see.project": "Ver Proyecto", 
    "nav.ct": "Certificaciones",
    "nav.ct1": "Curso a fondo de GitHub",
    "nav.ct2": "Curso Python por Santander Open Academy",
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
    "nav.ct": "Certificates",
    "nav.contact": "Contact",
    "about.title": "About Me",
    "about.presentation": "📌 Presentation",
    "about.intro": "Passionate about the technological world, modern solutions, and turning my ideas into code.",
    "about.text1": "Hello, I am Kevin Alexander Meza Morales, graduated from the Engineering in Information and Communication Technologies (ICTs) of the Instituto Tecnológico Superior de Naranjos. ",
    "about.text2": "Reborn as a Phoenix bird I am currently 22 years old, although they say age is timeless, I am passionate about web development, research and healthy living. Be careful, do not be confused, I am not a laboratory rat, I also like to exercise, draw, play piano and cook, but above all learn new things.",
    "about.skills": "🛠️ Skills",
    "li.developer": "Web development", 
    "li.poo": "Object-oriented programming (OOP)",
    "li.content": "Content managers", 
    "li.sites web": "Website maintenance", 
    "li.design responsive": "Responsive web design", 
    "li.seo": "Web accessibility", 
    "li.webaccesibility": "Seo Practices", 
    "li.UI UX design": "UI Design | UX",
    "li.agils": "Agile Methodologies: Scrum",
    "about.strong": "💡 Strengths and Abilities",
    "li.strongen": "Technical English", 
    "li.inv": "Knowledge development based on research and scientific method",
    "li.strong1": "CCertification as Personal Trainer by AFFEV",
    "li.strong2": "Knowledge of Sports Nutrition", 
    "li.strong3": "Functional training", 
    "li.strong4": "Sports supplementation",
    "li.strong5": "Teamwork", 
    "li.strong6": "I try in front of the public",
    "li.strong7": "Word security", 
    "p.learning": "I have full initiative to learn new technologies and stay up-to-date with the market and trends. Check it out! 🧠⚡",
    "proyectos.title": "🚀 Recent Projects",
    "proyectos.1": "PYMETECH store",
    "proyectosspan.1": "ECommerce development for technology company in Tampico, with responsive design, SEO and WordPress customization.",
    "proyectos.2": "The beginning of everything 'La nuestra 🛒'",
    "proyectosspan.2": "Development of an e-commerce site inspired by a real-life store; being my first project, it is NOT semantic, it is not accessible, it is not responsive, and although at the time I 'nailed' it as a full-stack project, it was really all front-end and the rest pure talk. It's my baby, the one I started it all with; I have a special affection for it and I realize how much I've improved in this. Everything is a cocktail of things; you don't know where to focus your attention due to so many events happening at the moment, but, don't judge me, it was my first contact with front-end development.",
    "proyectos.3": "Proyecto de Servicio Social 'My Health App'",
    "proyectosspan.3": "Project developed in conjunction with my university's research department | Development of a heart rate monitoring device using the Esp32 board and the heart rate monitoring sensor as the heart. The system has graphical interfaces on the desktop and a mobile view thanks to its synchronization with a monitoring app.",
    "proyecto.4": "School Project 'Sowing Water'",
    "proyectosspan.4": "Development of a greenhouse with automated irrigation based on weather conditions, using the ESP32 board as the core of the project. My main role: Development of visual interfaces for sensor data, as well as management of raw data in the MySQL database.",
    "proyectosspan.5": "A web project created with love to commemorate Father's Day and celebrate everything my dad means to me. I don't accept negative comments or anything of the sort due to subjective opinions about the sport and team he's passionate about.",
    "proyectosspan.6": "This repository was created to complete my Angular course taught by Código Facilito. I chose to be inspired by my girlfriend to dedicate this creation to her. We use not only the front-end but also the back-end, databases, and more. Try it!",
    "informacion.ingreso": "You can log in to the project using my login credentials: Username: Kevin-fit-18 | Password: Guffy",
    "proyectosspan.7": "A micro-project commemorating the delivery of yellow flowers here in my native Mexico. It may be small, but since I couldn't be near my partner, this was my little present. No, it wasn't cultivated with fertilizer and rain, but with well-structured code and lots, lots of CSS. That was the fertilizer. 🤭🤣🌻",
    "proyectos.8": "My Resume",
    "proyectosspan.8": "This code was created to create my resume (CV), with the goal of increasing my impact and conversion rate with employers, demonstrating my knowledge, and, above all, my enormous desire to be part of the tech world.",
    "proyectosspan.9": "This code was created to create Miss Isis Alejandra Avendaño Eligio's resume (CV) to help her in her job search and improve her impact on recruiters. It's a responsive site, adapted for all screens, and with a charming visual style. You can check it out if you like. You may notice some specific details because the lady didn't send me her CV in PDF format (you'll understand why the PDF was so important if you log in).",
    "proyectos.activos": "⚠️ Projects in Progress ⚠️",
    "activosspan": "The following are projects currently in progress, built in Angular and with two different purposes. Potential names: Fuel-by-Peanut and Fit-couch-panel.",
    "see.project": "See Project",
    "nav.ct": "Certifications",
    "nav.ct1": "GitHub in-depth course",
    "nav.ct2": "Python course by Santander Open Academy",
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