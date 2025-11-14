/*Ejercicio 1.
El cálculo de la letra del Documento Nacional de Identidad (DNI) es un proceso matemático sencillo
que se basa en obtener el resto de la división entera del número de DNI y el número 23. A partir del
resto de la división, se obtiene la letra seleccionándola dentro de un array de letras.
El array de letras es:
var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
Crear un programa que le pida el usuario el dni (solo el número) y calcule la letra correspondiente.
Tendrá que comprobar que el número introducido es válido.
Si no es válido, le indicará el error y volverá a pedirlo hasta que sea válido */

function pedirDni() {
  var letras = [
    "T",
    "R",
    "W",
    "A",
    "G",
    "M",
    "Y",
    "F",
    "P",
    "D",
    "X",
    "B",
    "N",
    "J",
    "Z",
    "S",
    "Q",
    "V",
    "H",
    "L",
    "C",
    "K",
    "E",
    "T",
  ];
  do {
    let dni = parseInt(prompt("Introduce los numeros de tu dni "));
    let resultado = dni % 23;
    for (const indice in letras) {
      if (resultado == indice) {
        let final = letras[indice];
        alert(dni + final);
      }
    }
  } while (resultado <= 23);
  {
    alert("Error");
  }
}

/* 2. El factorial de un número entero n es una operación matemática que consiste en multiplicar todos los
factores n x (n-1) x (n-2) x ... x 1. Así, el factorial de 5 (escrito como 5!) es igual a: 5! = 5 x 4 x 3 x 2 x 1
= 120
Utilizando la estructura for, crear un script que calcule el factorial de un número entero */

function factorial() {
  let numero = parseInt(prompt("Introduce un numero"));
  alert("El factorial del numero " + numero);
  let total = 1;
  for (let i = numero; i > 0; i--) {
    total = total * i;
    alert(total);
  }
}

/* Ejercicio 3.
Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como
resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado
devuelto por la función */

function texto(numero) {
  if (numero % 2 == 0) {
    return "Es par";
  } else {
    return "Es impar";
  }
}
function textop() {
  alert(texto(7));
}

/*  Ejercicio 4.
Definir una función que muestre información sobre una cadena de texto que se le pasa como
argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo
por mayúsculas, sólo por minúsculas o por una mezcla de ambas.*/

function cadena() {
  let cadena = "hola soy estrella";
  if (cadena == cadena.toLocaleLowerCase()) {
    alert("La cadena tiene minusculas");
  } else if (cadena == cadena.toLocaleUpperCase()) {
    alert("La cadena tiene mayusculas");
  } else {
    alert("La cadena lleva minusculas y mayusculas");
  }
}

/* Ejercicio 5.
Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para
obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el
resultado de lanzar dos dados y guardar el resultado en un array el número de apariciones de dicha
suma. Si repetimos 36.000 veces esta operación, ¿qué porcentaje sale de cada suma? */

function dado() {
  let cantidadElementos = 6 - 1 + 1;
  let resultado = "";
  let miarray = [];
  for (let i = 0; i < 36000; i++) {
    let dado1 = Math.floor(Math.random() * cantidadElementos + 1);
    let dado2 = Math.floor(Math.random() * cantidadElementos + 1);
    let suma = dado1 + dado2;

    if (miarray[suma] != undefined) {
      /* si en mi array  existe el numero le suma 1  */
      miarray[suma] += 1;
    } else {
      miarray[suma] = 1;
      //si no lo creas en el array con valor 1
    }
  }
  for (const indice in miarray) {
    resultado +=
      indice +
      " - " +
      miarray[indice] +
      "=>" +
      ((miarray[indice] * 100) / 36000).toFixed(
        2
      ) /* para quedarlo en dos decimales*/ +
      "\n";
  }
  alert(resultado);
}
