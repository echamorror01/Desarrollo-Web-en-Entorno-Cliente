//Variables
const añadir = document.querySelector("#btnAnadir");
const input = document.querySelector("#inputTarea");
const tipo = document.querySelector("#selectTipo");
const descripcion = document.querySelector("#inputTarea");
const template = document.querySelector("#templateTarea");
const contenedor = document.querySelector("#listaTareas");
const filtros = document.querySelector("#filtros");

//Cosas que necesitamos
let tareas = [];
let contador = 0;
let filtroAcctivo = "Todos";

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

function completarTarea(id) {
  const tareaencontrada = tareas.find(function (tarea) {
    //find: es para buscar
    return tarea.id == id;
  });
  if (tareaencontrada) {
    //Si encuentra la tarea
    tareaencontrada.completada = !tareaencontrada.completada; //Si la tarea estaba en false (pendiente), la pasa a true. Si estaba en true (hecha), la pasa a false. Esto permite que el mismo botón sirva para completar y para "deshacer".
  }
  if (tareaencontrada.completada) {
    // Si ahora está completada, guardamos la fecha
    tareaencontrada.fechaCompletada = new Date().toLocaleString("es-ES");
  } else {
    // Si se deshace, la ponemos a null
    tareaencontrada.fechaCompletada = null;
  }

  dibujarTareas();
}

function eliminarTarea(id) {
  //Borramos la tarea
  const tareasRestantes = tareas.filter(function (tarea) {
    //filter: crea un nuevo array con todos los elementos que cumplan la condición (borras,listar)
    if (tarea.id != id) {
      return true; // se queda  //Para "borrar" la tarea con ID 5, le decimos al programa: "Crea una lista nueva donde solo entren las tareas que tengan un ID que NO sea 5".
    } else {
      return false; //se borra
    }
  });
  tareas = tareasRestantes; //actualizamos

  //Punto 6Si el filtro que tienes puesto (ej: "Hogar") ya no existe en la lista,
  // tenemos que volver automáticamente a "Todos"
  const tiposDisponibles = obtenerTipos();
  if (tiposDisponibles.includes(filtroAcctivo) === false) {
    filtroAcctivo = "Todos";
  }
  dibujarTareas();
  dibujarFiltros();
}

function obtenerTipos() {
  let unicos = [];
  tareas.forEach(function (tarea) {
    //Si no está incluido en el array
    if (!unicos.includes(tarea.tipo)) {
      unicos.push(tarea.tipo);
    }
  });
  unicos.unshift("Todos"); //Añadimos Todos al principio
  return unicos;
}

function dibujarFiltros() {
  filtros.innerHTML = ""; //Borramos

  const tipos = obtenerTipos();

  tipos.forEach(function (tipo) {
    const divfiltro = document.createElement("div"); //contenedor
    divfiltro.classList.add("filtro");

    if (tipo == filtroAcctivo) {
      divfiltro.classList.add("activo");
    }
    divfiltro.textContent = tipo;
    divfiltro.addEventListener("click", () => {
      filtroAcctivo = tipo;
      dibujarFiltros();
      dibujarTareas();
    });
    filtros.appendChild(divfiltro);
  });
}

function dibujarTareas() {
  //cuidado con esto que hay que borrarlo siempre si no se duplica
  contenedor.innerHTML = "";

  //Filtro Activo
  const tareasfiltradas = tareas.filter(function (tarea) {
    //Si el filtro es Todos que salgan todas las tareas
    if (filtroAcctivo == "Todos") {
      //Aqui queremos que salgan todas las tareas
      return true;
    }
    //Si el filtro es trabajo , compramos si el tipo es igual al filtro
    if (tarea.tipo == filtroAcctivo) {
      return true; // coinciden mostramos
    } else {
      return false; // se quita
    }
  });
  // Si después de filtrar no hay nada (ej: no hay tareas de "Hogar")
  if (tareasfiltradas.length == 0) {
    const liVacio = document.createElement("li");
    liVacio.classList.add("sin-tareas");
    liVacio.textContent = "No hay tareas";

    contenedor.appendChild(liVacio);
    return;
  }

  tareasfiltradas.forEach(function (tarea, indice) {
    const clon = template.content.cloneNode(true);
    const li = clon.querySelector("li");
    const descripcion = clon.querySelector(".tarea-desc");
    descripcion.textContent = tarea.descripcion;
    const tipo = clon.querySelector(".tarea-tipo");
    tipo.textContent = tarea.tipo;
    const fecha = clon.querySelector(".tarea-fecha");

    //Botones
    const completar = clon.querySelector(".btn-completar");
    const eliminar = clon.querySelector(".btn-eliminar");

    if (!tarea.fechaCompletada) {
      // si la tarea no tiene fecha completada
      fecha.remove();
      completar.textContent = "Completar";
    } else {
      fecha.textContent = tarea.completada;
      li.classList.add("completada"); //le añadimos al li la clase completada
      completar.textContent = "Deshacer";
    }

    completar.addEventListener("click", (e) => {
      //ponemos el boton aqui porque lo hemos clonado si no lo clonamos lo sacamos fuera y se lo haríamos al padre (listatareas)
      completarTarea(tarea.id);
    });
    eliminar.addEventListener("click", (e) => {
      eliminarTarea(tarea.id);
    });
    contenedor.appendChild(clon);
    dibujarFiltros();
  });
}
