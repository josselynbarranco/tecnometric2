/* =====================================================
   TEC·ONOMETRICS CUP
   WEBSITE INTERACTIONS
===================================================== */


/* =========================
   MOBILE MENU
========================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});


/* Cerrar menú al seleccionar una sección */

document.querySelectorAll(".nav-links a").forEach(link => {

  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });

});


/* =========================
   NAVBAR ON SCROLL
========================= */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

  if (window.scrollY > 80) {

    navbar.style.background = "rgba(17, 24, 39, 0.97)";

  } else {

    navbar.style.background = "rgba(17, 24, 39, 0.88)";

  }

});


/* =========================
   REVEAL ELEMENTS
========================= */

const elementsToReveal = document.querySelectorAll(
  ".stat-card, .challenge-card, .timeline-item, .prize-card, .deliverables-code div"
);

elementsToReveal.forEach(element => {
  element.classList.add("reveal");
});


const observer = new IntersectionObserver(

  entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }

    });

  },

  {
    threshold: 0.12
  }

);


elementsToReveal.forEach(element => {
  observer.observe(element);
});


/* =========================
   REGISTRATION BUTTON
========================= */

const registerButton = document.getElementById("registerButton");

registerButton.addEventListener("click", event => {

  /*
    Cuando pongamos el link real del formulario,
    puedes borrar esta sección completa.
  */

  if (registerButton.getAttribute("href") === "#") {

    event.preventDefault();

    alert(
      "Muy pronto estarán disponibles las inscripciones para TEC·ONOMETRICS CUP 2026."
    );

  }

});
