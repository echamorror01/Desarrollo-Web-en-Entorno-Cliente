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

/*7.- Crea una función "Cubo" que devuelva el cubo de un número real que se indique como parámetro. La 
función tendrá que comprobar que el parámetro es un número (o que se pueda convertir a un número), en 
caso contrario, devolverá false.  
Prueba esta función para calcular el cubo de 3.2 y el de 5, y también prueba a pasarle “hola” como 
parámetro. ¿Qué ocurre? */

function Cubo(numero) {
  numero = prompt("Introduce un numero");
  if (numero == Number(numero) || numero == parseInt(numero)) {
    let cubo = Math.pow(numero, 3);
    console.log(cubo);
  } else {
    console.log("false");
  }

  /* Otra forma:
  function Cubo(numero) {
  // Intentamos convertir el parámetro a número real
  numero = Number(numero);

  // Si no es un número válido (Number devuelve NaN) → retornar false
  if (isNaN(numero)) {
    return false;
  }

  // Si sí es número → devolver su cubo
  return numero ** 3; // o Math.pow(numero, 3)
}
  console.log(Cubo(3.2)); // 32.768
console.log(Cubo(5));   // 125
console.log(Cubo("hola")); // false   aqui lo que hacemos es llamar despues a la funcion */
}
/*8.- Crea una función "Menor" que devuelva el menor de dos números que recibirá como parámetros.*/
function Menor(numero1, numero2) {
  return Math.min(numero1, numero2);
}
function MenorP() {
  console.log(Menor(2, 8));
  console.log(Menor(8, 12));
}

/*9.- Crear 4 funciones: PideNumero, EsPositivo, CalculaMitad y HazTodo 
La función PideNumero, pedirá al usuario que introduzca un número y devuelve el número introducido. 
Las funciones EsPositivo y CalculaMitad, no imprimen nada en la consola, simplemente devuelven los 
valores correspondientes. 
La función HazTodo no tendrá ningún parámetro, llamará a las otras tres funciones y mostrará la 
siguiente información en la consola: 
‘El número X es POSITIVO/NEGATIVO’ 
‘La mitad de X es Y’ 
Fuera de las funciones, solo habrá una llamada a la función HazTodo.*/

function Pidenumero() {
  let numero = parseInt(prompt("Introduce un numero"));
  return numero;
}
function Espositivo(numero) {
  if (isNaN(numero)) {
    return "Numero no valido ";
  }
  if (numero > 0) {
    return " es positivo";
  } else if (numero < 0) {
    return "es negativo";
  } else {
    return "es cero ";
  }
}
function CalculaMitad(numero) {
  if (isNaN(numero)) {
    return "Numero no valido ";
  }
  return numero / 2;
}

function HazTodo() {
  let num = Pidenumero();
  console.log("El numero " + num + "es" + Espositivo(num));
  console.log("La mitad de " + num + "es " + CalculaMitad(num));
}
/*11.- Escribe una función que dado un string, devuelva un array con las palabras que forman el string. 
¿Qué pasa si el string tiene 3 espacios en blanco seguidos? ¿Se puede solucionar? */

function Cadena() {
  let string = "Hola que     estas yo bien ";
  let palabras = string.split(" ");
  for (const indice in palabras) {
    console.log(palabras[indice]);
  }
}

/*12.- Escribe una función que se le pase un nombre completo (string) y devuelve el nombre abreviado (es 
decir, el nombre y la primera letra del primer apellido, seguido de un punto). Escribe también el código 
necesario para probarla. */

function Nombre(nombrecompleto) {
  let partes = nombrecompleto.split(" ");
  let nombre = partes[0];
  if (partes.length > 1) {
    let primerapellido = partes[1];
    console.log(nombre + primerapellido.charAt(0) + ".");
  } else {
    return nombre;
  }
}
function NombreP() {
  console.log(Nombre("Estrella Chamorro "));
}

