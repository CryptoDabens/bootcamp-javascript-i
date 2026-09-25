// Para manejar oropiedades privadas, utiliza WeakMap:
// * Crea un WeakMap llamado _private
// * Dentro del constructor, guarda las propiedades privadas usando _private.set(this, {propiedades}).
// * De esta forma, las propiedades quedarán aosciadas a la instacia pero no serán accesibles directamente desde afuera.

// Este servirá como una "lamacén secreto" donde las llaves serán nstancias de la clase (objetos creados con new Libro) y
// los valores serán los datos privados asociados 

// Paso 5. Para acceder a las propiedades, utiliza los métodos de acceso get y set
// exepto para la propieda precio. Para esta propiedad, por seguiridad, solo crea getter.
// Paso 6. Crear un método llamado obtenerTodosLosDatos que imprimirá en la consola todos los valores de la siguiente manera:

const _private = new WeakMap()

class Libro 
{ 
    constructor(titulo, autor, precio)  
    {   const propiedades = 
        {   // Por convención, a las propiedades privadas se les pone _ antes del nombre
            _titulo: titulo,
            _autor: autor,
            _precio: precio
        };

        _private.set(this, {propiedades}) // Revisar esta línea si tiene errores
    }

    // Getters y Setters
    get titulo() 
    {   return _private.get(this).propiedades['_titulo']    }

    set titulo(nuevoTitulo) 
    {   _private.get(this).propiedades['_titulo'] = nuevoTitulo;     }

    get autor() 
    {   return _private.get(this).propiedades['_autor'];    }

    set autor(nuevoAutor) 
    {   _private.get(this).propiedades['_autor'] = nuevoAutor;     }

    get precio() 
    {   return _private.get(this).propiedades['_precio'];    }
    
    // Método obtenerTodosLosDatos  
    obtenerTodosLosDatos() 
    {   console.log
        (  `Título: ${this.titulo}, 
            Autor: ${this.autor},
            Precio: ${this.precio}`
        );
    }
}

// Clase Comics
// Paso 7. Crea una clase Comic que herede desde la clase Libro con extends.
// Paso 8. Crea un constructor al que se le van a pasar las propiedades del padre y agrega la propiedad ilustradores.
// Paso 9. Utiliza la función super (sirve para invocar la clase padre) para poder utilizar las propiedades título, autor y precio de la clase padre (Libro).
// Paso 10. Define una nueva propiedad de tipo array, que se llamará "ilistradores" , para contenedr el nombre de los
// ilustradores de cada Comic y asígnale el valor pasado como argumento en el constructor.


class Comic extends Libro 
{   constructor(titulo, autor, precio, ilustradores) 
    {   super(titulo, autor, precio) //se va air al código del padre
        this.ilustradores = ilustradores
    }
    
    // Paso 11. Crear un nuevo método que se llame agregarIlustradores, el cual aceptará un arreglo como parámetro.
    // Esto método agregará ilustradores al arreglo, utiiza el método push para eso-
    agregarIlustradores(nuevosIlustradores) // Nota: los métodos dentro de las clases no necesitan llevar la palabra fucntion, 
    {   
        console.log(nuevosIlustradores);

        this.ilustradores.push(...nuevosIlustradores) 
    } /// ... los tres puntos (agregador de propagación??) son para agregar los elementos del arreglo individualmente, si el arreglo nuevosIlustradores trae otros arreglos

    // Paso 12. En la clase hij, sobreescribe el método obtenerTodosLosDatos.
    // * Llama al métedo original de la clase padre con super.obtenerTodosLosDatos()
    // * Luego, agrega un console.log para imprimir los ilustradores asociados al objeto.
    obtenerTodosLosDatos() 
    {   super.obtenerTodosLosDatos();
        console.log(`Ilustradores: ${this.ilustradores}`);
    }
}

// Paso 13. 
// Crea una nueva clase CarritoComrpas, sólo necesitarás un cosntructor y declarar un arreglo llamado productos, el cual se 
// estará llenado posteriormente
class CarritoCompras 
{
    constructor() // este es un método???
    {   this.productos = [];    }

    // Paso 14. Crea un método llamado agregarProductos, el cual recibirá dos argumentos: la cantidad y el precio del producto.
    // Crea un array dinámico para que se cree utilizando los datos de entrada.
    agregarProductos(cantidad, precio) 
    {   this.productos.push(...Array(cantidad).fill(precio));    }

    //Paso 15. Crea un método llamado mostrarProductos para mostrar los productos ingresados al array, el cuel lo único que hará
    // es imprimir en consola el contenido del arreglo productos
    mostrarProductos() 
    {   console.log(this.productos) }

    // Paso 16. Crea un método llamado calcTotal para calcular el total del contenido en el carrito de compras.
    // Es necesario hace un mapeo de los productos y con una función flecha le indicaremos que calcule el precio utilizando
    // el método reduce, el cual recibe como parámetros un acumulador (ac) y el precio (precio). El acumulador inicializará en 0
    // y en cada iteración le sumará el precio con la función flecha.
    // Nota: reduce() sirve para recorrer todos los elementos de un arreglo y convertirlos en un sólo resultado.
    calcTotal()
    {   return this.productos.reduce ( (ac, precio) => ac + precio, 0)     }

    // Paso 17. Crea una función para imprimir el total del carrito, lo unico que realizará será imprimri en la consola.
    imprimirTicket() 
    {   console.log(`Total a pagar ${ this.calcTotal()}`)    }
}

// Paso 18. Crea un nuevo objeto llamado "libro1", el cual será una instancia de la clase Libro.
// Paso 19. Crea un un nuevo objeto llamado "comic1", de la clase Comic
// Paso 20. Crea un un nuevo objeto llamado "carrito", de la clase CarritoCompras

const libro1 = new Libro("Cien años de soledad", "Gabirel García Marquez", 300);
const comic1 = new Comic("Spider-man", "Stan Lee", 150, ["Steve Ditko"]);
const carrito = new CarritoCompras();

// Paso 21. Utiliza el método agregarProducto y pásale como parámetros 2 y el precio del comic1.
// Paso 22. Utiliza el método agregarProducto y pásale como parámetros 3 y el precio del libro1.
// Paso 23. Utiliza el método mostrarProductos para visualizar el contenido del carrito.
carrito.agregarProductos(2, comic1.precio);
carrito.agregarProductos(3, libro1.precio);
carrito.mostrarProductos();

// Paso 24. Utiliza el método imprimirTicket para visualizar el total del carrito de compras (en dinero).
// PAso 25. Utiliza el método 

carrito.imprimirTicket();
libro1.obtenerTodosLosDatos();
comic1.obtenerTodosLosDatos();