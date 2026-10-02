// Importar la función desde su ruta
import hamburgerMenu from "./hamburger.js";
import { digitalClock, alarm } from "./reloj.js";
import { shortcuts, moveBall } from "./teclado.js";
import countDown from "./cuenta_regresiva.js";

// Crear una constante para document
const d = document;

// Escuchar la carga del documento
d.addEventListener("DOMContentLoaded", () => {
  
  // Ejecutar la función hamburgerMenu con los selectores correspondientes
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  
  // Activar Reloj Digital
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
  
  // Activar alarma
  alarm("assets/alarma.mp3", "#activar-alarma", "#desactivar-alarma");

  // Iniciar cuenta regresiva
  countDown("countdown", "Oct 1, 2026 20:28:01", "Feliz Cumpleaños!!");
});

// Para desencadenar el evento utiliza addEventLuistener y pásale como parámetro
d.addEventListener("keydown", e => {
  shortcuts(e); // Ejecutamos combinaciones especiales de teclado
  moveBall(e, ".ball", ".stage"); // Mueve la pelota con las flechas del teclado
}
);
 

d.addEventListener("keyup", e => shortcuts(e)); //se activa cuando sueltas una tecla
d.addEventListener("keypress", e => shortcuts(e)); // se activa cuando presionas una tecla que genera un caracter (no funciona con todas las teclas).