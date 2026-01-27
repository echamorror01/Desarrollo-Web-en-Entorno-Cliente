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

* Al hacer click encima del <li> que tendrá la clase “texto” hacer que
 se ponga la tarea
como completada usando la clase “completada” y si se vuelve a pulsar 
que se quite la
tarea como completada. Indicar en consola “tarea marcada como X”
 donde X es
completada o pendiente. */

const lista = document.querySelector("#lista-tareas");
const botonagregar = document.querySelector("#btn-agregar");
let contador = 1;

function cargarTareasiniciales() {
  lista.appendChild(crearElementoLista("Estudiar Javascript"));
  lista.appendChild(crearElementoLista("Practicar DOM"));
  lista.appendChild(crearElementoLista("Hacer ejercicios"));
}

botonagregar.addEventListener("click", () => {
  //agregar un nuevo li
  const nuevaTarea = crearElementoLista("Tarea" + contador);
  lista.appendChild(nuevaTarea);
  contador++;
});

lista.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-eliminar")) {
    const li = e.target.parentElement; //el padre
    const texto = li.querySelector(".texto").textContent; //queryselector para cuando esta dentro de un elemento
    li.remove();
    console.log("Tarea Eliminada " + texto);
  }
  if (e.target.classList.contains("texto")) {
    e.target.classList.toggle("completada");
  }
});
function crearElementoLista(texto) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = texto;
  span.classList.add("texto");
  li.appendChild(span);
  const boton = document.createElement("button");
  boton.classList.add("btn-eliminar");
  boton.textContent = "X";
  li.appendChild(boton);

  return li;
}

/* Eventos del botón que siempre fuera*/
