class Corredor {
  #nombre;
  #direccion;
  #telefono;
  #pais;
  #kilometros;

  constructor(nombre, direccion, telefono, pais, kilometros) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.telefono = telefono;
    this.pais = this.pais;
    this.kilometros = kilometros;
  }
  get nombre() {
    return this.#nombre;
  }
  set nombre(nuevo) {
    this.#nombre = nuevo;
  }
  get direccion() {
    return this.#direccion;
  }
  set direccion(nuevo) {
    this.#direccion = nuevo;
  }
  get telefono() {
    if (this.pais == "ESPAÑA") {
      //aqui coge el getter del pais
      return "+34" + this.#telefono; // al atrubuto
    } else if (this.pais == "PORTUGAL") {
      return "+35" + this.#telefono;
    } else {
      return this.#telefono;
    }
  }
  set telefono(nuevo) {
    this.#telefono = nuevo;
  }
  get pais() {
    return this.#pais.toUppercase();
  }
  set pais(nuevo) {
    this.#pais = nuevo;
  }
  get kilometros() {
    return this.#kilometros < 1000
      ? this.#kilometros + "m"
      : (this.#kilometros / 1000).toFixed(1) + "km";
  }
  set kilometros(nuevo) {
    this.#kilometros = nuevo;
  }
}
function ejercicio4() {
  let corredores = [
    new Corredor("Manolo", "Merida,4", "659987896", "España", 23),
    new Corredor("Estrella", "Zafra,6", "652287896", "Portugal", 56),
  ];
  mostrarinformacion(corredores);
}

function mostrarinformacion(corredores) {
  let rdo = "";
  document.getElementById("resultado").innerHTML = " ";
  for (const corredor of corredores) {
    rdo += "<br>" + "Nombre" + corredor.nombre + "br"; //accedemos a los getters porque lo tenemos sin #
    rdo += "Direccion" + corredor.direccion + "br";
    rdo += "Telefono" + corredor.telefono + "br";
    rdo += "Pais" + corredor.pais + "br";
    rdo += "Telefono" + corredor.telefono + "br";
    rdo += "---------------------</br>";
  }
  document.getElementById("resultado").innerHTML = rdo;
}
