//recorriendo la cadena hola#que#tal
//con un for usando split y sin join y guardar las cosas en un array
//usando split y join

function prueba() {
  let cadena = "Hola que tal ";
  let rdo = " ";
  for (const valor of cadena) {
    if (valor == " ") {
      rdo += "#";
    } else {
      rdo += valor;
    }
  }
  console.log(rdo);
}
