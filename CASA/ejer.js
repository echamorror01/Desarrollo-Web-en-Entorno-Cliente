/* /* 1.Realiza un script que pida número de filas y columnas y escriba una tabla.
Dentro cada una de las celdas deberá escribirse un número consecutivo en orden
descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.*/
function tabla() {
  let filas = parseInt(prompt("Introduce las filas"));
  let columnas = parseInt(prompt("Introduce las columnas"));
  let contador = filas * columnas;
  let resultado = "<table border=1 ";
  for (let i = 1; i <= filas; i++) {
    resultado += "<tr>";
    for (let j = 1; j <= columnas; j++) {
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
function sacaraleatoriop() {
  for (let i = 0; i < 10; i++) {
    let num = Math.floor(Math.random() * 10);
    if (num == 5) {
      return "El numero 5 ha salido en la iteraccion" + i;
    }
  }
  return "No ha salido el numero 5 ";
}
function sacaraleatorio() {
  alert(sacaraleatoriop());
}

/*
/* Ejercicio 3. Ocultar los últimos dígitos de un nombre de usuario, quedándonos solo con
los 3 primeros y el resto que los rellene con asteriscos. */
function ocultar() {
  let rdo = "";
  let usuario = "Estrella";
  let caracter = usuario.split("");
  for (let i = 0; i < caracter.length; i++) {
    if (i < 3) {
      rdo += caracter[i];
    } else {
      rdo += "*";
    }
  }
  alert(rdo);
}

/*Ejercicio 4. Crear un ejercicio que pida el número de divs a mostrar y cuántos párrafos
tendrán dichos divs. Se deberá escribir en pantalla los divs con una clase que definas
que lo que haga sea poner un color de fondo y un margen inferior de 10px para
separar los divs y dentro de cada div tantos párrafos con el texto Parrafo X donde X
será las veces que ha aparecido, por ejemplo: Parrafo:1, Parrafo:2...*/
function div() {
  let rdo = "";
  let contador = 0;
  let div = parseInt(prompt("Introduce el numero de div a mostrar"));
  let p = parseInt(prompt("Introduce el numero de p a mostrar"));
  for (let i = 0; i < div; i++) {
    rdo += "<div class= 'caja' >";
    for (let j = 0; j < p; j++) {
      rdo += "<p>" + "Parrafo" + contador + "</p>";
      contador++;
    }
    rdo += "</div>";
  }
  document.getElementById("tabli").innerHTML = rdo;
}

/* /*Nos dan un array con los números de la ONCE de los últimos 10 días:
“12345”,“00124”,“04586”,“98472”,“71920”,“54102”,“00013”,“29863”,“10978”,“47101”
Se debe pedir al usuario que inserte el número que quiere comprobar y mostrará “El
número X ha sido premiado en los últimos 10 días” o “El número X no ha sido
premiado. Sigue intentándolo”.
Hay que tener en cuenta que el usuario puede poner el número “13” y el programa
mostrará que sí ha salido premiado, por lo que habrá que controlar los ceros a la
izquierda: Si el usuario pone “13” el mensaje será “El número 00013 ha sido
premiado…. */
function oncep() {
  let premios = [
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
  let cupon = prompt("Introduce el numero del cupon");
  let premiado = cupon.padStart(5, "0");
  for (const valor of premios) {
    if (premiado == valor) {
      return "El numero " + premiado + " ha sido premiado";
    }
  }
  return "El numero " + premiado + "  no ha sido premiado";
}
function once() {
  alert(oncep());
}
