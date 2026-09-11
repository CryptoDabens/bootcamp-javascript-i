// Solicitar dos números al usuario
var numero1 = parseInt(prompt("Introduce el primer número", 0));
var numero2 = parseInt(prompt("Introduce el segundo número", 0));

// Validar que sean números
while (isNaN(numero1) || isNaN(numero2)) {
  alert("Introduce solo valores numéricos.");
  numero1 = parseInt(prompt("Introduce el primer número", 0));
  numero2 = parseInt(prompt("Introduce el segundo número", 0));
}

// Determinar el orden (por si numero1 > numero2)
var inicio = Math.min(numero1, numero2);
var fin = Math.max(numero1, numero2);




// Mostrar encabezado en el documento
document.write("<h1>Números impares entre " + inicio + " y " + fin + ":</h1>");

// Recorrer con while y mostrar solo pares
var i = inicio;
while (i <= fin) {
  if (i % 2 !== 0) { // verificar si es impar
    document.write(i + "<br/>"); //mostrar en el HTML
}
i++
}