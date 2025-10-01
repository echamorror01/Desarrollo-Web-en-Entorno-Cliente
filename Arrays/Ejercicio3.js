/*
. Crea un array de 100 elementos. El valor del primer elemento será 1, valor del segundo elemento
será 2, y así sucesivamente, de tal forma que el último elemento del array tendrá el valor 100.
Calcula la media de todos los elementos del array.
*/
let suma = 0;
let miarray = [];
for (let i = 0; i <= 100; i++) {
  miarray.push(i);
  suma += i;
}

let media = suma / miarray.length;
console.log("La media es " + media);
