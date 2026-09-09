//prueba con var

var numero = 30;

console.log(numero); //valor esperado 30

if (true) {

    var numero = 40;

    console.log(numero); //valor esperado 40

}

console.log(numero); //¿Cuál es el valor de la variable numero?

//Prueba con let

var texto = "Curso de JS";

console.log(texto); //valor esperado “Curso de JS”

if (true) {

    let texto = "Curso de PHP";

    console.log(texto); // valor "Curso de PHP";

}

console.log(texto); // Cuál es el valor de texto?