var suma = 0;
var contador = 0;
var numero = 0; // para guardar cada valor introducido5


while (numero >= 0) {
    numero = parseInt(prompt("Introduce números hasta que uno sea negativo:", 0)); // EL cero es el valor de default

// Validar si no es numérico
    if(isNaN(numero)) {
    numero = 0; // Si no es número, lo tratamos como 0
}

// Verificar si el npumero es negativo -> romper el bucle
if(numero < 0) {
    break;
}
// Acumular suma e incrementar contador
suma += numero;
contador++;

// Mostrar avance en consola
console.log("Número introducido:", numero);
console.log("Suma actual:", suma, "contador:", contador);
}

// Cuando termina el bucle, calcular resultados
var media = suma / contador;

alert("La suma de todos los npumeros es: " + suma + 
    "\nLa media de todos los números es: " + media); // el \n es un salto de línea \t es tabulador
