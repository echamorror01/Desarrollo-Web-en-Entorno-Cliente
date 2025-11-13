/*Ejercicio 2
Hacer una función que reciba un array como parámetro y devuelva true si todos los elementos del array
son únicos y false si hay algún elemento repetido. Al pulsar el botón del ejercicio debe mostrar un alert
indicando "Todos los elementos son únicos" o "Hay elementos repetidos" */

function miarray(array) {
  let conjuntoarray = new Set(array);
  return conjuntoarray.size == miarray.length;
}

function miarrayp() {
  let array = [5, 3, 2, 5, 5, 9, 4, 5];
  let sonunicos = miarray(array);
  alert(sonunicos ? "Todos son unicos" : "Hay repetidos");
  //condicion? valor si es vd: valor si es falso
}
