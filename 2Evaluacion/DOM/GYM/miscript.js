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

listalimpia.forEach(function (ejer, indice) {
  grid.appendChild(dibujar(ejer));
});

function dibujar(ejercicio) {
  const clon = template.content.cloneNode(true);
  let imagen = clon.querySelector(".img-fluid");
  imagen.src = ejercicio.imagenes; //cuidado con la imagen que es src
  l;
  return clon;
}
