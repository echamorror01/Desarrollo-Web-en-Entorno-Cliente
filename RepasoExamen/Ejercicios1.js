/* 1.Realiza un script que pida número de filas y columnas y escriba una tabla.
Dentro cada una de las celdas deberá escribirse un número consecutivo en orden
descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.*/

function tabla() {
  let f = parseInt(prompt("Introduce el tamaño de las filas"));
  let c = parseInt(prompt("Introduce el tamaño de las columnas"));
  let resultado = "<table border=1 ";
  let contador = f * c;
  for (let filas = 1; filas <= f; filas++) {
    resultado += "<tr>";
    for (let columnas = 1; columnas <= c; columnas++) {
      resultado += "<td>" + contador + "</td>";
      contador--;
    }

    resultado += "</tr>";
  }
  resultado += "</table>";
  document.getElementById("tabla").innerHTML = resultado;
}

/*Ejercicio 2. Llamar a la función sacarAleatorio que lo que hace es iterar 10 veces y
sacar un número aleatorio entre 0 y 10, si el número aleatorio es 5, devolver en la
iteración en la que ha salido dicho número mostrando el mensaje
"El 5 ha salido en la iteración X".
Si han pasado las 10 iteraciones y no ha salido el 5 indicarlo mostrando "No ha salido el
5". */

function Ejercicio2() {
  alert(sacaraleatorio());
}

function sacaraleatorio() {
  for (let i = 0; i < 10; i++) {
    let numero = Math.floor(Math.random() * 10);
    if (numero == 5) {
      return "El numero 5 ha salido en la interaccion " + i;
    }
  }
  return "El 5 no ha salido ";
}

/* Ejercicio 3. Ocultar los últimos dígitos de un nombre de usuario, quedándonos solo con
los 3 primeros y el resto que los rellene con asteriscos. */

function ocultar() {
  let resultado = "";
  let usuario = "Estrella";
  for (let i = 0; i < usuario.length; i++) {
    if (i < 3) {
      resultado += usuario[i];
    } else {
      resultado += "*";
    }
  }
  alert(resultado);
}

/* Ejercicio 4. Crear un ejercicio que pida el número de divs a mostrar y cuántos párrafos
tendrán dichos divs. Se deberá escribir en pantalla los divs con una clase que definas
que lo que haga sea poner un color de fondo y un margen inferior de 10px para
separar los divs y dentro de cada div tantos párrafos con el texto Parrafo X donde X
será las veces que ha aparecido, por ejemplo: Parrafo:1, Parrafo:2...*/

function div() {
  let contador = 0;
  let div = parseInt(prompt("Dime el numero de div a mostrar"));
  let p = parseInt(
    prompt("Introduce el numeros de p que tendran los parrafos ")
  );
  for (let i = 0; i < div; i++) {
    //aqui tengo que abrir el div con la clase
    for (let j = 0; j < p; j++) {
      //mostrar el parrafo con el contador
      contador++;
    }
    //aqui cerrar el div
  }
}
/*Nos dan un array con los números de la ONCE de los últimos 10 días:
“12345”,“00124”,“04586”,“98472”,“71920”,“54102”,“00013”,“29863”,“10978”,“47101”
Se debe pedir al usuario que inserte el número que quiere comprobar y mostrará “El
número X ha sido premiado en los últimos 10 días” o “El número X no ha sido
premiado. Sigue intentándolo”.
Hay que tener en cuenta que el usuario puede poner el número “13” y el programa
mostrará que sí ha salido premiado, por lo que habrá que controlar los ceros a la
izquierda: Si el usuario pone “13” el mensaje será “El número 00013 ha sido
premiado…. */
function once() {
  let cupon = prompt("Introduce el numero que quieres comprobar");
  let premiado = cupon.padStart(5, "0");
  let resultados = [
    "12345",
    "00124",
    "04586",
    "98472",
    "71920",
    "54102",
    "00013",
    "29863",
    "10978",
    "47101",
  ];
  for (const indice in resultados) {
    // const valor of resultados// premiados==valor seria lo mismo
    if (premiado == resultados[indice]) {
      return "El numero" + premiado + "ha sido premiado en los ultimos 10 dias";
    }
  }
  return "El numero" + premiado + "no ha sido premiado";
}

function resultado() {
  alert(once());
}

/* Ejercicio 6. Nos han encargado realizar un programa para el recuento de votos de las
mejores luces de navidad de Extremadura, para ellos nos dan un array donde está el
nombre del pueblo y el número de puntos asignados. Como los puntos vienen de
distintas entidades y organismos para su recogida, puede haber la misma ciudad
repetida varias veces, por lo que sumaremos los puntos a la misma ciudad. Ejemplo, si
nos dan el array: Zafra-8puntos, Mérida-23puntos, Badajoz-13puntos, Zafra-4puntos,
Mérida-1punto. Debemos mostrar que Zafra ha obtenido 12 puntos, Mérida 24 puntos
y Badajoz 13 puntos.*/

