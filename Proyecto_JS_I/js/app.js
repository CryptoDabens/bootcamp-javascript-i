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

// Función formatoMoneda, pa darle formato: estilo moneda, mondea MXN, y decimales igual a dos dígitos.
/* const formatoMoneda = valor => {
    const opciones= {
        style: "currency",
        currency: "MXN",
        minimumFractionDigits: 2
    }
    return valor.toLocaleString("es-MX", opciones);
};*/

/*// Código Leticia
const formatoMoneda = (valor) => {
  return valor.toLocaleString("es-MX", {
    style: "currency",
    currency: "MXN",
    minimumFractionDigits: 2
  });
};*/

// Código Fabiola
const formatoMoneda = (valor) => {
    return valor.toLocaleString("es-MX", {
        style: "currency",
        currency: "MXN",
        currencyDisplay: "symbol"
    }) + " MXN"; // concatena el símbolo de la moneda al final del valor formateado
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
    /* Declara la variable egresoHTML y asígnale, por medio de template string, el contenido
del div lista-egresos con los siguientes cambios:
• En lugar de escribir una cadena en el div elemento-descripcion, toma el contenido
de egreso.descripcion. 
• En el contenido del div elemento-valor, asígnale el valor del elemento egreso
pasado por la función formatoMoneda.
• En el ícono close-circle-outline, asígnale el evento onclick e iguálalo a la función
eliminarEgreso y pásale como parámetro el id del elemento egreso.*/
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
// Avance 4: Eliminar Egresos dinámicamente (página 16)
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


// Continuación Avance 4: Darle funcionalidad al formulario
const agregarDato = () => {
    let forma = document.getElementById('forma');
    let tipo = forma['tipo'].value;
    let descripcion = forma['descripcion'].value;
    let valor = forma['valor'].value;

    if (descripcion !== '' && valor !== '') {
        if(tipo === 'ingreso') {
            ingresos.push(new Ingreso(descripcion, +valor)); // con un "+" se puede convertir a numérico
        cargarIngresos();
        }
        else {
            egresos.push(new Egreso(descripcion, +valor));
            cargarEgresos();
        }
        cargarCabecero();
        document.getElementById('forma').reset();
    }
};

// ----------------------------------------------

// Llamar a la función cargarCabecero
// cargarCabecero(); <-- Queda sustituida por el Avance 4 en la función cargarApp, que se ejecutará al cargar la página.

const cargarApp = () => {
    cargarCabecero();
    cargarIngresos();
    cargarEgresos();
};



