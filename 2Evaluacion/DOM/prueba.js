function ejecutar() {
  // Seleccionar por etiqueta (tag)
  const titulo = document.querySelector("h1");
  console.log(titulo); // <h1>Mi página web</h1>

  // Seleccionar por clase
  const parrafoDestacado = document.querySelector(".destacado"); // si quiero que saque los dos ponemos qerySelectorAll
  console.log(parrafoDestacado); // <p class="destacado">Primer párrafo importante</p>

  // IMPORTANTE: Aunque hay 2 párrafos con clase "destacado", solo devuelve el primero

  // Seleccionar por ID
  const contenedor = document.querySelector("#contenedor");
  console.log(contenedor); // <div id="contenedor">...</div>

  // Seleccionar elemento dentro de otro (selector descendente)
  const span = document.querySelector("#contenedor span");
  console.log(span); // <span>Texto dentro del div</span>

  // Si el selector no encuentra nada, devuelve null
  const noExiste = document.querySelector(".no-existe");
  console.log(noExiste); // null
}
