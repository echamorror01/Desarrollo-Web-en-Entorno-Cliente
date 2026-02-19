//Variables
const div = document.querySelector(".conciertos");

let reservas = [];

/* Este apartado por si me da un array mas grande y tengo que crear mas cosas
const conciertos = [
  { id: 1, nombre: "Big Time Rush", precio: 50, fecha: "2026-05-12", imagen: "images/BigTime.webp" },
  { id: 2, nombre: "Green Day", precio: 80, fecha: "2026-06-15", imagen: "images/GreenDay.webp" },
  // ... más conciertos
];
conciertos.forEach(function (concierto) {
  // 1. Creamos un contenedor para el concierto
  const card = document.createElement("div");
  card.classList.add("concierto-card");

  // 2. Creamos y configuramos la imagen
  const img = document.createElement("img");
  img.src = concierto.imagen; // Accedemos a la propiedad .imagen
  img.alt = concierto.nombre;
  img.classList.add("img-fluid");

  // 3. Creamos el título (nombre)
  const titulo = document.createElement("h3");
  titulo.textContent = concierto.nombre;

 // 4. Creamos el elemento para la fecha
const pFecha = document.createElement("p");
pFecha.textContent = `Fecha: ${concierto.fecha}`;
pFecha.classList.add("fecha-texto");

// 5. Creamos el elemento para el precio
const pPrecio = document.createElement("p");
pPrecio.textContent = `Precio: ${concierto.precio}€`;
pPrecio.classList.add("precio-destacado");

  // 5. Metemos todo dentro del contenedor 'card'
  card.appendChild(img);
  card.appendChild(titulo);
  card.appendChild(pFecha);
  card.appendChild(pPrecio);
  // 6. Finalmente, metemos la card en el div principal del HTML
  divc.appendChild(card);
});
 */
const imagenesConciertos = [
  "images/BigTime.webp",
  "images/GreenDay.webp",
  "images/Bunbury.webp",
  "images/Evanescence.webp",
  "images/Hans.webp",
];

imagenesConciertos.forEach(function (img) {
  const imagen = document.createElement("img");
  imagen.classList.add("img-fluid");
  imagen.src = img;
  div.appendChild(imagen);
});

/*Función para cargar las imágenes
function cargarImagenes() {
    //a. Limpiamos el html por si contiene algo
    div.innerHTML = "";

    //b. Recorremos el array
    imagenesConciertos.forEach(function (url, indice) {
        //c. Cremos el elemento imagen
        const img = document.createElement("img");
        //d. Le asignamos la url
        img.src = url;
        //e. Le ponemos las clases
        img.classList.add("img-fluid");

        //Añadimos un evento a la imagen para que se seleccione al hacer click
        img.addEventListener("click", function () {
            //1 Quitamos el borde a todas
            const todasLasImgs = div.querySelectorAll("img");
            todasLasImgs.forEach(function (i, indice) {
                i.style.border = "none";
            });

            //Ponemos borde a la clickada
            img.style.border = "4px solid blue";

            //Guardamos la imagen seleccionada
            imagenSeleccionada = url;
        })
        //f. Lo añadimos al divConcierdos
        div.appendChild(img);
    });
}
//LLamamos a la función
cargarImagenes();*/

//2
let imagenseleccionada = null;
div.addEventListener("click", (e) => {
  if (e.target.classList.contains("img-fluid")) {
    const imagenes = document.querySelectorAll("img");
    imagenes.forEach(function (i) {
      i.style.border = "none";
    });
    e.target.style.border = "4px solid blue"; //se lo agregamos a la imagen
    imagenseleccionada = e.target.src; // marcamos la seleccionada
  }
});

//3
function actualizarmensaje() {
  // Buscamos si el mensaje ya existe en el DOM
  let mensaje = document.querySelector(".msj-vacio");

  if (reservas.length === 0) {
    // Si no hay reservas y el mensaje NO existe, lo creamos
    if (!mensaje) {
      mensaje = document.createElement("p");
      mensaje.textContent = "No hay reservas todavía";
      mensaje.classList.add("msj-vacio");
      mensaje.style.textAlign = "center";
      mensaje.style.color = "gray";
      seccionreservas.appendChild(mensaje);
    }
  } else {
    // Si hay reservas y el mensaje existe, lo borramos
    if (mensaje) {
      mensaje.remove();
    }
  }
}

//4
let asientoseleccionado = null;
const butacaSelecc = document.querySelector(".butacaSeleccionada");
const todosasientos = document.querySelectorAll(".asiento");

todosasientos.forEach(function (asiento) {
  asiento.addEventListener("click", () => {
    if (asiento.classList.contains("reservado-fijo")) {
      alert("La butaca seleccionada está ocupada");
      return;
    }
    //Quitamos la clase ocupado a los otros asientos
    todosasientos.forEach(function (a) {
      a.classList.remove("ocupado");
    });
    //Marcamos el actual el rojo
    asiento.classList.add("ocupado");
    asientoseleccionado = asiento.textContent;
    butacaSelecc.textContent = asientoseleccionado;
  });
});

//5
const btnReservar = document.querySelector(".botonReservar");
const inputNombre = document.querySelector(".nombre");
const inputApellidos = document.querySelector(".apellidos");
const templateReserva = document.querySelector("#tmpl-reserva");

