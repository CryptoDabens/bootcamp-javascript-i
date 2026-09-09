// Creación de variables
let numero1 = 7;
let numero2 = 15;

//variables de operación
let suma = numero1 + numero2;
let resta = numero1 - numero2;
let multiplicacion = numero1 * numero2;
let division = numero1 / numero2;

// Mostrar los resultados con alertas
alert("El resultado de la suma es: " + suma);
alert("El resultado de la resta es: " + resta);
alert("El resultado de la multiplicación es: " + multiplicacion);
alert("El resultado de la división es: " + division);

let numero_entero = 24;
let cadena_texto = "Hola 'que' tal";
let verdadero_o_falso = true;
let numero_falso = "33";

let suma_incorrecta = numero_entero + numero_falso;

console.log(suma_incorrecta);
alert(suma_incorrecta); 

let numero_falso_entero = parseInt(numero_falso);
// Ahora la suma será aritmética
let suma_correcta = numero_entero + numero_falso_entero;
alert("Convertido a emntero: numero_entero + numero_falso_entero = " + suma_correcta);

let numero_entero_string = numero_entero.toString();
let suma_string = numero_entero_string + 9;
alert("Convertido a string y sumado a 9: " + suma_string);

console.log("Tipo de numero_entero:", typeof numero_entero); // number
console.log("Tipo de cadena_text:", typeof cadena_texto); // string
console.log("Tipo de verdadero_o_falso:", typeof verdadero_o_falso); // boolean
console.log("Tipo de numero_falso:", typeof numero_falso); // string
console.log("Tipo de nuermo_falso_entero:", typeof numero_falso_entero); // number
