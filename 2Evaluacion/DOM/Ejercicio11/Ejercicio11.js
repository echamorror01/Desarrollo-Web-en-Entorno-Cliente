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
const lista = document.querySelector("#lista");
tareasIniciales.forEach(function (elementos, indice) {
  const li = crearElementoLista(elementos);
  lista.appendChild(li);
});

function crearElementoLista(texto) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = texto; //añadimos el texto
  li.appendChild(span); //metemos el span dentro del li
  const boton = document.createElement("button");
  boton.textContent = "Eliminar";
  boton.classList.add("btn-eliminar");
  // Evento para eliminar la tarea
  boton.addEventListener("click", function () {
    li.remove(); // esto siempre es asi, cuando pulsamos en eliminar, eliminamos el li
  });

  li.appendChild(boton); //metemos el boton dentro del li

  return li; //li completo
}
