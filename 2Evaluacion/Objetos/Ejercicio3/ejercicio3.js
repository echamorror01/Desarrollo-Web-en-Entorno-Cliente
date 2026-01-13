/*3. Crea una clase "Vehículo", con la propiedad "cilindrada" (número entero). Creamos los Get y Set
para las propiedades. También tendrá un método InfoCilindrada para mostrar la cilindrada por
pantalla. */
class Vehiculo {
  #cilindrada; //es privado para no poder acceder a el
  constructor(cilindrada) {
    /*this.#atributo → acceso directo al dato privado.
    this.atributo → llama al getter/setter. */
    this.cilindrada = cilindrada; // aqui llama al setter
  }

  get cilindrada() {
    return this.#cilindrada + "cc"; // accede directo al atributo privado
  }
  set cilindrada(nuevo) {
    if (nuevo > 2000) {
      alert("Error");
    } else {
      this.#cilindrada = nuevo; //esto no seria necesario . Asigna al atributo privado
    }
  }
  infocompleta() {
    alert("La cilindrada de un vehiculo es " + this.cilindrada); //para acceder al getter lo tenemos que poner sin #
  } // aqui si le ponemos la # nos devolveria solo 1500 sin cc porque ignoraria el getter
}
let Vehiculo1 = new Vehiculo(25);
Vehiculo1.infocompleta();

class Coche extends Vehiculo {
  #marca;
  #modelo;
  constructor(marca, modelo, cilindrada) {
    super(cilindrada); //llamo al padre a la clase Vehiculo
    this.marca = marca; //si pongo # necesito setter y getter
    this.modelo = modelo;
  }
  get marca() {
    return this.#marca;
  }
  set marca(nuevo) {
    this.#marca = nuevo;
  }
  get modelo() {
    return this.#modelo;
  }
  set modelo(nuevo) {
    this.#modelo = nuevo;
  }

  infocompleta() {
    return (
      "Marca " +
      this.marca +
      " Modelo " +
      this.modelo +
      " cilindrada " +
      this.cilindrada
    );
  }
}
let Coche1 = new Coche("Audi", "A5", "1500");
alert(Coche1.infocompleta());
