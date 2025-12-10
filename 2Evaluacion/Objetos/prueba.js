class Persona {
  #nombre;
  #age;

  constructor(nombre, age) {
    this.#nombre = nombre;
    this.#age = age;
  }
  get nombre() {
    return this.#nombre;
  }
  set nombre(nuevo) {
    this.#nombre = nuevo;
  }
}
