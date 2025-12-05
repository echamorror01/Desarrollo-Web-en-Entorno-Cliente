function Ejercicio1() {
  let arrayDatos = [
    "Fila 1,Lápiz,Vaso",
    "Fila 2,Libro,Pluma",
    "Fila 3,Portátil,Tablet,Monitor",
    "Fila BA,Teclado,Ratón,Altavoces",
    "Fila CC,PS 5,monopation",
    "Fila ME, Mando, Auriculares, Cargador smartphone",
  ];
  for (let i in arrayDatos) {
    let cortado = arrayDatos[i].split(",");
    let fila = cortado[0];
    let fila2 = cortado[1];
    let fila3 = cortado[2];
    if (fila) {
      document.write(
        "Indice: " + fila + ".Contenido: " + fila2 + "," + fila3 + "<br>"
      );
    }
  }
}

function Ejercicio2() {
  let arrayDatos = [
    "Fila 1,Lápiz,Vaso",
    "Fila 2,Libro,Pluma",
    "Fila 3,Portátil,Tablet,Monitor",
    "Fila BA,Teclado,Ratón,Altavoces",
    "Fila CC,PS 5,monopation",
    "Fila ME, Mando, Auriculares, Cargador smartphone",
  ];
  let buscar = prompt("Que elemento quieres buscar");
  for (let i in arrayDatos) {
    let seleccionar = arrayDatos[0].split(",");
    if (arrayDatos) {
      document.write("Elemento encontrado en:" + seleccionar + "<br>");
    } else {
      document.write("Elemento no encontrado en:" + seleccionar);
    }
  }
}
function Ejercicio3() {
  let horasLlegadaCamion = ["7:00 morning", "1:00 afternoon", "10:00 night"];
  for (let i in horasLlegadaCamion) {
    let cortado = horasLlegadaCamion[i];
    let rest = cortado[0].padStart(1, "0");

    alert(rest);
  }
}
function Ejercicio4() {}
function Ejercicio5() {
  let cadena = ["4Hola5mundo3soy2yo"];
  let mensajeDecodificado = "";
  let arrayMensaje = cadena.join(" ");
  for (let i in arrayMensaje) {
    let nuevoIndice = arrayMensaje[i] - 12;
    if (nuevoIndice < 0) {
      nuevoIndice = vectorCodificacion.length - Math.abs(nuevoIndice);
    }
    mensajeDecodificado += vectorCodificacion[nuevoIndice];
  }
  alert(cadena + " se decodifica como: " + mensajeDecodificado);
}
function Ejercicio6() {}
function Ejercicio7() {
  let cadena = ["manzana;banana;pera;naranja;uva"];
  let sumaAleatorio = 0;
  let numerosAleatorios = 0;
  while (cadena) {
    let aleatorio = parseInt(Math.random());
    numerosAleatorios++;
    sumaAleatorio += aleatorio;
    alert("Elemento seleccionado al azar: " + cadena);
  }
}
