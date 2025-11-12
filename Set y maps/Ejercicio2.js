/*Ejercicio 2
Hacer una función que reciba un array como parámetro y devuelva true si todos los elementos del array
son únicos y false si hay algún elemento repetido. Al pulsar el botón del ejercicio debe mostrar un alert
indicando "Todos los elementos son únicos" o "Hay elementos repetidos" */

function miarray() {
  let conjuntoarray = new Set(miarray);
  return conjuntoarray.size == miarray.length;
}
function miarrayp() {
  let miarray = [5, 3, 2, 5, 5, 9, 4, 5];
  let sonunicos = miarray(miarray);
  alert(sonunicos ? "Todos son unicos" : "Hay repetidos");
}
