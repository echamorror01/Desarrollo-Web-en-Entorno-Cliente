/*Crear una función que tenga como parámetro de entrada un DNI y le ponga un 0 o no al principio según
corresponda (si tiene 7 caracteres, hay que ponerle un 0 delante).*/

function comprobardni() {
  let dni = prompt("Introduce un dni");
  if (dni == -1) {
    alert("Error");
  } else {
    let resultado = cerosdni(dni);
    alert("El dni es " + resultado);
  }
}

function cerosdni(dni) {
  //siempre que tenga return una funcion hay que recogerlo en una variable
  if (dni.length < 8) {
    let nuevo = dni.padStart(8, "0");
    return nuevo;
  } else {
    return -1;
  }
}
