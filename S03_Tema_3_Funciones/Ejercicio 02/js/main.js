// Funciones anónimas: Se almacenan en una vatiable o constante
// No tienen Hoisting --> S´+olo pueden usarse después de definirse.
// Ejemplo:

// const saludar = function(nombre) { 
//    return `Hola, ${nombre}`;
// };


// Funcion suamame con Callbacks
function sumame (a, b, callback1, callback2) {
    const suma = a + b;
    callback1(suma);
    callback2(suma*2);
}

// Llamada a la función con funciones anónimas como callbacks
sumame (
    2, 4,
    resultado => console.log("La suma es:", resultado),
    resultado => console.log("La suma por dos es:", resultado)
);

// Lklamada a la funcion con funciones flecha como callbacks

sumame(
    4, 4,
    resultado => console.log("La suma es:", resultado),
    resultado => console.log("La suma por dos es:", resultado)
);

const pelicula = function(nombre) {
    return "El nombre de la película es: " + nombre;
}

console.log(pelicula("Avengers"));

// Funcion anónima sumame
function sumame(a, b) {
    const suma = a+ b;
    console.log("La suma es: " + suma);
};

sumame(7,9);


function sumameArrow (a, b, sumaYmuestra, sumaPorDos) {
    sumaYmuestra(suma);
    sumaPorDos(suma * 2);
}