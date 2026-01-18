/* Ejercicio 8
Recorre cada producto y muestra en consola: el nombre del producto, ID, precio y
stock.
Si el stock es cero, añadir a dicho producto la clase “sin-stock” para que se ponga en
rojo, añadir también el atributo “disponible” a false, para indicar que no está disponible
(true en caso contrario). Cambiar el texto del stock a AGOTADO.
Si el precio es menor a 500 es una oferta, por lo que hay que añadir la clase “oferta” y el
atributo esOferta a true. */

function ejecutar() {
  const producto = document.querySelectorAll(".producto");
  producto.forEach(function (product, indice) {
    console.log("Producto" + (indice + 1));
    console.log(product.dataset.nombre);
    console.log(product.dataset.id);
    console.log(product.dataset.precio);
    console.log(product.dataset.stock);
    if (parseInt(product.dataset.stock) == 0) {
      // hay que parsearlo porque dataset nos devuelve string
      product.classList.add("sin-stock");
      const disponible = (product.dataset.disponible = "false");
      console.log(disponible);
      const agotado = (product.dataset.stock = "AGOTADO");
      console.log(agotado);
    }
    if (parseInt(product.dataset.precio) < 500) {
      product.classList.add("oferta");
      const oferta = (product.dataset.oferta = "true");
      console.log(oferta);
    }
  });
}
