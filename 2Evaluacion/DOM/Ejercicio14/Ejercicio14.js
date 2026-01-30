/*  
1. Al hacer click en "Aplicar Filtros":
o Filtrar por categoría seleccionada (usando selectedIndex).
o Si el checkbox “solo disponibles” está marcado (usar :checked), mostrar
solo productos con stock > 0.
o Ocultar productos que no cumplan los filtros añadiendo clase "oculto".
2. Mostrar en consola cuántos productos se muestran
3. Si no hay productos que mostrar, mostrar mensaje "No hay productos"
*/

const aplicar = document.querySelector("aplicar-filtros");

aplicar.addEventListener("click", () => {
  const select = document.querySelector("#categoria");
  const indice = select.selectedIndex;
  const opcionseleccionada = select.options[indice];
  console.log("Texto " + opcionseleccionada.text);
  console.log("Valor " + opcionseleccionada.value);
  let visible = 0;
  //checbox
  const marcados = document.querySelector("#solo-disponible:checked"); // para ver si esta marcado
  const productos = document.querySelectorAll(".producto");

  productos.forEach(function (produc, indice) {
    if (opcionseleccionada.value != produc.dataset.categoria) {
      produc.classList.add("oculto");
      return;
    }

    if (marcados && parseInt(produc.dataset.stock) <= 0) {
      produc.classList.add("oculto");
      return;
    }
    visible++;
    console.log("Productos visibles" + visible);
    if (visible == 0) {
      console.log("No hay productos");
    }
  });
});
