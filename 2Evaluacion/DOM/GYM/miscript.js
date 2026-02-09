let arrayDatos = [
  "Flexiones Brazos;4;10;-;imagenes/ej1.png",
  "Flexiones con pelota;3;12;-;imagenes/ej2.png",
  "Elevación barra;3;8;30;imagenes/ej3.png",
  "Correr Cinta;-;-;-;imagenes/ej4.png",
  "Curl mancuernas;3;10;10;imagenes/ej5.png",
  "Oblicuos mancuerna;4;12;5;imagenes/ej6.png",
  "Curl de bíceps;3;15;20;imagenes/ej7.png",
  "Elevación rueda;3;12;40;imagenes/ej8.png",
  "Press banca;4;15;40;imagenes/ej9.png",
  "Crunch biceps alterno;4;12;5;imagenes/ej10.png",
  "Lateral en pelota;4;15;-;imagenes/ej11.png",
  "Press militar;4;10;30;imagenes/ej12.png",
  "Elevaciones hombro;4;12;5;imagenes/ej13.png",
  "Hombros pesas rusas;4;12;6;imagenes/ej14.png",
];

let listalimpia = arrayDatos.map((item) => {
  const [ejercicio, series, repeticiones, peso, imagenes] = item.split(";");
  return {
    ejercicio: ejercicio,
    series: parseInt(series),
    repeticiones: parseInt(repeticiones),
    peso: parseFloat(peso),
    imagenes: imagenes,
  };
});

const template = document.querySelector("#templateEjercicio");
const grid = document.querySelector(".ejercicios");
const tablasdias = document.querySelector("#listadoEjercicios");
const div = document.querySelector(".añadirEjercicio");
const span = div.querySelector("span"); // este es el primero q encuentra si hubiera mas (div.querySelecto(".nombreEjercicio").querySelector("span"))
const btnañadir = div.querySelector(".btnAñadir");
const series = div.querySelector(".seriesEjercicio");
const repeticiones = div.querySelector(".repeticionesEjercicio");
const peso = div.querySelector(".pesoEjercicio");
const dias = div.querySelector(".selectorDia");
const templatetabla = document.querySelector("#templateTablaEjercicio");
const templatefilaejercicio = document.querySelector("#templateFilaEjercicio");

listalimpia.forEach(function (ejer, indice) {
  grid.appendChild(dibujar(ejer));
});

//Listener
grid.addEventListener("click", (e) => {
  if (e.target.classList.contains("img-fluid")) {
    span.textContent = e.target.alt;
    //seleccionamos todos los elementos dentro de grid que tienen la clase ejercicio
    grid.querySelectorAll(".ejercicio").forEach(function (elemento, indice) {
      elemento.classList.remove("bordeColor");
    });
    e.target.parentElement.classList.add("bordeColor"); //se lo agregamos al padre
    e.target.parentElement.classList.remove("bg-body-secondary");
  }
});

btnañadir.addEventListener("click", () => {
  const nombre = span.textContent;
  const series = series.value; //porque son inputs
  const repeticiones = repeticiones.value;
  const peso = peso.value;
  const dias = dias.value;
});

function dibujar(ejercicio) {
  const clon = template.content.cloneNode(true);
  const imagen = clon.querySelector(".img-fluid"); //cuidado con el nombre
  imagen.src = ejercicio.imagenes; //cuidado con la imagen que es src
  imagen.alt = ejercicio.ejercicio;
  return clon;
}

function obtenertablaejercicio(dia) {
  //devolvemos el div de la fila con el dia
  const clon = templatetabla.content.cloneNode(true);
  const h2 = clon.querySelector("h2");
  h2.textContent = dia;
  const fila = cloneElement.querySelector(".fila");
  fila.dataset.dia = dia;
  return dia;
}

function obtenerfila(nombre, series, repeticiones, peso, imagen) {
  const clon = templatefilaejercicio.content.cloneNode(true);
  clon.querySelector(".nombreEj").textContent = nombre;
  clon.querySelector(".series").textContent = series;
  clon.querySelector(".repeticiones").textContent = repeticiones;
  clon.querySelector(".peso").textContent = peso;
  clon.querySelector(".imgEjercicios").src = imagen;
  return clon;
}
