
// Función expresada que reciba como argumento email e inicializado como una cadena vacía.
const validarEmail = function(email = "") {

// Validacion 1: Que se haya ingresado una cadena, en caso contrario
// informa a la consola con un warning
if(!email) {
    console.warn("No ingresaste un email");
    return;
}

// Validación 2: Valida que la cadena introducida sea del tipo "string",
// en caso contrario, regresa un error en la consola con la cadena
if (typeof email !== "string") {
    console.error(`El valor de "${email}" ingresado NO es una cadena de texto`);
    return;
}


// Declara una variable esValido e iguálala a una expresión regular:
const esValido = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(email);
// En JavaScript una expresión regular se escribe entre /.
// i: Ignora mayúsculas/minúsculas por la bandera i antes de .test(email)
// esta expresión verifica:
// La parte antes del @
// la parte del dominio
// La extensión (.com, .mx, .org)
// que todo cumpla longoitudes válidas
// ^ inicio de la cadena
// $ fin de la cadena

if (esValido) {
    console.log(`El email "${email}" es válido ✅`);
} else {
    console.warn(`El email "${email}" NO es válido ❌`);
}

}

// Invocar función (PRUEBAS)
validarEmail(); // No ingresaste un email
validarEmail(34); // El valor de "34" ingresado NO es una cadena de texto
validarEmail("usuario.apellido@universidad"); // email no válido
validarEmail("nombre_apellido@universidad.edu"); // email válido