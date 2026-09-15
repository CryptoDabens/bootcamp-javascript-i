// Función expresada (Function Expression): empiezan con const + nombre = 

const factorial = function(numero) {
// Validación 1: undfined
if (numero === undefined) {
    console.warn("No ingresaste un número");
    return;
}

// Validación 2: no es número
if (typeof numero !== "number") {
    console.error(`El valor de "${numero}" ingresado NO es un número`);
    return;
}

// Valida si el número ingresado es igual a 0,
// se envíe a la consola un error que diga "El número no puede ser 0".

if (numero ===0) {
    console.error("El número no puede ser 0");
    return;
}

// Valida el número con Math.sign, en caso de ser negativo, imprime un error
// en la consola que diga "El número no puede ser negativo".
if (Math.sign(numero) === -1) {
    console.error("El número no puede ser negativo");
    return;
}


// Declarar variable para cálculo de factorial
let resultadoFactorial = 1;

// Ciclo para calcular factorial
for(let i = numero; i > 1; i--) {
    resultadoFactorial *= i; // equivale a resultadoFactorial = resultadoFActorial * i
}

// Mostrar resultado en consola
console.log(`El facotrial del número ${numero} es ${resultadoFactorial}`);

} // Fin de la función factorial


// Pruebas
factorial(0);       // error: no puede ser 0
factorial("5");     // error: no es número
factorial(1, 2, 3); // solo toma el primer argumento (1)
factorial(undefined); // warning: no ingresaste un número
factorial(-5);      // error: no puede ser negativo
factorial(5);       // resultado: 120
factorial(8);       // resultado: 40320