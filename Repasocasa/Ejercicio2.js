/*1. Función que defina una variable cadena con "hola que tal yo bien" y busque "tal" para mostrar la cadena
desde "tal" al final*/

function buscar() {
  let cadena = "Hola que tal yo bien";
  let posicion = cadena.indexOf("que");
  let porcion = cadena.substring(posicion);
  alert(porcion);
}
