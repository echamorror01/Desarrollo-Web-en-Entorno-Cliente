const añadir = document.querySelector("#btnAñadir");
const input = document.querySelector("#inputTarea");
let tareas = [];

function añadirTarea() {
  contador++;
  let nuevaTarea = {
    id: contador,
    descripcion: "",
    tipo: "",
    completada: false,
    fechaCompletada: null,
  };

  añadir.addEventListener("click", () => {
    tareas.push(nuevaTarea);
  });
  if ((input.textContent = "")) {
    alert("Está vacío");
  }
}
