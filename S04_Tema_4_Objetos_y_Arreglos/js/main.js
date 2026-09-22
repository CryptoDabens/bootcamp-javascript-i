// Buenas prácticas
// 

// Paso 1.
// Objeto principal del juego
const juego = {
    
    //1er propiedad del objeto
    opciones : ["🪨", "📄", "✂️"],
    
    // 2do propiedad del objeto, es un objeto que contiene 2 propiedades
    nombreJugadores : {
        jugador1 : "jugador1",
        jugador2 : "Computadora"
    },
    // 3ra propiedad del objeto
    scores: {
        puntosJ1 : 0,
        puntosJ2 : 0
    }
};
// ------------------------
//Reto: ¿Cómo cambiarías el nombre del jugador1?
// respuesta: juego.nombreJugadores.jugador1 = "Alex";
// ------------------------

//Paso 2.
// Crear una función flecha para solicitar el nombre del usuario, a través de una
// ventana de mensaje del navegador, y asígnala a la variable pegarNuevoNombre. 
// NOTA: Cuando en una función flecha no se espera parametros, se deja () vacío.
const pedirNuevoNombre = () => prompt("¿Cuál es tu nombre?");

//Paso 3.
//📝 Función para validar y asignar el nombre del jugador
const cambiarNombre = function(nuevoNombre) {
    // Expresión regular: al menos una letra, puede incluir números
    const regexValido = /[A-Za-z]/; /* /^[A-Za-z0-9]+$/ */

    if (regexValido.test(nuevoNombre)) {
        // ✅ Nombre vpalido: contiene letras
        juego.nombreJugadores.jugador1 = nuevoNombre;
        console.log("Bienvenid@ " + nuevoNombre + " !");
    } else {
        // ❌ Nombre inválido: s+olo números o caracteres especiales
        console.log("Mejor te llamaré..." + juego.nombreJugadores.jugador1);
    }
};

// Paso 4. 
// Crear una funcion que genere un número aleatorio
// El valor deberpa estar entre 0 y 2, puedes utilizar el método randow de la función MAth,
// redondéalo al entero menor utilizando el método floor

// 🎲 Genera un número aleatorio entre 0 y 2 y lo convierte en cadena --> PROBAR SIN toString
const generarAleatorio = function() {
    const aleatorio = Math.floor(Math.random() * 3); // 0, 1 o 2
    return aleatorio.toString(); // lo convierte a cadena
};

// Paso 5. 
// Crear una función expresada la cual deberá tomar el número de la variable aleatorio
// y con base en las opciones del objeto juego, regresará el ícono piedra, papel o tijera 
// respectivamente, obtenido desdel objeto
const imprimirManoAleatoria = function() {
    const numero = generarAleatorio(); //obtiene número como cadena
    return juego.opciones[numero]; // accede al icono en el objeto
}

// Paso 6. 
// Crea una función expresada imprimirResultado. La funcionalidad será imprimir
// el resultado del juego, comparando si gana el jugador 1 o el jugador 2, con base en los siguientes criterios:
// a. Siel jugador 2 tiene más juegos ganados que el juegador 1, imprimir en la consola la cadena:
// "Fin del juego gana " + no,bre del jugado2 + " Gameover".
// b. Viceversa

// Imprime el resultado final del juego
const imprimirResultado = function (puntosJ1, puntosJ2) {
    if (puntosJ2 > puntosJ1) {
        console.log("Fin del juego gana " + juego.nombreJugadores.jugador2 + " - Game Over.");
    } else if (puntosJ1 > puntosJ2) {
        console.log("Fin del juego gana " + juego.nombreJugadores.jugador1 + " 🎉");
    } else {
        console.log("Empate total entre " + juego.nombreJugadores.jugador1 + " y " + juego.nombreJugadores.jugador2 + " 🤝");
    }
};

// Paso 7.
// Crear función expresada para evaluar quien gana.

