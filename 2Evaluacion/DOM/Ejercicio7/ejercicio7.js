/*Ejercicio 7
Recorre todos los productos y muestra en console.log:
Producto 1:
ID:
Nombre:
Precio:
Stock:
Modifica el primer producto y ponle un precio de 69 y añade un nuevo atributo llamado
“enOferta” con valor true. Mostrar el valor de las modificaciones
 */

function ejecutar() {
  const producto = document.querySelectorAll(".producto");
  producto.forEach(function (product, indice) {
    alert("Producto" + (indice + 1));
    alert(product.dataset.id);
    alert(product.dataset.nombre);
    alert(product.dataset.precio);
    alert(product.dataset.stock);
    

    if (indice == 0) {
      //const primerproducto= product[0]
      product.setAttribute("data-precio", 69);
      let precio = product.getAttribute("data-precio");
      product.setAttribute("oferta", "true");
      console.log(precio);
      console.log("Atributo añadido " + product.getAttribute("oferta"));
    }
  });
}
