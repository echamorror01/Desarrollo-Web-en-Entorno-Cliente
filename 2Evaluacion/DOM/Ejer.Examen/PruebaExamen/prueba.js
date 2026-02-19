// VARIABLES
const div = document.querySelector(".conciertos");
const templateConcierto = document.querySelector("#tmpl-concierto");
let reservas = [];
let imagenseleccionada = null;

// EL ARRAY DE OBJETOS (Lo que te dará el profesor)
const conciertos = [
  { id: 1, nombre: "Big Time Rush", precio: 50, imagen: "images/BigTime.webp" },
  { id: 2, nombre: "Green Day", precio: 80, imagen: "images/GreenDay.webp" },
  { id: 3, nombre: "Bunbury", precio: 65, imagen: "images/Bunbury.webp" },
];

// FUNCIÓN 1: Cargar catálogo usando el CLON del template
function cargarCatalogo() {
  div.innerHTML = ""; // Limpiamos el contenedor

  conciertos.forEach(function (concierto) {
    // A. Clonamos el template del concierto
    const clon = templateConcierto.content.cloneNode(true);

    // B. Rellenamos con los datos del objeto
    const imagen = clon.querySelector(".img-fluid");
    imagen.src = concierto.imagen;
    imagen.alt = concierto.nombre;
    imagen.dataset.id = concierto.id;

    clon.querySelector(".titulo-concierto").textContent = concierto.nombre;
    clon.querySelector(".precio-concierto").textContent =
      concierto.precio + "€";

    // C. Evento de selección (Cambio de color al hacer click)
    imagen.addEventListener("click", function () {
      // Quitamos bordes a todas
      const todas = div.querySelectorAll(".img-fluid");
      todas.forEach((i) => (i.style.border = "none"));

      // Ponemos borde a la seleccionada (Cambio de color)
      imagen.style.border = "4px solid blue";
      imagenseleccionada = concierto.imagen;
    });

    // D. Inyectamos en el DOM
    div.appendChild(clon);
  });
}

// FUNCIÓN 2: Reservar (Con cálculo de +130 días)
btnReservar.addEventListener("click", function () {
  const nombre = inputNombre.value;
  const apellidos = inputApellidos.value;

  // Validación
  if (!imagenseleccionada || !asientoseleccionado || nombre == "") {
    alert("Faltan datos por rellenar");
    return;
  }

  // FECHAS (Lo que querías de +130 días)
  const hoy = new Date();
  const caducidad = new Date();
  caducidad.setDate(hoy.getDate() + 130);

  // Creamos objeto
  const nuevaReserva = {
    id: Date.now(),
    nombre: nombre,
    apellidos: apellidos,
    butaca: asientoseleccionado,
    imagen: imagenseleccionada,
    fecha: hoy.toLocaleDateString(),
    vence: caducidad.toLocaleDateString(), // Guardamos la fecha futura
  };

  reservas.push(nuevaReserva);

  // Bloqueamos butaca y actualizamos
  marcarButacaReservada();
  actualizarmensaje();
  dibujarReservas();
});

// FUNCIÓN 3: Dibujar Reservas (Con cambio de color dinámico)
function dibujarReservas() {
  const seccion = document.querySelector("#reservas");
  // Limpiamos tarjetas viejas
  document.querySelectorAll(".butacasReservadas").forEach((f) => f.remove());

  reservas.forEach(function (res) {
    const clon = templateReserva.content.cloneNode(true);

    clon.querySelector(".img-concierto").src = res.imagen;
    clon.querySelector(".span-nombre").textContent = res.nombre;
    clon.querySelector(".span-butaca").textContent = res.butaca;

    // Ponemos la fecha de caducidad (+130 días) en algún sitio
    const spanVence = clon.querySelector(".span-vence");
    if (spanVence) spanVence.textContent = res.vence;

    // CAMBIO DE COLOR DINÁMICO
    // Si la butaca es mayor a 10, la tarjeta se pone de otro color
    if (parseInt(res.butaca) > 10) {
      clon.querySelector(".butacasReservadas").style.backgroundColor =
        "#ffebeb";
    }

    seccion.appendChild(clon);
  });
}

// Llamada inicial
cargarCatalogo();

/* Concierto imagenes color
function dibujar(arrayFormateado) {
  arrayFormateado.forEach((foto) => {
    const img = document.createElement('img');
    img.src = foto.images + '/' + foto.imagen;
    img.classList.add('img-fluid');

    // Evento click que marca la imagen seleccionada
    img.addEventListener('click', (e) => {
      const todas = divImagenes.querySelectorAll('img');
      todas.forEach(
        (
          imagenes, //borra las clases de todas, para no dejar el azul a todas
        ) => imagenes.classList.remove('border', 'border-4', 'border-primary'),
      );

      // Poner borde solo a la seleccionada
      e.target.classList.add('border', 'border-4', 'border-primary');

      imagenSeleccionada = e.target.src; // Guardar la imagen seleccionada
    });

    divImagenes.appendChild(img);
  });
} */
