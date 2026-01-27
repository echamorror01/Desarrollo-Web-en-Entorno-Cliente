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
  //agregar un  nuevo li tiene que estar fuera  porque cada click crea una nueva tarea
  lista.appendChild(crearElementoLista("Tarea" + contador));
  contador++;
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

  boton.addEventListener("click", () => {
    //eliminar un li , estos dos si pueden estar dentro porque cada li tiene estos eventos
    console.log("Tarea eliminada " + span.textContent);
    li.remove();
  });

  span.addEventListener("click", () => {
    span.classList.toggle("completada");
    if (span.classList.contains("completada")) {
      console.log("tarea marcada como completada");
    } else {
      console.log("tarea mascada como pendiente");
    }
  });

  return li;
}

/* Eventos del botón que siempre está en la página- fuera de la función de creación
Eventos del contenido que se crea dinámicamente- dentro de la funcion de la creación*/