/* 13.- Crea una función que oculte parte de una dirección de email. Por ejemplo, si se le pasa
“1234567890@gmail.com”, devolverá “12345…@gmail.com”, es decir, sustituye la 2ª mitad del email
(antes de la @) por “...”. Escribe también el código necesario para probarla. */

function Cortar(email) {
  let [nombre, dominio] = email.split("@"); //cortamos por la @
  let tamaño = nombre.length / 2; //mitad del nombre antes de la @
  let nuevonombre = nombre.substring(0, tamaño) + "...";

  return nuevonombre + "@" + dominio;
}

function CortarP() {
  console.log(Cortar("estrellachamorro@gmail.com"));
}

/*14.- Define una función que sustituya los espacios en blanco por un guión y, además, convierta todo el 
texto en minúsculas. Escribe también el código necesario para probarla. */

function Espacios() {
  let rdo = "";
  let texto = "Mi casa es de color rosa";
  texto = texto.toLocaleLowerCase();
  let palabras = texto.split(" "); //split"" separa letra y split " "
  for (const elemento of palabras) {
    rdo += elemento + "-";
  }
  rdo = rdo.slice(0, -1); //hasta el último caracter menos uno quitamos el guión ultimo
  console.log(rdo);
}

/*15.- Escribe una función que reciba dos parámetros, string1 y string2, y que devuelva true si string1 
contiene a string2, o false en caso contrario.*/
function Contiene(string1, string2) {
  return string1.includes(string2);
}
function ContieneP() {
  console.log(Contiene("Hola mi perro es Bimbo", " perro")); //el segundo parametro es lo que quiero buscar
  console.log(Contiene("Hola mundo", "mundo"));
  console.log(Contiene("Mi gato", "perro"));
}

/*16.- Crea una función que genere un número aleatorio, entre dos valores dados. Utiliza esta función para 
simular el funcionamiento de un dado. */

function Numeroaleatorio() {
  let numero1 = parseInt(prompt("Introduce un numero minimo "));
  let numero2 = parseInt(prompt("Introduce un numero maximo"));
  let numero = Math.floor(Math.random() * (numero2 - numero1 + 1));
  console.log(numero);
}

/*17.- Define una función que devuelva una cadena de texto con el día actual. Además, hay que pasarle el 
separador. Suponiendo que el separador es “-”, el formato de salida será “dd-mm-yyyy” */

function CadenaTexto(separador) {
  let fecha = new Date();
  let texto = "Mi trabajo está corregido";
  let dia = fecha.getDate().toString().padStart(2, "0");
  let mes = (fecha.getMonth() + 1).toString().padStart(2, "0");
  let año = fecha.getFullYear();
  let resultado = texto + dia + separador + mes + separador + año;
  return resultado;
}

function CadenaTextoP() {
  console.log(CadenaTexto("-"));
}

/*18.- En una empresa las facturas vencen a los 20 días. Crear una función que tendrá como parámetro una 
fecha con el formato 'dd-mm-YYYY' y devolverá la fecha de vencimiento (con el mismo formato). Hay 
que tener en cuenta que, si la fecha de vencimiento cae en fin de semana, habrá que mostrar la fecha del 
viernes anterior.*/

function Facturas(fecha) {
  let partes = fecha.split("-");
  let dia = parseInt(partes[0]);
  let mes = parseInt(partes[1] - 1); //porque los meses empiezan en 0
  let año = parseInt(partes[2]);

  let f = new Date(año, mes, dia);
  f.setDate(f.getDate() + 20); //tenemos que cambiarlo tambien en el get

  // Si cae en sábado (6), restamos 1 día → viernes
  // Si cae en domingo (0), restamos 2 días → viernes
  if (f.getDay() == 6) {
    f.setDate(f.getDate() - 1);
  } else if (f.getDay() == 0) {
    f.setDate(f.getDate() - 2);
  }
  // Formateamos a dd-mm-YYYY otra vez
  let diaFinal = f.getDate().toString().padStart(2, "0"); //porque padStart solo funciona con String y esto es para que si sale 1 ponga 01
  let mesFinal = (f.getMonth() + 1).toString().padStart(2, "0");
  let añoFinal = f.getFullYear();

  return diaFinal + "-" + mesFinal + "-" + añoFinal;
}
function FacturasP() {
  console.log(Facturas("10-03-2024"));
}

