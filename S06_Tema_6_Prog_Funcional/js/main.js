const compose = (...functions) => data =>
    functions.reduceRight((value, func) => func(value), data)

// =====================================================
// REFERENCIAS Y ESTADO
// =====================================================
const descripcion = $('#descripcion');
const calorias = $('#calorias');
const carbohidratos = $('#carbohidratos');
const proteina = $('#proteina');

const lista = [];

// =====================================================
// LIMPIEZA VISUAL DE ERRORES
// =====================================================
descripcion.keypress(() => descripcion.removeClass('is-invalid'));
calorias.keypress(() => calorias.removeClass('is-invalid'));
carbohidratos.keypress(() => carbohidratos.removeClass('is-invalid'));
proteina.keypress(() => proteina.removeClass('is-invalid'));


// =====================================================
// VALIDACION DE INPUTS
// =====================================================
const validarInput = function () {
    
    descripcion.val()
        ? descripcion.removeClass('is-invalid')
        : descripcion.addClass('is-invalid');
    
    calorias.val()
        ? calorias.removeClass('is-invalid')
        : calorias.addClass('is-invalid');
    
    carbohidratos.val()
        ? carbohidratos.removeClass('is-invalid')
        : carbohidratos.addClass('is-invalid');
    
    proteina.val()
        ? proteina.removeClass('is-invalid')
        : proteina.addClass('is-invalid');
    
    if(descripcion.val() && calorias.val() && carbohidratos.val() && proteina.val()) {
        agregar();
    }        
};

// =====================================================
// AGREGAR DATOS - Función expresada
// =====================================================

const agregar = function () {
    
    const nuevoElemento = {
        descripcion : descripcion.val(),
        calorias : parseInt(calorias.val()),
        carbohidratos: parseInt(carbohidratos.val()),
        proteina: parseInt(proteina.val())
    };

    lista.push(nuevoElemento);
    
    limpiarInputs();

    actualizarTotales();
    renderElementos();
};

/*const limpiarInputs = function () { 
    descripcion.val('');
    calorias.val('');
    carbohidratos.val('');
    proteina.val('');
};*/

const limpiarInputs = () => {
    descripcion.val('');
    calorias.val('');
    carbohidratos.val('');
    proteina.val('');
};


// =====================================================
// RENDER DE TABLA
// =====================================================
const atrsToCadena = (tag, clases) => {
    const keys = Object.keys(clases);
    const atributos = [];

    for (let i = 0; i < keys.length; i++) {
        const atributo = `${keys[i]}="${clases[keys[i]]}"`;
        atributos.push(atributo);
    }

    const cadenaAtributos = atributos.join(' ');
    return `<${tag} ${cadenaAtributos}>`;
};

const atrsTag = (objeto, contenido) => {
    const { tag, attrs } = objeto;

    if (!attrs || Object.keys(attrs).length === 0) {
        return `<${tag}>${contenido}</${tag}>`;
    }
    const apertura = atrsToCadena(tag, attrs);

    return `${apertura}${contenido}</${tag}>`;
};

// Validación si es String
const tag = (t, contenido) => {

    if (typeof t === 'string') {
        return atrsTag({ tag: t }, contenido);
    }

    return atrsTag(t, contenido);
};

const iconoBorrar = tag(
    { tag: 'i', attrs: { class: 'fas fa-trash-alt' } },
    '' // <-- ¿Por qué se pasa vacío?
);

const celdaTabla = contenido => tag('td', contenido);
const celdasTabla = arreglo => arreglo.map(celdaTabla).join('');
const filaTablaTag = contenido => tag('tr', contenido);
const filaTabla = elementos => compose(filaTablaTag, celdasTabla)(elementos);



const renderElementos = () => {
    // a. Vacía el contenido actual del tbody
    $('#tbody').empty();

    // b. Recorre la lista y pinta cada elemento
    lista.map((item, indice) => {
        // Crea el botón eliminar
        const botonEliminar = tag(
            {
                tag: 'button',
                attrs: {
                    class: 'btn btn-outline-danger',
                    onclick: `eliminarElemento(${indice})`
                }
            },
            iconoBorrar
        );

        const fila = filaTabla([
            item.descripcion,
            item.calorias,
            item.carbohidratos,
            item.proteina,
            botonEliminar
        ]);

        // c. Inserta la fila en el tbody
        $('#tbody').append(fila);
    });
};

// =====================================================
// CALCULO TOTALES
// =====================================================
const actualizarTotales = () => {
    let calorias = 0;
    let carbohidratos = 0;
    let proteina = 0;

    lista.map(item => {
        calorias += item.calorias;
        carbohidratos += item.carbohidratos;
        proteina += item.proteina;
    });

    $('#totalCalorias').text(calorias);
    $('#totalCarbohidratos').text(carbohidratos);
    $('#totalProteina').text(proteina);
};