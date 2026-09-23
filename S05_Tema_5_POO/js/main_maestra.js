// Paso 4: Declaramos el WeakMap fuera de la clase para que sea compartido
const _private = new WeakMap();

// I. Creando los libros
class Libro {
  constructor(titulo, autor, precio) {
    const propiedades = {
      _titulo: titulo,
      _autor: autor,
      _precio: precio
    };
    _private.set(this, { propiedades });
  }

  // Getters y Setters
  get titulo() {
    return _private.get(this).propiedades['_titulo'];
  }

  set titulo(nuevoTitulo) {
    _private.get(this).propiedades['_titulo'] = nuevoTitulo;
  }

  get autor() {
    return _private.get(this).propiedades['_autor'];
  }

  set autor(nuevoAutor) {
    _private.get(this).propiedades['_autor'] = nuevoAutor;
  }

  get precio() {
    return _private.get(this).propiedades['_precio'];
  }

  obtenerTodosLosDatos() {
    console.log(`Título: ${this.titulo}, 
                 Autor: ${this.autor}, 
                 Precio: ${this.precio}`);
  }
}

// Usando las clases creadas
const libro1 = new Libro("Cien años de soledad", "Gabriel García Márquez", 300);
const comic1 = new Comic("Spider-Man", "Stan Lee", 150, ["Steve Ditko"]);
const carrito = new CarritoCompras();