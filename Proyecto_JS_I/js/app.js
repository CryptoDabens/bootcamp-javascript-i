// ------------------------------------------------------
// Inicio del Avance 1
// ------------------------------------------------------

// Validar función cargarCabecero con arreglos de prueba
// let egresos = [900,400];
// let ingresos = [9000,400];

// Arreglos definitivos
const ingresos = [
    new Ingreso('Salario', 10000),
    new Ingreso('Venta Reloj', 3000),
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

// Función formatoMoneda - Código Fabiola con MXN agregado
const formatoMoneda = (valor) => {
    return valor.toLocaleString("es-MX", {
        style: "currency",
        currency: "MXN",
        currencyDisplay: "symbol"
    }) + " MXN";
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
    return ingresoHTML;
};


// ------------------------------------------------------
// Avance 4: Cargar egresos dinámicamente (página 15)
// ------------------------------------------------------

const cargarEgresos = () => {
    let egresosHTML = '';

    for (let egreso of egresos) {
        egresosHTML += crearEgresoHTML(egreso); // el += es para concatenar cada egreso que se vaya creando en la función crearEgresoHTML
    }
    document.getElementById('lista-egresos').innerHTML = egresosHTML;
};

const crearEgresoHTML = egreso => {
    let egresoHTML = `<div class="elemento limpiarEstilos">
                    <div class="elemento_descripcion">${egreso.descripcion}</div>
                    <div class="derecha limpiarEstilos">
                        <div class="elemento_valor">${formatoMoneda(egreso.valor)}</div>
                        <div class="elemento_porcentaje">${formatoPorcentaje(egreso.valor / totalEgresos())}</div>
                        <div class="elemento_eliminar">
                            <button class="elemento_eliminar--btn" onclick="eliminarEgreso(${egreso.id})">
                                <ion-icon name="close-circle-outline"></ion-icon>
                            </button>
                        </div>
                    </div>
                </div>`
    return egresoHTML;
};


// ------------------------------------------------------
// Avance 4: Eliminar ingresos dinámicamente (página 16)
// ------------------------------------------------------

const eliminarIngreso = (id) => {
    let indiceEliminar = ingresos.findIndex(ingreso => ingreso.id === id);
    ingresos.splice(indiceEliminar, 1);
    cargarCabecero();
    cargarIngresos();
};


// ------------------------------------------------------
// Avance 4: Eliminar egresos dinámicamente (página 16)
// ------------------------------------------------------

const eliminarEgreso = (id) => {
    let indiceEliminar = egresos.findIndex(egreso => egreso.id === id);
    egresos.splice(indiceEliminar, 1);
    cargarCabecero();
    cargarEgresos();
};


// ------------------------------------------------------
// Avance 4: Agregar ingresos y egresos (página 16)
// ------------------------------------------------------

const agregarDato = () => {
    let tipo = document.getElementById('tipo').value;
    let descripcion = document.getElementById('descripcion').value;
    let valor = document.getElementById('valor').value;

    if (descripcion !== '' && valor !== '') {
        if (tipo === 'ingreso') {
            const nuevoIngreso = new Ingreso(descripcion, valor);
            ingresos.push(nuevoIngreso);  // ← push() agrega el nuevo ingreso al arreglo
            cargarIngresos();
        } else {
            const nuevoEgreso = new Egreso(descripcion, valor);
            egresos.push(nuevoEgreso);    // ← push() agrega el nuevo egreso al arreglo
            cargarEgresos();
        }

        cargarCabecero();
        document.getElementById('forma').reset(); // Limpiar el formulario
    }
};


// Evento del formulario para capturar el submit
document.getElementById('forma').addEventListener('submit', (evento) => {
    evento.preventDefault(); // Evita que la página se recargue
    agregarDato();
});


const cargarApp = () => {
    cargarCabecero();
    cargarIngresos();
    cargarEgresos();
};
