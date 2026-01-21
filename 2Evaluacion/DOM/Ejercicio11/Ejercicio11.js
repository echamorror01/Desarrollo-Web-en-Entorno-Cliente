/*Ejercicio 11 – Lista dinámica
Vamos a crear una aplicación que permite añadir y eliminar elementos de una lista.
Estilo y elementos HTML:
Recorrer el array de tareas iniciales y crea elementos <li> y dentro <span> con el texto
de cada tarea, añade un botón eliminar con la clase “btn-eliminar”. Crea una función
“crearElementoLista” que tenga como parámetro de entrada un texto y devuelva el <li>
a insertar: */

const tareasIniciales = [
  "Estudiar JavaScript",
  "Practicar DOM",
  "Hacer ejercicios",
];

tareasIniciales.forEach(function (elementos, indice) {});

function crearElementoLista(texto) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = texto;

  li.appendChild(span);
  return li;
}
