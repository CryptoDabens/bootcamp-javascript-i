export default function hamburgerMenu(panelBtn, panel, menuLink) {
  const d = document;

  d.addEventListener("click", (e) => {
    // Activar/desactivar menú al hacer clic en el botón o sus hijos
    if (e.target.matches(panelBtn) || e.target.closest(panelBtn)) {
      d.querySelector(panel).classList.toggle("is-active");
      d.querySelector(panelBtn).classList.toggle("is-active");
    }

    // Cerrar menú al hacer clic en un enlace del menú
    if (e.target.matches(menuLink)) {
      d.querySelector(panel).classList.remove("is-active");
      d.querySelector(panelBtn).classList.remove("is-active");
    }
  });
}