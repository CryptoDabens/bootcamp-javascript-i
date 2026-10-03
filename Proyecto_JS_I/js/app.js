// ------------------------------------------------------
// Inicio del Avance 1
// ------------------------------------------------------

// Validar función cargarCabecero con arreglos de prueba
// let egresos = [900,400];
// let ingresos = [9000,400];

// Arreglos definitivos
const ingresos = [
    new Ingreso('Salario', 10000),
    new Ingreso('Venta auto', 300000),
    new Ingreso('Honorarios', 5000)
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


// ------------------------------------------------------
// Avance 4: Cargar ingresos dinámicamente (página 14)
// ------------------------------------------------------
const cargarIngresos = () => {
    let ingresosHTML = '';

    for (let ingreso of ingresos) {
        ingresosHTML += crearIngresoHTML(ingreso); // el += es para concatenar cada ingreso que se vaya creando en la función crearIngresoHTML
    }
    document.getElementById('lista-ingresos').innerHTML = ingresosHTML; /* Esta versión corta conviene cuando se va a usar el elemento una sola vez en la función. Se lee en un solo paso y no se hace doble llamado al DOM. */

    //  const listaIngresos = document.getElementById('lista-ingresos');
    //  listaIngresos.innerHTML = ingresosHTML; 
    //  Es otra forma de hacerlo, pero no es la más recomendable. Conviene usar cuando vas a usar el elemento varias veces en la misma función. La ventaja es que se lee en dos pasos claros y no buscas el elemento en el DOM cada vez.
};

const crearIngresoHTML = ingreso => {
    let ingresoHTML = `
        <div class="elemento limpiarEstilos">
            <div class="elemento_descripcion">${ingreso.descripcion}</div> 
            <div class="derecha limpiarEstilos">
                <div class="elemento_valor">${formatoMoneda(ingreso.valor)}</div>
                <div class="elemento_eliminar">
                    <button class="elemento_eliminar--btn" onclick="eliminarIngreso(${ingreso.id})">
                        <ion-icon name="close-circle-outline"></ion-icon>
                    </button>
                </div>
            </div>
        </div>  
        `;
    // Se cambió "Salario" por ${ingreso.descripcion} para que se muestre la descripción de cada ingreso.
    // Se cambió "+2,200.00" por ${formatoMoneda(ingreso.valor)} para que se muestre el valor de cada ingreso.
    // Se cambió onclick="eliminarIngreso(1)" por ${onclick} = eliminarIngreso(${ingreso.id}) para que se pueda eliminar el ingreso correspondiente al id del ingreso.
        
    return ingresoHTML;    
};


// Llamar a la función cargarCabecero
// cargarCabecero(); <-- Queda sustituida por el Avance 4 en la función cargarApp, que se ejecutará al cargar la página.

const cargarApp = () => {
    cargarCabecero();
    cargarIngresos();
}



