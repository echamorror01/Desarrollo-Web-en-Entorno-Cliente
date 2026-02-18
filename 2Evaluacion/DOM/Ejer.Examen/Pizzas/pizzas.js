const contenedorbases = document.querySelector("#contenedor-bases");
const extras = document.querySelector("#contenedor-extras");
const extraelegido = document.querySelector("#extra-elegido");
const confirmar = document.querySelector("#btn-pedir");
const template = document.querySelector("#tmpl-comanda");
const comanda = document.querySelector("#contenedor-comandas");
const inputDireccion = document.querySelector("#direccion");
const bases = [
  {
    id: 1,
    nombre: "Margarita",
    foto: "https://images.unsplash.com/photo-1574071318508-1cdbad80ad38?w=200",
  },
  {
    id: 2,
    nombre: "Peperoni",
    foto: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=200",
  },
];
//1
bases.forEach(function (elemento) {
  const div = document.createElement("div");
  div.classList.add("base-item");
  const nombre = document.createElement("h4");
  nombre.textContent = elemento.nombre;
  const imagen = document.createElement("img");
  imagen.classList.add("img-base");
  imagen.src = elemento.foto;
  imagen.alt = elemento.nombre;

  div.setAttribute("data-id", elemento.id); //Guardamos el ID en un atributo data por si lo necesitas
  div.append(nombre, imagen);
  contenedorbases.appendChild(div);
});

//2
let baseseleccionada = null;
contenedorbases.addEventListener("click", (e) => {
  if (e.target.classList.contains("img-base")) {
    const bases = document.querySelectorAll(".base-item");
    bases.forEach(function (b) {
      e.target.classList.remove("seleccionada"); //le quitamos a todos la clase
    });
    /* Aquí decidimos a quién le vamos a poner el borde naranja (la clase).
    Si pinchaste en la imagen, la "caja" que queremos marcar es su padre (parentElement), que es el div.
    Si pinchaste directamente en el div, la "caja" es el propio e.target.*/
    if (e.target.classList.contains("img-base")) {
      caja = e.target.parentElement;
    } else {
      caja = e.target;
    }

    // 3. MARCAR Y GUARDAR
    caja.classList.add("seleccionada");
    const imagen = caja.querySelector("img");
    baseseleccionada = imagen.src;
  }
});
//3
let extraSeleccionado = null;
extras.addEventListener("click", (e) => {
  if (e.target.classList.contains("extra")) {
    const todosLosExtras = document.querySelectorAll(".extra");
    todosLosExtras.forEach(function (boton) {
      boton.classList.remove("extra-activo");
    });
    e.target.classList.add("extra-activo");
    extraSeleccionado = e.target.textContent;
  }
});
confirmar.addEventListener("click", (e) => {
  const direccion = inputDireccion.value;
  if (!baseseleccionada || !extraSeleccionado || direccion === "") {
    alert("¡Oye! Elige una pizza, un extra y escribe tu dirección.");
    return; // El return hace que el código de abajo NO se ejecute
  }
  const clon = template.content.cloneNode(true);
  const imagen = clon.querySelector(".img-pedido");
  imagen.src = baseseleccionada;
  const direc = clon.querySelector(".span-dir");
  direc.textContent = direccion;
  const extra = clon.querySelector(".span-extra");
  extra.textContent = extraSeleccionado;

  comanda.appendChild(clon);
  inputDireccion.value = "";
  console.log("¡Pedido creado con éxito!");
});
comanda.addEventListener("click", (e) => {
  // 1. LÓGICA PARA BORRAR
  if (e.target.classList.contains("btn-borrar")) {
    // Buscamos la "card" entera (el padre del botón) y la eliminamos
    const tarjeta = e.target.parentElement;
    tarjeta.remove();
    console.log("Pedido cancelado");
  }

  // 2. LÓGICA PARA EDITAR
  if (e.target.classList.contains("btn-editar")) {
    const nuevaDireccion = prompt("Introduce la nueva dirección de entrega:");

    if (nuevaDireccion) {
      // Si el usuario no le da a cancelar en el prompt
      // Buscamos el span de la dirección DENTRO de la tarjeta donde clicamos
      const tarjeta = e.target.parentElement;
      tarjeta.querySelector(".span-dir").textContent = nuevaDireccion;
    }
  }
});