function votos() {
  let ciudades = [
    "Zafra-8puntos",
    "Mérida-23puntos",
    "Badajoz-4puntos",
    "Zafra-3puntos",
    "Almendralejo-12puntos",
    "Mérida-4puntos",
    "Badajoz-15puntos",
    "Zafra-2puntos",
    "Mérida-7puntos",
    "Zafra-11puntos",
    "Almendralejo-31puntos",
    "Aceuchal-3puntos",
    "Almendralejo-7puntos",
    "La Parra-17puntos",
    "Aceuchal-15puntos",
    "Zafra-6puntos",
  ];
  let resultado = [];
  for (const contenido of ciudades) {
    let partes = contenido.split("-");
    let ciudad = partes[0];
    let puntos = parseInt(partes[1]); //7puntos hago parseint y me quedo con el 7 tambien puedo cortar por la p
    if (resultado[ciudad] !== undefined) {
      //si existe
      resultado[ciudad] += puntos;
    } else {
      resultado[ciudad] = puntos;
    }
  }

  let rdo = "";

  for (let c in resultado) {
    rdo += c + ": " + resultado[c] + " puntos" + "\n";
  }

  alert(rdo);
  /* 7.1. Ordenar las ciudades para que se muestren según sus puntos de mayor a menor, 
en el ejemplo anterior se mostraría: Mérida: 24 puntos, Badajoz: 13 puntos y Zafra: 12 
puntos. Mostrar al usuario el resultado en una ventana emergente. */

  let ordenado = [];
  let rdo2 = "";
  while (Object.keys(resultado).length > 0) {
    // mientras las claves sean mayores de 0
    let indiceMayor = "";
    let valorMayor = 0;

    for (const indice in resultado) {
      //para asignar el mayor
      if (resultado[indice] > valorMayor) {
        indiceMayor = indice;
        valorMayor = resultado[indice];
      }
    }
    if (ordenado[indiceMayor] == undefined) {
      //aqui lo metemos en mi array ordenado
      ordenado[indiceMayor] = valorMayor;
    }

    delete resultado[indiceMayor]; //aqui lo borramos para que no vuelva a salir el mayor
  }
  for (const indice in ordenado) {
    {
      rdo2 += indice + ": " + ordenado[indice] + "\n"; //aqui recorremos el array ordenado
    }
  }

  alert(rdo2);
}

/*Ejercicio 7. Nos han encargado que realicemos un codificador/decodificador de 
mensajes sencillo para poder transmitir los mensajes de la empresa de forma segura. 
Para ello, nos dan un array donde cada letra tiene una posición en el vector fija, de 
forma que, por ejemplo, si nos dan el número 5 codificado, se descodifica buscando en 
la posición 5 del array, y esa será la letra descodificada. Si por ejemplo tenemos el 
array: 
Si son dicen que codifiquemos la palabra “CASA”, ésta debe codificarse como 4-2-6-2. 
Como puede verse, los dígitos van separados por un guión. Ojo, los dígitos del array 
son siempre en mayúsculas.  */

function codificador() {
  let vectorCodificacion = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "Ñ",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    " ",
  ];
  let palabra = prompt("Introduce una palabra").toUpperCase();
  let caracter = palabra.split("");
  let rdo = "";
  for (const i in caracter) {
    for (const indice in vectorCodificacion) {
      if (caracter[i] == vectorCodificacion[indice]) {
        rdo += indice + "-";
      }
    }
  }
  rdo = rdo.slice(0, -1);
  alert(rdo);
}
function codi() {
  let letras = ["F", "H", "A", "B", "C", "D", "S", "U", "X"];
  let palabra = prompt("Introduce una palabra").toUpperCase();
  let caracter = palabra.split("");
  let rdo = "";
  for (const i in caracter) {
    for (const indice in letras) {
      if (caracter[i] == letras[indice]) {
        rdo += indice + "-";
      }
    }
  }
  rdo = rdo.slice(0, -1); // esto me quita el guion de atras oge la cadena desde el inicio hasta el penúltimo carácter
  alert(rdo);
}
function codificar() {
  /*7.1. Crear un botón en el .html llamado “Codificar” que llame a la función de codificar 
y ésta sea la que pida al usuario: ¿Qué mensaje quieres codificar?. La función recoge 
los caracteres, los codifica y muestra la decodificación en una ventana emergente. 
El mensaje debe mostrase como se indica, por ejemplo 4-2-6-2, sin ningún guión de 
más al final. Si un carácter no se encuentra en el vector, avisar al usuario que “El 
carácter X no se puede codificar” y finalice el programa sin codificar el mensaje.  */
  let letras = ["F", "H", "A", "B", "C", "D", "S", "U", "X"];
  let mensaje = prompt("¿Que mensaje quieres codificar").toUpperCase();
  let caracter = mensaje.split("");
  let rdo = "";
  let encontrado = false;
  for (const i in caracter) {
    for (const indice in letras) {
      if (caracter[i] == letras[indice]) {
        rdo += indice + "-";
        encontrado = true;
        break;
      }
    }
    if (!encontrado) {
      alert("El caracter" + caracter[i] + "no se ha encontrado");
      return; //detiene la funcion
    }
  }
  rdo = rdo.slice(0, -1);
  alert(rdo);
}
function descodificar() {}