/* 19. Hacer una función que reciba dos parámetros (mes y año). Con esos datos tiene que mostrar la
siguiente información (por ejemplo, si le pasamos el mes de Octubre y el año 2020: */

function MesAñoP() {
  let mes = prompt("Introduce un mes");
  let año = prompt("Introduce el año");
  alert(MesAño(mes, año));
}

function MesAño(mes, año) {
  mes = mes - 1; //le restamos porque si me dice diciembre aqui es mes 11
  let fecha = new Date(año, mes, 1);
  let resultado = "Semana 1:";
  let dias = ["dom", "lun", "mar", "mier", "jue", "vie", "sab"];
  let numsemana = 1;
  while (fecha.getMonth() == mes) {
    let diasemana = fecha.getDay();

    if (diasemana == 0) {
      //que es domingo
      resultado += "\n";
      numsemana++;
      resultado += "Semana" + numsemana + " :";
    }
    resultado += fecha.getDate() + "(" + dias[fecha.getDay()] + ")";
    fecha.setDate(fecha.getDate() + 1);
  }
  return resultado;
}
/*.20.- Crear un calendario del estilo al que aparece en la siguiente imagen*/

function MuestraMes(mes, año) {
  mes = mes - 1; //PORQUE SI EL USUARIO PASA ENERO ENERO ES 1 PERO EN JAVA ES 0
  let meses = [
    "Ene",
    "Feb",
    "Mar",
    "Abr",
    "May",
    "Jun",
    "Jul",
    "Ago",
    "Sep",
    "Oct",
    "Nov",
    "Dic",
  ];
  let resultado = "<div id='calendario'><div class='mes'>"; //<DIV ID="CALENDARIO">
  //DIV CLASS="MES"
  resultado += "<h3>" + meses[mes] + "</h3>";
  resultado += "<table><tr>";
  let fecha = new Date(año, mes, 1);
  numDiasenBlanco = fecha.getDay() == 0 ? 6 : fecha.getDay() - 1; //esto es si el dia es 0 pintame 6 huecos  en blancos  si no restame 1 y pintamelo
  let trcerrado = false;

  for (let i = 0; i < numDiasenBlanco; i++) {
    resultado += "<td>&nbsp;&nbsp;</td>";
  }

  while (mes == fecha.getMonth()) {
    let diaSemana = fecha.getDay(); //DIA DE LA SEMANA
    if (diaSemana == 0) {
      //es domingo
      resultado += "<td>" + fecha.getDate() + "</td>"; //DIA DEL MES
      resultado += "</tr>";
      trcerrado = true;
    } else {
      //no es domingo
      resultado += "<td>" + fecha.getDate() + "</td>";
      trcerrado = false;
    }

    fecha.setDate(fecha.getDate() + 1);
  }

  if (trcerrado == false) {
    //HUECCOS DEL FINAL
    //huecos en blanco
    numDiasenBlanco = 7 - fecha.getDay();
    for (let i = 0; i < numDiasenBlanco; i++) {
      resultado += "<td>&nbsp;&nbsp;</td>";
    }
    resultado += "</tr>";
  }

  resultado += "</table>";
  resultado += "</div>";
  return resultado;
}

function MuestraMesP() {
  let rdo = "";
  for (let i = 1; i <= 12; i++) {
    rdo += MuestraMes(i, 2024);
  }
  document.getElementById("rdo").innerHTML = rdo;
}
