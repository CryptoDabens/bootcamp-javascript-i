
// crear función cargarCabecero para mostrar la diferencia entre ingresos y egresos

let ingresos = [];
let egresos = [];
let porcentajeEgreso = 0;

const cargarCabecero = (totalIngresos, totalEgresos)  => {
    let presupuesto = totalIngresos() - totalEgresos();
    return presupuesto;
};



 // Crear funciones para sumar ingresos
const totalIngresos = ingresos => {
    let totalIngreso = 0;
    for (const elemento of ingresos) {
        totalIngreso =+ ingresos[elemento];
    }
    return totalIngreso; 
};
 // Crear funciones para sumar egresos
const totalEgresos = egresos => {
    let totalEgreso = 0;
    for (const elemento of egresos) {
        totalEgreso =+ egresos[elemento];
    }
    return totalEgreso; 
};

// Validar función cargarCabecero: usar estos arreglos prueba
egresos = [
    900,
    400
];

ingresos = [
    9000,
    400
];

totalEgresos();
totalIngresos();

porcentajeEgreso = totalEgresos() / totalIngresos();

console.log(totalIngresos);
console.log(totalEgresos);
