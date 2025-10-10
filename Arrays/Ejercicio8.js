//Modificar el ejercicio anterior, de tal forma que muestra en la consola el número de veces que
//aparece cada item en el array, pero ordenamos de mayor a menor
const miarray = ["verde", "amarillo", "verde", "rojo", "verde", "rojo", "rosa"];
let repeticiones = []; //array asociativo
let numeroelementos = 0;

for (const valor of miarray) {
  // para buscar las veces que se repite
  // contenido de dentro
  if (repeticiones[valor] == undefined) {
    repeticiones[valor] = 1;
    numeroelementos++;
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

let repeticionesordenado = [];

while (numeroelementos > 0) {
  let valormax = 0;
  let indicemax = "";
  for (const indice in repeticiones) {
    if (repeticiones[indice] > valormax) {
      valormax = repeticiones[indice];
      indicemax = indice; // indice es el verde, aszul
    }
  }
  repeticionesordenado[indicemax] = valormax;
  delete repeticiones[indicemax];
  numeroelementos--;
}

for (const indice in repeticionesordenado) {
  alert("Hay " + repeticionesordenado[indice] + "elementos de color " + indice);
}
