/*1. Función que defina una variable cadena con "hola que tal yo bien" y busque "tal" para mostrar la cadena
desde "tal" al final*/
function variable() {
  let mensaje = "hola que tal yo bien";
  let posicion = mensaje.indexOf("tal");
  console.log(posicion);
  let porcion = mensaje.substring(posicion);
  console.log(porcion);
}

function cadena() {
  let cadena = "hola que tal yo bien";
  let palabras = cadena.split(" "); // indice 0 hola, indice 1 que
  for (const indice in palabras) {
    alert("En el indice " + indice + " está la cadena " + palabras[indice]);
  }
}
