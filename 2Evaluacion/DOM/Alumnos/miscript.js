//Variables
const añadir = document.querySelector("#btnAnadir");
const input = document.querySelector("#inputTarea");
const tipo = document.querySelector("#selectTipo");
const descripcion = document.querySelector("#inputTarea");
const template = document.querySelector("#templateTarea");
const contenedor = document.querySelector("#listaTareas");
//Cosas que necesitamos
let tareas = [];
let contador = 0;

//Botones
añadir.addEventListener("click", () => {
  añadirTarea();
  dibujarTareas();
});

function añadirTarea() {
  if (input.value == "") {
    alert("La descripcion esta vacía");
    return;
  }
  contador++;
  let nuevaTarea = {
    id: contador,
    descripcion: input.value,
    tipo: tipo.value,
    completada: false,
    fechaCompletada: null,
  };

  tareas.push(nuevaTarea);
  input.value = "";
}

function completarTarea(id) {}
function eliminarTarea(id) {}

function obtenerTipos() {}
function dibujarFiltros() {}

function dibujarTareas() {
  contenedor.innerHTML = ""; //cuidado con esto que hay que borrarlo siempre si no se duplica
  tareas.forEach(function (tarea, indice) {
    const clon = template.content.cloneNode(true);
    const li = document.querySelector("li");
    const descripcion = clon.querySelector(".tarea-desc");
    descripcion.textContent = tarea.descripcion;
    const tipo = clon.querySelector(".tarea-tipo");
    tipo.textContent = tarea.tipo;
    const fecha = clon.querySelector(".tarea-fecha");

    //Botones
    const completar = clon.querySelector(".btn-completar");
    const eliminar = clon.querySelector(".btn-eliminar");

    if (!tarea.fechaCompletada) {
      fecha.remove();
    } else {
      fecha.textContent = tarea.completada;
      li.classList.add("completada");
    }

    completar.addEventListener("click", (e) => {
      if (!tarea.completada) {
        tarea.completada = true;
        fecha.textContent = new Date().toLocaleString("es-ES");
        e.target.textContent = "Deshacer";
      } else {
        fechaCompletada == null;
      }
    });
    contenedor.appendChild(clon);
  });
}
