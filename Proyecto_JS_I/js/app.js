// ------------------------------------------------------
// Inicio del Avance 1
// ------------------------------------------------------

// Validar función cargarCabecero con arreglos de prueba
// let egresos = [900,400];
// let ingresos = [9000,400];

// Arreglos definitivos
const ingresos = [
    new Ingreso('Salario', 20000),
    new Ingreso('Venta auto', 50000)
];

const egresos = [
    new Egreso('Renta', 4000),
    new Egreso('Ropa', 800)
];


// ------------------------------------------------------
// Funcion cargarCabecero
// ------------------------------------------------------
const cargarCabecero = ()  => {
    let presupuesto = (totalIngresos() - totalEgresos());
    let porcentajeEgreso = totalEgresos() / totalIngresos();

    document.getElementById('presupuesto').innerHTML = formatoMoneda(presupuesto);
    document.getElementById('porcentaje').innerHTML = formatoPorcentaje(porcentajeEgreso);
    document.getElementById('ingresos').innerHTML = formatoMoneda(totalIngresos());
    document.getElementById('egresos').innerHTML = formatoMoneda(totalEgresos());
    
    /* Sustituido por el Avance 4
    console.log(formatoMoneda(presupuesto));
    console.log(formatoPorcentaje(porcentajeEgreso));
    console.log(formatoMoneda(totalIngresos()));
    console.log(formatoMoneda(totalEgresos())); 
    */
};

// Crear funciones para sumar ingresos
const totalIngresos = () => {
    let totalIngreso = 0;
    for (let ingreso of ingresos) {
        totalIngreso += ingreso.valor;
    }
    return totalIngreso; 
};
 // Crear funciones para sumar egresos
const totalEgresos = () => {
    let totalEgreso = 0;
    for (let egreso of egresos) {
        totalEgreso += egreso.valor;
    }
    return totalEgreso; 
};

// ------------------------------------------------------
// Fin del Avance 1
// ------------------------------------------------------

// ------------------------------------------------------
// Inicio Avance 2, parte 2: Formatear valores y procentajes
// ------------------------------------------------------

// Función formatoMoneda, pa darle formato: estilo moneda, mondea MXN, y decimales igual a dos dígitos.
const formatoMoneda = valor => {
    const opciones= {
        style: "currency",
        currency: "MXN",
        minimumFractionDigits: 2
    }
    return valor.toLocaleString("es-MX", opciones);
};

// Función formatoPorcentaje
const formatoPorcentaje = valor => {
    const opciones = { 
        style: "percent",
        minimumFractionDigits: 2
    }
    return valor.toLocaleString("es-MX", opciones);
};


// Llamar a la función cargarCabecero
// cargarCabecero(); <-- Queda sustituida por el Avance 4 en la función cargarApp, que se ejecutará al cargar la página.

const cargarApp = () => {
    cargarCabecero();
}

// ------------------------------------------------------
// Fin del Avance 2
// ------------------------------------------------------