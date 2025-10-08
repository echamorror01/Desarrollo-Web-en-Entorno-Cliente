/*
5. Desarrolla un programa que pedirá nombres al usuario hasta que se introduzca un nombre vacío,
momento en el que dejarán de pedirse más nombres y se mostrará en pantalla la lista de los
nombres que se han introducido ordenados alfabéticamente.
*/
let nombre;
let miarray = [];
do {
  nombre = prompt("Introduce un nombre");
  if (nombre != "") {
    miarray.push(nombre);
  }
} while (nombre != "");
console.log("Estos son todos los nombres introducidos " + miarray);

//para ordenar alfabeticamente tenemos la funcion sort

miarray.sort();
console.log("Los nombres ordenados alfabeticamente " + miarray);
