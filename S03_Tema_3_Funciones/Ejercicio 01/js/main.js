function miFuncion(){
    return "Hola Mundo";
}

function contarCaracteres(cadena = "") { // Crear una función contar caracteres
    if(!cadena) {
        console.warn("No ingresaste nunguna cadena"); // warn: lanza alerta
    } else {
        console.log(`La cadena "${cadena}" tiene ${cadena.length} caracteres.`); //OJO con el acento invertido al inicio y al final de la cadena
    }
} 

// Llamadas de prueba
contarCaracteres("");
contarCaracteres("Hello World");
contarCaracteres("Curso de JavaScript Tema 3 - Funciones");

// Operador ternario
// Es una forma abreviada de escribir una condición if/else.
// Evalúa una expresión lógica y devuelve un valor u otro según el resultado.
// Sintaxis
// condicion ? valorSiVerdadero : valorSiFalso
let edad = 18;
let mensaje = edad >=18 ? "Eres mayor de edad" : "Eres menor de edad";
console.log(mensaje);

// En versión flecha
const contarCaracteresArrow = (cadena = "") => 
    !cadena ? 
  console.warn("No ingresaste nunguna cadena") 
: console.log(`La cadena "${cadena}" tiene ${cadena.length} caracteres.`); // Condición ? valorSiVerdadero : valorSiFalso

// Llamadas de Prueba
contarCaracteresArrow("");
contarCaracteres("Buenas tardes");
contarCaracteres("Nueva invocación");