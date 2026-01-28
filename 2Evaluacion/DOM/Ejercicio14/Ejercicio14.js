/*  
1. Al hacer click en "Aplicar Filtros":
o Filtrar por categoría seleccionada (usando selectedIndex).
o Si el checkbox “solo disponibles” está marcado (usar :checked), mostrar
solo productos con stock > 0.
o Ocultar productos que no cumplan los filtros añadiendo clase "oculto".
2. Mostrar en consola cuántos productos se muestran
3. Si no hay productos que mostrar, mostrar mensaje "No hay productos"
*/

const select = document.querySelector("#categoria");
const indice = select.selectedIndex;
const opcionseleccionada = select.options[indice];

console.log("Opcion seleccionada", opcionseleccionada.text);
console.log("Valor " + opcionseleccionada.value);

const marcados = document.querySelector("#solo-disponible:checked"); //los que estan marcados
const productos = document.querySelectorAll(".producto");
productos.forEach(function (product, indice) {
  if (marcados) {
    if ((product.dataset.stock = 0)) {
      product.classList.add("oculto");
    }
    if (product.dataset.categoria != opcionseleccionada.value) {
      product.classList.add("oculto");
    }
  }
});
