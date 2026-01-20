/*
Tareas:
1. Selecciona el h2 que está dentro del div con id "contenedor" y muestra el texto
que tiene dentro.
2. Selecciona todos los li con clase "oferta". Mostrar cada uno con el texto:
Oferta 1: X…
3. Selecciona todos los li (estén o no en oferta) y muestre cuántos hay.
4. Muestra en consola cuántos productos en oferta hay.
*/

function ejecutar() {
  const h2 = document.querySelector("#contenedor h2");
  console.log(h2.textContent);

  const oferta = document.querySelectorAll(".oferta");
  oferta.forEach(function (li, indice) {
    console.log("Oferta" + (indice + 1) + li.textContent);
  });

  const li = document.querySelectorAll("#contenedor li "); // si pongo li solo tambien funciona
  console.log(li.length);

  console.log(oferta.length);
}

/*Selector	Qué busca
#contenedor h2	<h2> dentro de #contenedor
#contenedorh2	elemento con id contenedorh2
h2#contenedor	<h2> con id contenedor*/
