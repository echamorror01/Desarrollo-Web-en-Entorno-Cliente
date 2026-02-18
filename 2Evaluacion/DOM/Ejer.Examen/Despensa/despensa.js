//Variables
const inputnombre = document.querySelector("#nombreProd");
const categoria = document.querySelector("#catProd");
const añadir = document.querySelector("#btnAnadir");
const template = document.querySelector("#tempProducto");
const contenedor = document.querySelector("#listaProductos");
const filtros = document.querySelector("#filtrosContenedor");
let productos = [];
let cantidad = 0;
let contador = 0;
let filtroActivo = "Todos";

añadir.addEventListener("click", () => {
  añadirP();
  dibujarFiltros();
  dibujarproductos();
});

function añadirP() {
  if (inputnombre.value == " ") {
    alert("El nombre esta vacío");
    return;
  }
  const nombrerepe = productos.find(function (produc) {
    return produc.nombre == inputnombre.value;
  });
  if (nombrerepe) {
    nombrerepe.cantidad += 1;
    return;
  }

  contador++;
  let productonuevo = {
    id: contador,
    nombre: inputnombre.value,
    categoria: categoria.value,
    cantidad: 1,
  };
  productos.push(productonuevo);
  inputnombre.value = "";
}
function eliminar(id) {
  const eliminar = productos.filter(function (eliminar) {
    return eliminar.id != id; // si hace true se queda y con false elimina
  });
  productos = eliminar;
  dibujarproductos();
}
function obtenertipo() {
  let unicos = [];
  productos.forEach(function (p) {
    if (!unicos.includes(p.categoria)) {
      unicos.push(p.categoria);
    }
  });
  unicos.unshift("Todos");
  return unicos;
}
function dibujarFiltros() {
  filtros.innerHTML = "";
  const categoria = obtenertipo();
  categoria.forEach(function (cat) {
    const div = document.createElement("div");
    div.classList.add("filtro");
    if (cat == filtroActivo) {
      div.classList.add("activo");
    }
    div.textContent = cat;
    div.addEventListener("click", function () {
      // Guardamos qué filtro se ha pulsado en la variable global
      filtroActivo = cat;
      // Refrescamos TODO: botones y lista de productos
      dibujarFiltros();
      dibujarproductos();
    });
    filtros.appendChild(div);
  });
}
function dibujarproductos() {
  contenedor.innerHTML = "";
  // Filtramos los productos según el filtroActivo
  const listaFiltrada = productos.filter(function (p) {
    if (filtroActivo === "Todos") {
      return true;
    }
    return p.categoria === filtroActivo;
  });
  //Aqui cambiamos a lista filtrada porque solo dibujamos lo que hay en la lista
  listaFiltrada.forEach(function (productos) {
    const clon = template.content.cloneNode(true);
    const nombre = clon.querySelector(".p-nombre");
    const categoria = clon.querySelector(".p-cat");
    const cantidad = clon.querySelector(".p-cant");
    nombre.textContent = productos.nombre;
    categoria.textContent = productos.categoria;
    cantidad.textContent = productos.cantidad;
    const aumentar = clon.querySelector(".btn-mas");
    const disminuir = clon.querySelector(".btn-menos");
    const elim = clon.querySelector(".btn-borrar");
    if (productos.cantidad == 0) {
      nombre.classList.add("agotado");
    }
    aumentar.addEventListener("click", () => {
      productos.cantidad += 1;
      dibujarproductos(); // Súper importante: volvemos a dibujar para ver el cambio
    });
    disminuir.addEventListener("click", () => {
      if (productos.cantidad > 0) {
        productos.cantidad -= 1;
        dibujarproductos();
      }
    });
    elim.addEventListener("click", () => {
      eliminar(productos.id);
    });
    contenedor.appendChild(clon);
  });
}
