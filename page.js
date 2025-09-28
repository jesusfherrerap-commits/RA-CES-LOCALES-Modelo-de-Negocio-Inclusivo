/* ============================================================
   Scroll suave para los enlaces de navegación internos
   ============================================================ */
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach(link => {
    link.addEventListener("click", e => {
      // Prevenir el salto brusco
      e.preventDefault();

      const targetId = link.getAttribute("href").slice(1); // quitar el "#"
      const target = document.getElementById(targetId);

      if (target) {
        window.scrollTo({
          top: target.offsetTop - 20, // un pequeño offset
          behavior: "smooth"
        });
      }
    });
  });
});
