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
document.write("<h1>De " + inicio + " a " + fin + " están estos números:</h1>");

// Recorrer con un bucle
for (var i = inicio+1; i <= fin-1; i++) {
  document.write(i + "<br/>");
}

