/* Crea una función “cargarTareasIniciales” que nada más cargar el HTML cree las
tareas:
- Estudiar Javascript.
- Practicar DOM.
- Hacer ejercicios.
Las 3 tareas son <li> que tendrán un <span> dentro con el nombre de la tarea y la clase
“texto”. También un botón con la clase “btn-eliminar” y como texto “X”.
* Cuando se haga click en “btn-agregar” que cree una nueva tarea con el texto “Tarea
X” donde X es un contador que empieza en 1 y se irá incrementando.
* Al hacer click en “btn-eliminar”, eliminar el <li> entero. Indicar en consola “Tarea
eliminada: X” donde X es el texto de la tarea recién eliminada.
* Al hacer click encima del <li> que tendrá la clase “texto” hacer que se ponga la tarea
como completada usando la clase “completada” y si se vuelve a pulsar que se quite la
tarea como completada. Indicar en consola “tarea marcada como X” donde X es
completada o pendiente. */

const listatareas = document.querySelector("#lista-tareas");
const agregar = document.querySelector("#btn-agregar ");
const contador = 1;
listatareas.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-eliminar")) {
    e.target.remove();
  }
});
agregar.addEventListener("click", (e) => {
  listatareas.appendChild(crearTarea("Tarea " + contador));
  contador++;
});

function cargarTareasIniciales() {
  listatareas.appendChild(crearTarea("Estudiar Javascript"));
  listatareas.appendChild(crearTarea("Practicar DOM"));
  listatareas.appendChild(crearTarea("Hacer ejercicios"));
}

function crearTarea(texto) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.classList.add("texto");
  span.textContent = texto;
  const boton = document.createElement("button");
  boton.classList.add("btn-eliminar");
}
