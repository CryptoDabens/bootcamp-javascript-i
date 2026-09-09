// 1. Crear una variable web con un valor inicial
let web = "https://www.google.com";

// 2. Crear una constante ip con un valor fijo
const ip = "192.168.1.100";

// Mostrar resultados iniciales
console.log("Valor inicial de web:", web);
console.log("Valor inicial de ip:", ip);

// 3. Cambiar el valor de la variable web
web = "https://www.facebook.com";
console.log("Nuevo valor de web:", web);

// 4. Intentar cambiar el valor de la constante ip
try {
    ip = "10.10.1.100"; // Esto generará un error
} catch (error) {
    console.error("Error al intentar cambiar ip;", error.message);
}

// 5. Mostrar mensaje en pantalla
document.write("<h2>Ejercicio 4 en ejecución</h2>");
document.write("<p>Revisa la consola para observar el comportamiento de la varialbe y la constante.</p>");
