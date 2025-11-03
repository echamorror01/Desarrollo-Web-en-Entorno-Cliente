/*1.- Escribe un script con, al menos, estos valores: 3, 3.5, “3”, "3.5", “7aaa”, “aaa7” y “hola”. Recorre el
array y muestra por consola el resultado de aplicar las funciones parseInt, parseFloat, isNan, Number y
String, a cada uno de los elementos del array. ¿Hay algún resultado que no esperabas?*/

function mostrarfunciones() {
  let array = [3, 3.5, "3", "3.5", "7aaa", "aaa7", "hola"];

  for (const elemento of array) {
    console.log("Elemento" + elemento);
    console.log("parseint" + parseInt(elemento));
    console.log("parsefloat" + parseFloat(elemento));
    console.log("isNan" + isNaN(elemento));
    console.log("number" + Number(elemento));
    console.log("string" + String(elemento));
  }
}

/*2.- Crea una función llamada "DibujarLinea3", que dibuje una línea con 3 asteriscos en la pantalla.*/

function DibujarLinea3() {
  return "***";
}

/*3.- Crea una función llamada "DibujarCuadrado3x3", que dibuje un cuadrado (en la pantalla) formado por
3 filas con 3 asteriscos cada una (esta función deberá llamar a la función creada en el ejercicio anterior). */

function DibujarCuadrado3x3() {
  let resultado = "";
  for (let i = 0; i < 3; i++) {
    resultado += DibujarLinea3() + "\n";
  }
  console.log(resultado);
}

/*4.- Crea una función llamada "DibujarLinea", que dibuje una línea con X asteriscos (en la pantalla). La
función tendrá un parámetro de entrada con el número de asteriscos a mostrar.*/

function DibujarLinea() {
  let numero = parseInt(prompt("Introduce un numero"));
  console.log(linea(numero));
}
function linea(numero) {
  let linea = "";
  for (let i = 0; i < numero; i++) {
    linea += "*";
  }
  return linea;
}
/* 5.- Crea una función llamada "DibujarCuadrado", que dibuje un cuadrado formado por X filas con X
asteriscos cada una (esta función deberá llamar a la función creada en el ejercicio anterior). El script
pedirá al usuario el tamaño del cuadrado, y llamará a la función con ese dato. */

function DibujarCuadrado() {
  let lin = "";
  let filas = parseInt(prompt("Introduce el numero de filas"));
  for (let i = 0; i < filas; i++) {
    lin += linea(filas) + "\n";
  }
  console.log(lin);
}

/* 6.- Crea una función "DibujarRectangulo" que dibuje en pantalla un rectángulo del ancho y alto que se
indiquen como parámetros. El script pedirá al usuario el tamaño del rectángulo, y llamará a la función con
ese dato*/
function DibujarRectangulo(alto, ancho) {
  let lin = "";
  alto = parseInt(prompt("Introduce el alto"));
  ancho = parseInt(prompt("Introduce el ancho"));
  for (let i = 0; i < alto; i++) {
    for (let j = 0; j < ancho; j++) {
      lin += "*";
    }
    lin += "\n";
  }
  console.log(lin);
}
