//Variables
const anadir = document.querySelector("#btnAnadir");
const input = document.querySelector("#inputTarea");
const select = document.querySelector("#selectTipo");
const template = document.querySelector("#templateTarea");
const listatareas = document.querySelector("#listaTareas");

//Cosas que necesitamos
let tareas = [];
let contador = 0;

function añadirTarea() {
  if (input.value == "") {
    alert("Está vacío");
    return;
  }
  contador++;
  let nuevaTarea = {
    id: contador,
    descripcion: input.value, //los input siempre con value
    tipo: select.value,
    completada: false,
    fechaCompletada: null,
  };
  tareas.push(nuevaTarea);

  input.value = "";
  console.log(tareas);
}
anadir.addEventListener("click", () => {
  añadirTarea();
});

function dibujarTareas() {
  listatareas.innerHTML = "";

  tareas.forEach(function (tarea, indice) {
    const clon = template.content.cloneNode(true);
    const li = clon.querySelector("li");
    const descripcion = clon.querySelector(".tarea-desc");
    descripcion.textContent = tarea.descripcion;
    const tipo = clon.querySelector(".tarea-tipo");
    tipo.textContent = tarea.tipo;
    const fecha = clon.querySelector(".tarea-fecha");
    fecha.textContent = tarea.fechaCompletada;
    const completar = clon.querySelector(".btn-completar");
    const eliminar = clon.querySelector(".btn-eliminar");

    if (tarea.fechaCompletada == "") {
      fecha.remove();
      return;
    }
  });
}
