// Solicitar dos números al usuario
var numero1 = parseFloat(prompt("Introduce el primer número", 0));
var numero2 = parseFloat(prompt("Introduce el segundo número", 0));

// Validar que sean números
while (isNaN(numero1) || isNaN(numero2) || numero1 < 0 || numero2 < 0) {
  alert("Por favor, introduce solo números mayores o iguales a 0.");
  numero1 = parseFloat(prompt("Introduce el primer número", 0));
  numero2 = parseFloat(prompt("Introduce el segundo número", 0));
}

// Determinar el orden (por si numero1 > numero2)
var inicio = Math.min(numero1, numero2);
var fin = Math.max(numero1, numero2);

var resultado = 
"La suma es:" + (numero1 + numero2) + "<br/>" + 
"La resta es:" + (numero1-numero2) + "<br/>" +
"La multiplicación es: " + (numero1*numero2) + "<br/>" +
"La división es: " + (numero1/numero2) + "<br/>";


var resultadoCMD = 
"La suma es:" + (numero1 + numero2) + "\n" + 
"La resta es:" + (numero1-numero2) + "\n" +
"La multiplicación es: " + (numero1*numero2) + "\n" +
"La división es: " + (numero1/numero2) + "\n";

document.write(resultado); //Imprime en el HTML el contenido de la variable resultado
alert(resultadoCMD); // Imprime en una alerta el contenido de la vartiable
console.log(resultadoCMD); // Imprime en la consola el contendio de la variable resultadoCMD