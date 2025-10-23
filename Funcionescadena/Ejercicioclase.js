//recorriendo la cadena hola#que#tal
//con un for usando split y sin join y guardar las cosas en un array
//usando split y join

function recorriendocadena() {
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

function sinjoin() {
  let cadena = "Hola que tal";
  let arraycadena = cadena.split(" ");
  let salida = " ";
  for (const valor of arraycadena) {
    if (salida == " ") {
      salida += valor;
    } else {
      salida += "#" + valor;
    }
  }
  alert(salida);
}

function conjoin() {
  let cadena = "Hola que tal";
  let arraycadena = cadena.split(" ");
  let rdo = arraycadena.join("#");
  alert(rdo);
}
