//7. Dado un array con elementos repetidos, escribe el código para que saber cuál es el elemento que
//más veces aparece en el array.

// los array asociativos tienen clave y valor , contador obejto y elemento es la clave
//contador[3]=5 el numero 3 aparecio 5 veces

const miarray = ["verde", "amarillo", "verde", "rojo", "verde", "rojo", "rosa"];
let repeticiones = []; //array asociativo

for (const valor of miarray) {
  // para buscar las veces que se repite
  // contenido de dentro
  if (repeticiones[valor] == undefined) {
    repeticiones[valor] = 1;
  } else {
    repeticiones[valor] += 1;
  }
}

let rdo = " ";
for (const indice in repeticiones) {
  // en el array asociativo es verde amarillo azul y en un array normal 0,1,2
  alert((rdo += "Indice =" + indice + "Valor " + repeticiones[indice] + "\n"));
}

let valormax = 0;
let indicemax = "";

for (const indice in repeticiones) {
  if (repeticiones[indice] > valormax) {
    valormax = repeticiones[indice];
    indicemax = indice; // indice es el verde, aszul
  }
}

alert(
  " El elemento que mas  se repite es  el " +
    indicemax +
    " con " +
    valormax +
    " repeticiones"
);
