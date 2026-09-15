//Función anónima para película
const pelicula = function(nombre) {
  return "El nombre de la película es: " + nombre;
};

console.log(pelicula("Avengers")); 
// Salida: El nombre de la película es: Avengers

//Función anónima para sumar dos números
function sumameAnonima(a, b) {
    const suma = a + b;
    console.log("La suma es: " + suma);
};
sumame(5, 10);

// Función sumame con callbacks
function sumameCallbacks(a, b, sumaYmuestra, sumaPorDos) {
  const suma = a + b;
  sumaYmuestra(suma);
  sumaPorDos(suma * 2);
}

// Llamada a la función con funciones anónimas como callbacks
sumameCallbacks(2, 4,
  function(resultado) {
    console.log("La suma es:", resultado);
  },
  function(resultado) {
    console.log("La suma por dos es:", resultado);
  }
);


// Llamada a la función con funciones flecha como callbacks
sumameCallbacks(
  4, 4,
  resultado => console.log("La suma es:", resultado),
  resultado => console.log("La suma por dos es:", resultado)
);



/* Salida en consola:
La suma es: 6
La suma por dos es: 12
*/