const evalua = function(eleccionJ1, eleccionJ2) {
    let gana = 0;

    if (eleccionJ1 === eleccionJ2) {
        // 🤝 empate
        console.log(eleccionJ1 + " VS " + eleccionJ2 + "empatan");
    } else if 
        // c. Si el jugador 1 eligió tijeras y el jugador 2 eligió papel, 
        //    Si el jugador 1 eleigió papel y el jugador 2 eligió piedra
        //    o si el jugador 1 eligió piedra y el jugador 2 eligió tijeras:
        //    i. imprime elección jugador 1 + "gana a " + eleccion jugador 2.
        //    ii. Suma 1 a los puntos del jugador 1.
        //    iii. Asigna 1 a la variable gana    
        (
        (eleccionJ1 === "✂️" && eleccionJ2 === "📄") ||
        (eleccionJ1 === "📄" && eleccionJ2 === "🪨") ||
        (eleccionJ1 === "🪨" && eleccionJ2 === "✂️")
        ) 
        {
        // 🥇 Gana Jugador 1
        console.log(eleccionJ1 + " gana a " + eleccionJ2);
        juego.scores.puntosJ1 += 1;
        gana = 1;
    } else {
        //  d. En caso contrario:
        //      i. imprime elección jugador 2 + "gana a " + eleccion jugador 1.
        //      ii. Suma 1 a los puntos del jugador 2.
        //      iii. Asigna 2 a la variable gana.
        
        
        
        // 🥇 Gana jugador 2
        console.log(eleccionJ2 + " gana a " + eleccionJ1);
        juego.scores.puntosJ2 += 1;
        gana = 2;
    }

    // e. Con el resultado de la condificonal, llama a la función resultado y pásale
    //    como argumento la variable gana para imprimir en pantalla quien ganal a partida. 
    // 🧾 Imprime el marcador actual
    resultado(gana);

};

// Paso 8.
// Crear la función expresada "resultado" para saber quien gana. Recibe como parametro "gana"
// donde si gana = 0 significa empate, gana=1 -> gana el jugador 1 y gana=2 -> gana el Jugador 2

const resultado = function(gana) {
    const j1 = juego.nombreJugadores.jugador1;
    const j2 = juego.nombreJugadores.jugador2;
    const p1 = juego.scores.puntosJ1;
    const p2 = juego.scores.puntosJ2;

    if(gana === 0) {
        console.log(`${j1} :[${p1}]   ${j2} :[${p2}]`);
    } else if (gana === 1) {
        console.log(`${j1} :[${p1}]   ${j2} :[${p2}]`);
    } else {
        console.log(`${j1} :[${p1}]   ${j2} :[${p2}]`);
    }
};

// Paso 9.
// Crear en la función expresada "principal" para el programa y n+ombrala "main":
//  a. Crea un bucle while para que se ejecute mientras el valor sea menor a 3.
//  b. Dentro del bucle, declara la variable jugador1Hand y asignale el calor de la función "imprimirManoAleatoria()"
//  c. Ahora, declara la variable "jugador2Hand" y asígnale el valor de la función "imprimirManoAleatoria()".
//  d. Imprime en consola el nombre del jugador1 y su elección aleatoria.
//  e. Imprime en consola el nombre del jugador2 y su elección aleatoria.
//  f. Llama a la función evalua y pásale como argumentos las elecciones aleatorias de los jugadores.
//  g. Como el juego termina cuando alguno de los jugadores gana 3 partidas, evalúa si alguno llegó a 3, en ese caso,
//     llama a la función "imprimirResultado"y pásale como parámetro los puntos del jugador 1 y del jugador 2.
//  h. Fuerza a salir de la función utilizando el comando "break".    

const main = function() { 
    while (juego.scores.puntosJ1 < 3 && juego.scores.puntosJ2 < 3) 
    {
        // Generar manos aleatorias
        const jugador1Hand = imprimirManoAleatoria();
        const jugador2Hand = imprimirManoAleatoria();

        // Mostrar Elecciones
        console.log(juego.nombreJugadores.jugador1 + " elige: " + jugador1Hand);
        console.log(juego.nombreJugadores.jugador2 + " elige: " + jugador2Hand);

    // Evalua la ronda
    evalua(jugador1Hand, jugador2Hand);

    // Verificar si alguien ganó 3 partidas
    if (juego.scores.puntosJ1 === 3 || juego.scores.puntosJ2 === 3) 
        {
        imprimirResultado(juego.scores.puntosJ1, juego.scores.puntosJ2);
        break; // Salir del bucle
        }
    } 
};

// Paso 10.
// A jugar:
//  a. Llama ala función "cambiarNombre"
// Iniciar el juego
cambiarNombre(pedirNuevoNombre()); // Solicita y asignal el nombre del jugador;
console.log("Que comience el juego");
main(); // Ejecuta el ciclo principal del juego.

// Probar juego permitiendo que el Jugador1 pueda elegir entre piedra papel o tijera.