// Solicitar dos números al usuario
var numero = parseInt(prompt("Introduce un número para obtener sus dividores", 0));

// Validar que sean números
while (isNaN(numero)) {
  alert("Introduce solo valores numéricos.");
  numero = parseInt(prompt("Introduce un número para obtener sus dividores", 0));
 
}

// Mostrar encabezado en el documento
document.write("<h1>Los divisores de " + numero + "son: </h1>");

for (var i = 1; i <= numero; i++) {
    if (numero % i === 0) { // si el residuo es 0, es divisor
        document.write("<p>Divisor: " + i + "</br>");
    }
}