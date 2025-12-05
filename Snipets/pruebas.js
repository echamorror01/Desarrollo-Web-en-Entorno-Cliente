let resultados = [];

function aleatorioEntre(min, max) {
  let cantidadElementos = max - min + 1;
  return Math.floor(Math.random() * cantidadElementos + min);
}

let resultado = [];
for (let i = 0; i < 6000; i++) {
  let n = aleatorioEntre(1, 6);
  if (resultado[n] != undefined) {
    resultado[n] += 1;
  } else {
    resultado[n] = 1;
  }
}

let elemento = document.getElementById("contenido");
elemento.innerHTML = "<h1>Resultados de lanzar un dado 6000 veces</h1>";
for (let i = 1; i < resultado.length; i++) {
  elemento.innerHTML += `<p>El número ${i} salió ${resultado[i]} veces</p>`;
}
