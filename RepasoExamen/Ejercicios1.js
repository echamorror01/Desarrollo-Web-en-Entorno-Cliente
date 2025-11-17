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
  let palabras = usuario.split(" ");
  for (let indice in palabras) {
    if (indice <= 3) {
      resultado += palabras[indice];
    } else {
      resultado += palabras[indice] + "*";
    }
  }
  alert(resultado);
}
