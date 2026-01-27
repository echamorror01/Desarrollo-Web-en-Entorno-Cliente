/* 
Ejercicio 9
Dado este HTML:
<div id="caja" class="contenedor">Mi caja</div>
Tareas:
1. Añade la clase "destacado" a la caja.
2. Verifica si tiene la clase "contenedor" y muestra el resultado en consola.
3. Elimina la clase "contenedor".
4. Muestra todas las clases finales en consola*/

function ejecutar() {
  const caja = document.querySelector("#caja");
  caja.classList.add("destacado");
  alert(caja.className); // vemos la clase
  const tienecontenedor = caja.classList.contains("contenedor");
  console.log("¿Tiene contenedor?" + tienecontenedor);
  caja.classList.remove("contenedor");
  console.log(caja.classList.length);
}


