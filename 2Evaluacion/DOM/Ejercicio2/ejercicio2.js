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
  const h2contenedor = document.querySelector("div#contenedor h2");
  console.log(h2contenedor); //que esta dentro significa la separacion
  const ofertas = document.querySelectorAll("li.oferta");
  ofertas.forEach(function (oferta, indice) {
    console.log("Oferta" + (indice + 1) + oferta.textContent);
  });
  console.log(ofertas.length);
}
