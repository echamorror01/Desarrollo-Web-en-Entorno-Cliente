/* 1. Crea una clase llamada Persona. Esta clase deberá tener una propiedad "nombre", de tipo string.
También tendrá un método "Saludar", que escribirá en la pantalla "Hola, soy " seguido de su
nombre. Se crearán dos objetos de tipo Persona, se les asignará un nombre a cada uno y se les
pedirá que saluden.*/

class Persona {
  #nombre;
  constructor(nombre) {
    this.#nombre = nombre;
  }

  saludo() {
    alert("Hola, Soy " + this.#nombre); //hace referencia a la clase para indicarle que busque dentro de la clase
  }
}

let persona1 = new Persona("Estrella");
let persona2 = new Persona("Jesus");
persona1.saludo();
persona2.saludo();
