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
const aplicar = document.querySelector("#aplicar-filtros");
const productos = document.querySelectorAll(".producto");
aplicar.addEventListener("click", () => {
  const indice = select.selectedIndex;
  const opcionseleccionada = select.options[indice].value;
  let contadorProductos = 0;
  //checkbox
  const marcados = document.querySelector("#solo-disponibles:checked"); // para ver si esta marcado devuelve true o false

  productos.forEach(function (produc, indice) {
    if (
      opcionseleccionada != produc.dataset.categoria &&
      opcionseleccionada != ""
    ) {
      produc.classList.add("oculto");
    } else {
      produc.classList.remove("oculto");
    }

    if (marcados && produc.dataset.stock == 0) {
      produc.classList.add("oculto");
    }
    if (!produc.classList.contains("oculto")) {
      contadorProductos++;
    }
  });
  if (contadorProductos > 0) {
    console.log("Productos seleccionados: " + contadorProductos);
  } else {
    console.log("No hay productos");
  }
});
