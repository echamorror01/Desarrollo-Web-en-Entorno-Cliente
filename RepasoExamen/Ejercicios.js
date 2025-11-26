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
    let dado1 = Math.floor(Math.random() * cantidadElementos) + 1; // ESTO SIEMRPE ES ASI
    let dado2 = Math.floor(Math.random() * cantidadElementos) + 1;
    let suma = dado1 + dado2;

    if (miarray[suma] != undefined) {
      /* si en mi array  existe el numero le suma 1  */
      miarray[suma] += 1; // PORME EN EL VALOR POR EJEMPLO 4 UN DOS SI HA SALIDO
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
      ((miarray[indice] * 100) / 36000).toFixed(2) +
      "\n"; /* para quedarlo en dos decimales*/
  }
  alert(resultado);
}

/*Hacer un trivial sencillo. El funcionamiento del programa será el siguiente: - Te doy los arrays enunciados, respuestas y soluciones.  
enunciados[n] = ‘Enunciado de la pregunta’; 
respuestas[n] = array(‘respuesta 1’,’respuesta 2’,’respuesta 3’,’respuesta 4’); 
solucion[n] = indice; // Indice de la respuesta correcta - Crear una función: preguntaSimple 
○ Recibe como parámetros un texto (con el enunciado de la pregunta), un array (con las 
posibles respuestas) y número (indica número del elemento del array que tiene la respuesta correcta) 
○ Esta función genera un prompt con el enunciado y las respuestas, y el usuario tiene que 
indicar el ‘número de la respuesta correcta’.  
○ Devuelve true si ha acertado y false en caso contrario. 
El programa elegirá 5 preguntas (de las 10) al azar(sin repetir la misma pregunta) y se las irá preguntando al 
usuario. 
 Al terminar, el programa mostrará un mensaje indicando la puntuación de respuestas 
acertadas. 
● Y, por último, le pregunta al usuario si quiere volver a jugar. 
*/

function trivial(texto) {
  const enunciados = [
    "¿Cuál es el río más largo del mundo?",
    "¿En qué año llegó el ser humano a la Luna?",
    "¿Cuál es la capital de Australia?",
    "¿Quién pintó La última cena?",
    "¿Cuál es el metal más abundante en la corteza terrestre?",
    "¿Qué país tiene la mayor población del mundo?",
    "¿En qué continente se encuentra la cordillera de los Andes?",
    "¿Qué científico propuso la teoría de la relatividad?",
    "¿Cuál es el océano más grande del planeta?",
    "¿Qué país inventó la pólvora?",
  ];
  const respuestas = [
    ["Amazonas", "Nilo", "Yangtsé", "Misisipi"],
    ["1965", "1969", "1972", "1959"],
    ["Sídney", "Camberra", "Melbourne", "Perth"],
    ["Miguel Ángel", "Leonardo da Vinci", "Rafael", "Caravaggio"],
    ["Hierro", "Cobre", "Aluminio", "Plata"],
    ["India", "Estados Unidos", "China", "Indonesia"],
    ["Asia", "América", "Europa", "África"],
    ["Isaac Newton", "Albert Einstein", "Nikola Tesla", "Galileo Galilei"],
    ["Atlántico", "Índico", "Ártico", "Pacífico"],
    ["China", "Japón", "Corea", "India"],
  ];
  const solucion = [
    1, // Amazonas (aunque hay debate, hoy se considera el más largo)
    2, // 1969
    2, // Camberra
    2, // Leonardo da Vinci
    3, // Aluminio
    3, // China
    2, // América (Andes)
    2, // Einstein
    4, // Pacífico
    1, // China
  ];
  let acierto = 0;
  let indices = new Set();
  while (indices.size < 5) {
    let numero = Math.floor(Math.random() * 10); //genero 5 numeros para las preguntas
    indices.add(numero);
  }
  for (let i of indices) {
    // en la i esta cada elemento del set
    let mensaje = enunciados[i] + "\n"; //aqui nos saca el enunciado 3 por ejemplo del random
    for (let j = 0; j < respuestas[i].length; j++) {
      mensaje = mensaje + (j + 1) + "." + respuestas[i][j] + "\n"; // de la respuesta 3 dame las respuestas
    }
    let respusuario = prompt(mensaje);
    //saber si es cierta
    if (Number(respusuario) == solucion[i]) {
      //pasamos la respuesta a number
      acierto++;
    }
  }
  alert("Has acertado " + acierto + "de 5 preguntas");
  let jugarOtraVez = prompt("¿Quieres jugar de nuevo? (s/n)").toLowerCase();
  if (jugarOtraVez == "s") {
    trivial();
  }
}
