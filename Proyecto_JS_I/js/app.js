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
// Crear función EliminarEgreso, que reciba como parámetro el id del egreso a eliminar. 
// Dentro de la función, declara la variable indiceEliminar y asígnale el valor del índice del egreso a eliminar, usando el método findIndex() del arreglo egresos. 
// El método findIndex() recibe una función de callback que compara el id del egreso con el id pasado como parámetro. Luego, usa el método splice() del arreglo egresos para eliminar el egreso en el índice encontrado. 
// Finalmente, llama a las funciones cargarCabecero() y cargarEgresos() para actualizar la vista.

const eliminarEgreso = (id) => { 
    let indiceEliminar = egresos.findIndex(egreso => egreso.id === id); // findIndex() devuelve el índice del primer elemento que cumple con la condición de la función de callback. En este caso, busca el índice del egreso cuyo id sea igual al id pasado como parámetro.
    egresos.splice(indiceEliminar, 1); // splice() elimina el elemento en el índice encontrado. El segundo parámetro indica cuántos elementos eliminar, en este caso 1.
    cargarCabecero(); // para actualizar el presupuesto y los porcentajes después de eliminar un egreso.
    cargarEgresos(); // para actualizar la lista de egresos después de eliminar un egreso.
};


// Continuación Avance 4: Eliminar Ingreso dinámicamente (página 16) (este código es NO VIENE EN LA GUIA)
const eliminarIngreso = (id) => {
    let indiceEliminar = ingresos.findIndex(ingreso => ingreso.id === id);
    ingresos.splice(indiceEliminar, 1);
    cargarCabecero();
    cargarIngresos();  
}



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
    // 1. Obtener valores del formulario
    let forma = document.getElementById('forma'); // Se obtiene el elemento del formulario con id "forma" y se asigna a la variable forma.
    let tipo = forma['tipo'].value; // Se obtiene el valor del elemento del formulario con name "tipo" y se asigna a la variable tipo. El valor puede ser "ingreso" o "egreso".
    let descripcion = forma['descripcion'].value; // Se obtiene el valor del elemento del formulario con name "descripcion" y se asigna a la variable descripcion. El valor es una cadena de texto.
    let valor = forma['valor'].value; // parse float no es necesario porque se convierte a numérico con el "+" en la línea 108 y 112.

    // 2. Validar que no estén vacíos
    if (descripcion !== '' && valor !== '') {
        if(tipo === 'ingreso') { // 3. Si es ingreso: crear, agregar, actualizar vistas
            ingresos.push(new Ingreso(descripcion, +valor)); // con un "+" se puede convertir a numérico
        cargarCabecero();
        cargarIngresos();
        }
        else { // 4. Si es egreso: crear, agregar, actualizar vistas
            egresos.push(new Egreso(descripcion, +valor));
            cargarCabecero();
            cargarEgresos();
        }
         // 5. Limpiar formulario después de agregar un dato
        document.getElementById('forma').reset();
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
