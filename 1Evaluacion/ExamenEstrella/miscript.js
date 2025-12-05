let animalesEnArca = [
  "Leon;carnívoro;macho",
  "Leon;carnívoro;hembra",
  "Elefante;herbívoro;macho",
  "Elefante;herbívoro;hembra",
  "Delfin;acuático;macho",
  "Delfin;acuático;hembra",
  "Tigre;carnívoro;macho",
  "Jirafa;herbívoro;hembra",
  "Cebra;herbívoro;macho",
  "Tiburon;acuático;hembra",
];

let curiosidades = [
  "Este animal será el encargado de dar la bienvenida hoy a los nuevos visitantes.",
  "¡Este animal ha ganado una ración extra de comida!",
  "Este animal será el primero en salir del arca cuando llegue el momento.",
  "Este animal tendrá el mejor camarote del arca hoy.",
  "Este animal liderará el paseo matutino por la cubierta.",
];

let posiblesFechasDiluvio = [
  "15/03/2026",
  "22/06/2026",
  "10/09/2026",
  "25/03/2026",
  "01/06/2026",
];

function mostrarResultado(mensaje) {
  document.getElementById("resultado").innerHTML =
    "<h2>Resultados:</h2>" + mensaje;
}
//Filtar por tipo de animal
function ejercicio1() {
  let animal = prompt(
    "Introduce el tipo de animal a filtrar (carnívoro(C), herbívoro(H), acuático(A)"
  );
  let resultado = filtrarPorTipos(animal).join("\n");
  alert(resultado);
}
// Ejercicio 2: Añadir Animal

//Contar por tipo de animal

//Animal aleatorio

function filtrarPorTipos(tipo) {
  let arraynuevo = [];
  switch (tipo) {
    case "C":
      for (const animal of animalesEnArca) {
        let nuevoanimal = animal.split(";");
        if (nuevoanimal[1] == "carnívoro") {
          arraynuevo.push(nuevoanimal[0]);
        }
      }
      break;
    case "H":
      for (const animal of animalesEnArca) {
        let nuevoanimal = animal.split(";");
        if (nuevoanimal[1] == "herbívoro") {
          arraynuevo.push(nuevoanimal[0]);
        }
      }
      break;
    case "A":
      for (const animal of animalesEnArca) {
        let nuevoanimal = animal.split(";");
        if (nuevoanimal[1] == "acuático") {
          arraynuevo.push(nuevoanimal[0]);
        }
      }
      break;
    default:
      alert("Error");
      break;
  }
  return arraynuevo;
}
/* Ejercicio 2(2 puntos)
Se le pedirá al usuario el nombre del nuevo animal, su tipo (carnívoro, herbívoro,
acuático) y su sexo (macho o hembra). No debemos controlar que se confunda al
poner el tipo o sexo, siempre lo pondrá bien.
Si ya hay un animal con el mismo nombre y del mismo sexo en el arca mostrar: "Ya
existe un animal con el mismo nombre y sexo en el arca.", en caso contrario, añadir el
nuevo animal en “animalesEnArca” respetando el formato que ya hay:
nombre;tipo;sexo.*/
function ejercicio2() {
  let nombre = prompt("Introduce el nombre del nuevo animal");
  let tipo = prompt("Introduce el nombre del nuevo animal");
  let sexo = prompt("Introduce el nombre del nuevo animal");
  for (const valor of animalesEnArca) {
  }
}
function ejercicio5() {
  let rdo = "<h3>🌧 Preparándonos para el Próximo Diluvio:</h3>";
  for (const fecha of posiblesFechasDiluvio) {
    let partes = fecha.split("/");
    let dia = parseInt(partes[0]);
    let mes = parseInt(partes[1] - 1); //porque en js el 11 es diciembre
    let año = parseInt(partes[2]);
    let f = new Date(año, mes, dia);
    f.setDate(f.getDate() + 146);
    if (f.getDay() == 0) {
      f.setDate(f.getDate() + 1);
      rdo +=
        "<p>" +
        "La fecha " +
        f.toLocaleDateString() +
        "cae en Domingo " +
        "</p>";
    }
    rdo += f.toLocaleDateString();
  }

  mostrarResultado(rdo);
}
function ejercicio3() {
  let resultado = [];
  for (const contenido of animalesEnArca) {
    let partes = contenido.split(";");
    let tipo = partes[1];
    if (resultado[tipo] == undefined) {
      resultado[tipo] = 1;
    } else {
      resultado[tipo] += 1;
    }
  }
  let rdo = "<h3>Conteo de Animales por Tipo:</h3>";

  for (let c in resultado) {
    rdo += c + ": " + resultado[c] + "<br>";
  }

  mostrarResultado(rdo);
}

function ejercicio4() {
  let rdo = " ";
  let resultado = "<h3>🐾 Animal Aleatorio Seleccionado:</h3>";
  let animalaleatorio = Math.floor(Math.random() * animalesEnArca.length);
  let curiosidadaleatorio = Math.floor(Math.random() * curiosidades.length);
  let a = animalesEnArca[animalaleatorio];
  let c = curiosidades[curiosidadaleatorio];
  let partes = a.split(";");
  rdo += "<p>" + "Nombre" + ":" + partes[0] + "</p>";
  rdo += "<p>" + "Tipo" + ":" + partes[1] + "</p>";
  rdo += "<p>" + "Sexo" + ":" + partes[2] + "</p>";
  rdo += "<p>" + "Curiosidad" + ":" + c + "</p>";
  mostrarResultado(rdo);
}

function mostrarTodosAnimales() {
  let contador = 1;
  let rdo = "<h3>🐾 Todos los Animales en el Arca:</h3>";
  for (const contenido of animalesEnArca) {
    let partes = contenido.split(";");
    rdo +=
      partes[0] +
      " - Tipo " +
      partes[1] +
      ";" +
      " sexo : " +
      partes[2] +
      " <br>";
    contador++;
  }
  mostrarResultado(rdo + " Total animales : " + contador);
}
