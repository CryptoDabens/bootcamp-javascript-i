// a. Asigna a la constante d la clase document.
const d = document;
let x= 0;
let y= 0;

// b. Exporta la función shortcuts que va a recibir el evento representado con la letra e.
export function shortcuts(e) {

    // c. Imprime en la consola el tipo de evento recibido ("keydown", "click", "submit").
    console.log("Tecla presionada: " + e.type); 

    // d. Imprime en la consola también el evento recibido.
    console.log(e);

    // Imprimimos propiedades específicas para analizar el comportamiento
    console.log(`Tecla presionada: ${e.key}`);
    console.log(`Código de la tecla: ${e.keyCode}`);
    console.log(`Ctrl presionado: ${e.ctrlKey}`);
    console.log(`Alt presionado: ${e.altKey}`);
    console.log(`Shift presionado: ${e.shiftKey}`);

    if (e.key === "a" && e.altKey) {
        alert("Has lanzado una alerta con el teclado");
    }

    if (e.key === "c" && e.altKey) {
        confirm("Has lanzado una confirmación con el teclado");
    }

    if (e.key === "p" && e.altKey) {
        prompt("Has lanzado un aviso con el teclado");
    }
}

// Función que mueve la pelota dentro del escenario
export function moveBall(e, ball, stage) {
    
    // Seleccionamos los elementos del DOM
    const $ball = d.querySelector(ball);
    const $stage = d.querySelector(stage);
    
    // Obtenenmos los límites de cada elemento
    const limitsBall = $ball.getBoundingClientRect();
    const limitsStage = $stage.getBoundingClientRect();


// Evaluamos la tecla presionada usando keyCode
switch (e.keyCode) {
    // Flecha izquierda
    case 37:
      if (limitsBall.left > limitsStage.left) {
        e.preventDefault(); // Evita el scroll horizontal
        x--; // Mueve la pelota hacia la izquierda
      }
      break;

    // Flecha arriba
    case 38:
      if (limitsBall.top > limitsStage.top) {
        e.preventDefault(); // Evita el scroll vertical
        y--; // Mueve la pelota hacia arriba
      }
      break;
  
    // Flecha derecha
    case 39:
      if (limitsBall.right < limitsStage.right) {
        e.preventDefault(); // Evita el scroll horizontal
        x++; // Mueve la pelota hacia la derecha
      }
      break;

    // Flecha abajo
    case 40:
      if (limitsBall.bottom < limitsStage.bottom) {
        e.preventDefault(); // Evita el scroll vertical
        y++; // Mueve la pelota hacia abajo
      }
      break;
    
    // Cualquier otra tecla no hace nada
    default:
        console.log("Tecla no asignada para mover la pelota");  
        break;
    }

    // Aplicamos la transformación a la pelota usando translate
    $ball.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
}
