// Declaración de Variables

// Validar función cargarCabecero: usar estos arreglos prueba
let egresos = [900,400];
let ingresos = [9000,400];

// Crear función "cargarCabecero" para mostrar la diferencia entre ingresos y egresos
const cargarCabecero = ()  => {
    const presupuesto = (totalIngresos() - totalEgresos());
    const porcentajeEgreso = totalEgresos() / totalIngresos();
    console.log(formatoMoneda(presupuesto));
    console.log(formatoPorcentaje(porcentajeEgreso));
    console.log(formatoMoneda(totalIngresos()));
    console.log(formatoPorcentaje(totalEgresos()));
    
};

// Crear funciones para sumar ingresos
const totalIngresos = () => {
    let totalIngreso = 0;
    for (let ingreso of ingresos) {
        totalIngreso += ingreso;
    }
    return totalIngreso; 
};
 // Crear funciones para sumar egresos
const totalEgresos = () => {
    let totalEgreso = 0;
    for (let egreso of egresos) {
        totalEgreso += egreso;
    }
    return totalEgreso; 
};



//const presupuesto = cargarCabecero(ingresos, egresos);


// ------------------------------------------------------
// Avance 2, parte 2: Formatear valores y procentajes
// ------------------------------------------------------

// Función formatoMoneda, pa darle formato: estilo moneda, mondea MXN, y decimales igual a dos dígitos.
const formatoMoneda = valor => {
    const opciones= {
        style: "currency",
        currency: "MXN",
        minimumFractionDigits: 2
    }
    valor.toLocaleString("es-MX", opciones);
    return valor;
};

// Función formatoPorcentaje
const formatoPorcentaje = valor => {
    const opciones = { 
        style: "percent",
        minimunFractionDigits: 2
    }
    valor.toLocaleString("es-MX", opciones);
    return valor;
};

cargarCabecero();
// ------------------------------------------------------
// Fin del Avance 2
// ------------------------------------------------------