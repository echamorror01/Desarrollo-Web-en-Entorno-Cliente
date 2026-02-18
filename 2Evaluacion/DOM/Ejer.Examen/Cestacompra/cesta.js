const contenedor = document.querySelector("#form-container");
const inputproducto = document.querySelector("#inputProducto");
const inputcantidad = document.querySelector("#inputCantidad");
const lista = document.querySelector("#listaCompra");
const añadir = document.querySelector("#btnAnadir");
const filtros = document.querySelector("#filtros");
let array = [];
let contador = 0;
let filtroActivo = "Todos";

añadir.addEventListener("click", () => {
  añadirP();
  dibujarlista();
  dibujarFiltros();
});
function añadirP() {
  if (inputproducto.value == "" || inputcantidad == "") {
    alert("El nombre o la cantidad  no estan rellenos ");
    return;
  }
  let fechaConsumo = new Date();
  fechaConsumo.setDate(fechaConsumo.getDate() + 2);
  contador++;
  let nuevo = {
    id: contador,
    nombre: inputproducto.value,
    cantidad: inputcantidad.value,
    comprado: false,
    fecha: fechaConsumo,
  };
  array.push(nuevo);
  inputproducto.value = "";
  inputcantidad.value = "";
}

function dibujarlista() {
  lista.innerHTML = "";
  // 2. Filtrar el array según el estado del filtroActivo
  const listaFiltrada = array.filter((p) => {
    if (filtroActivo === "Todos") return true;
    if (filtroActivo === "Comprados") return p.comprado === true;
    if (filtroActivo === "Pendientes") return p.comprado === false;
    return true;
  });
  listaFiltrada.forEach(function (filtr) {
    const li = document.createElement("li");
    const spanNombre = document.createElement("span");
    const botoneliminar = document.createElement("button");
    const botoncheck = document.createElement("button");

    // --- NUEVO: Formatear fecha y lógica de color rojo ---
    const hoy = new Date();
    const fechaFormateada = filtr.fecha.toLocaleDateString(); // Ejemplo: "20/05/2024"

    spanNombre.textContent =
      filtr.nombre + " x " + filtr.cantidad + "Vence" + fechaFormateada;
    // Si NO está comprado y la fecha actual es mayor a la de consumo
    if (!filtr.comprado && hoy > filtr.fecha) {
      spanNombre.classList.add("caducado");
    }
    botoneliminar.textContent = "🗑️";
    botoncheck.textContent = filtr.comprado ? "↩️" : "✅";

    if (filtr.comprado) {
      li.classList.add("completada");
    }

    botoncheck.addEventListener("click", () => {
      filtr.comprado = !filtr.comprado; // esto si es true lo cambia a false y al reves (toogle)
      dibujarlista();
    });
    botoneliminar.addEventListener("click", () => {
      const productosrestantes = array.filter(function (p) {
        //filter: crea un nuevo array con todos los elementos que cumplan la condición (borras,listar)
        if (p.id != filtr.id) {
          return true; // se queda
        } else {
          return false; //se borra
        }
      });
      array = productosrestantes;
      dibujarlista();
    });

    li.append(spanNombre, botoncheck, botoneliminar);
    lista.appendChild(li);
  });
}
function dibujarFiltros() {
  // Limpiamos el contenedor de filtros para que no se dupliquen los botones
  filtros.innerHTML = "";

  // Definimos las opciones que queremos mostrar
  const opciones = ["Todos", "Pendientes", "Comprados"];

  opciones.forEach((opcion) => {
    // Creamos el botón
    const btn = document.createElement("button");
    btn.textContent = opcion;

    // Si la opción coincide con el filtro activo, le ponemos la clase "activo"
    if (filtroActivo === opcion) {
      btn.classList.add("activo");
    }

    // Al hacer clic, actualizamos el estado y redibujamos todo
    btn.onclick = () => {
      filtroActivo = opcion; // Cambiamos el valor de la variable global
      dibujarFiltros(); // Volvemos a dibujar los botones para que cambie el botón "activo"
      dibujarlista(); // Filtramos la lista de productos en pantalla
    };

    // Metemos el botón en el contenedor del HTML
    filtros.appendChild(btn);
  });
}
dibujarFiltros();
// Llamamos a la función por primera vez para que los botones aparezcan al cargar la página