//Añadimos un evento para realizar la reserva
//Validar-> Guardar-> Dibujar -> Limpiar
btnReservar.addEventListener("click", function () {
  const nombre = inputNombre.value;
  const apellidos = inputApellidos.value;

  //1. VALIDACIÓN: Comprobamos que todo está relleno
  if (
    imagenseleccionada === null ||
    asientoseleccionado === null ||
    nombre == "" ||
    apellidos == ""
  ) {
    alert(
      "Debe seleccionar una imagen, escribir un nombre y apellido y seleccionar una butaca antes de reservar",
    );
    return; //Paramos si falta algo por rellenar
  }
  /* // 1. Capturamos el momento de la reserva
    const fechaReserva = new Date();
    
    // 2. Calculamos la caducidad (Sumar 130)
    const fechaCaducidad = new Date(); // Creamos otra copia para no modificar la de hoy
    fechaCaducidad.setDate(fechaCaducidad.getDate() + 130);

    // 3. Creamos el objeto para el array
    const nuevaReserva = {
        id: Date.now(),
        nombre: inputNombre.value,
        fechaCompra: fechaReserva.toLocaleDateString(),
        fechaLimite: fechaCaducidad.toLocaleDateString() // Esta es la que tiene +130 días
    };*/
  //2. CREAR OBJETO: Guardamos los datos de la reserva
  const nuevaReserva = {
    id: Date.now(),
    nombre: nombre,
    apellidos: apellidos,
    butaca: asientoseleccionado,
    imagen: imagenseleccionada,
  };

  //3.Añadimos el objeto al array
  reservas.push(nuevaReserva);

  //4. BLOQUEAMOS LA BUTACA: para que no pueda volver a ser seleccionada
  //Buscamos el asiento que tiene el número seleccionado y le ponemos una clase fija

  todosasientos.forEach(function (asiento, indice) {
    if (asiento.textContent == asientoseleccionado) {
      asiento.classList.add("reservado-fijo");
      asiento.classList.add("ocupado");
    }
  });

  //5. LIMPIAR EL FORMULARIO
  inputNombre.value = "";
  inputApellidos.value = "";
  butacaSelecc.textContent = "";
  asientoseleccionado = null;
  imagenseleccionada = null;

  //Quitamos el borde azul de las fotos
  const todasLasImgs = div.querySelectorAll("img");
  todasLasImgs.forEach(function (i, indice) {
    i.style.border = "none";
  });

  //ACTUALIZAR VISTA
  actualizarmensaje(); // Para que se borre el "No hay reservas"
  dibujarReservas();
});

//Función que pinta las reservas usando el template
function dibujarReservas() {
  // A. Limpiar las filas anteriores para no duplicar (excepto el título h2)
  // El selector .butacasReservadas es la clase que tiene el div principal del template
  const filasViejas = document.querySelectorAll(".butacasReservadas");
  const seccionreservas = document.querySelector("#reservas");
  filasViejas.forEach(function (f) {
    f.remove();
  });

  //B. Recorremos el array de reservas
  reservas.forEach(function (res) {
    //C. Clonamos el template
    const clon = templateReserva.content.cloneNode(true);

    //D. Rellenamos los datos del clon
    clon.querySelector(".img-concierto").src = res.imagen;
    clon.querySelector(".span-nombre").textContent = res.nombre;
    clon.querySelector(".span-apellidos").textContent = res.apellidos;
    clon.querySelector(".span-butaca").textContent = res.butaca;

    //LLAMAMOS A LAS FUNCIONES PARA ELIMINAR Y EDITAR DEL PUNTO 6 Y 7
    clon
      .querySelector(".papeleraBorrar")
      .addEventListener("click", function () {
        borrarReserva(res.id, res.butaca);
      });

    clon
      .querySelector(".modificarNombre")
      .addEventListener("click", function () {
        editarReservas(res.id);
      });

    //E. Colocar el clon en la sección de reservas
    seccionreservas.appendChild(clon);
  });
}
//6

function borrarReserva(idBorrar, numeroButaca) {
  //1. Liberar el asiento físico
  const asientos = document.querySelectorAll(".asiento");
  asientos.forEach(function (asiento, indice) {
    if (asiento.textContent == numeroButaca) {
      asiento.classList.remove("reservado-fijo");
      asiento.classList.remove("ocupado");
    }
  });

  //Filtramos el array
  reservas = reservas.filter(function (res) {
    return res.id !== idBorrar;
  });

  //3. Actualizar todo
  dibujarReservas();
  actualizarmensaje();
}

// Ejercicio 7. Al pulsar el icono de un lápiz dentro de un cuadrado junto al botón de papelera, se pedirá un nombre y un apellido y se modificará el nombre y apellido de la reserva de butaca.

//Función para editar Reservas
function editarReservas(idAEditar) {
  //Buscamos en el array la reserva
  const reserva = reservas.find(function (r) {
    return r.id === idAEditar;
  });

  if (reserva) {
    const nuevoNom = prompt("Nuevo nombre: ", reserva.nombre);
    const nuevoApe = prompt("Nuevo apellido", reserva.apellidos);

    if (nuevoNom != null && nuevoApe != null) {
      reserva.nombre = nuevoNom;
      reserva.apellidos = nuevoApe;
      dibujarReservas();
    }
  }
}
