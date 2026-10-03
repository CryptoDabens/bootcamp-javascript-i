// --------------------------------------
// • Define la clase ingreso, que extiende de la clase padre Dato.
// • Define la variable estática contadorIngresos e iguálala a 0.
// • Crea el constructor de la clase en el que recibas los parámetros descripción y valor.
// • En el cuerpo del constructor, invoca al constructor de la clase padre, la cual debe recibir los parámetros descripción y valor.
// • Define el atributo _id y para asignarle un valor, utiliza el tipo de variable estática "static".
// Realiza un preincremento a la variable estática de la clase Ingresos.
// • Crea el método get id, el cual va a regresar el valor de this._id, no agregues el método
// set porque este valor no deberá ser modificado.
// --------------------------------------

// Definición de la clase Ingreso, que extiende de la clase padre Dato.
class Ingreso extends Dato {
    static contadorIngresos = 0; // Variable estática que se va a incrementar cada vez que se cree un nuevo ingreso, para asignarle un id único a cada ingreso.
    
    // Constructor de la clase Ingreso, que recibe los parámetros descripción y valor.
    constructor(descripcion, valor) { 
        super(descripcion, valor); // Invoca al constructor de la clase padre, la cual debe recibir los parámetros descripción y valor.
        this._id = ++Ingreso.contadorIngresos; // Se hace un preincremento a la variable estática de la clase Ingresos.
    }

    get id() {
        return this._id; // Regresa el valor de this._id, no agregues el método set porque este valor no deberá ser modificado.
    }

};