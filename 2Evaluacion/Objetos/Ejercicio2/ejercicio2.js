/*Para guardar información sobre libros, vamos a comenzar por crear una clase "Libro", que
contendrá propiedades "autor", "titulo", "ubicacion" (todos ellos strings) y métodos Get y Set
adecuados para leer su valor y cambiarlo. Se creará un objeto de la clase Libro, le daremos valores
a sus tres propiedades (usando los set) y luego los mostrará por pantalla (usando los get). */

class Libro {
  #autor;
  #titulo;
  #ubicacion;
  constructor(autor = " ", titulo = " ", ubicacion = " ") {
    // valor por defecto
    this.autor = autor; //aqui quitamos las # porque hacemos getter y setter
    this.titulo = titulo;
    this.ubicacion = ubicacion;
  }
  get autor() {
    return this.#autor;
  }
  set autor(nuevo) {
    this.#autor = nuevo;
  }

  get titulo() {
    return this.#titulo;
  }
  set titulo(nuevo) {
    this.#titulo = nuevo;
  }

  get ubicacion() {
    return this.#ubicacion;
  }
  set ubicacion(nuevo) {
    this.#ubicacion = nuevo;
  }
}

let libro1 = new Libro();
libro1.autor = "Autor";
libro1.titulo = "Camino";
libro1.ubicacion = "Zafra";
alert(libro1.autor + libro1.titulo + libro1.ubicacion);

/* this.#atributo = valor	Asigna directo al atributo privado	No quieres que se ejecute la lógica del setter
this.atributo = valor	Llama al setter	Quieres que se aplique la validación o lógica del setter*/
