/* Reduce: procesa todos los elementos de un array y los mezcla y saca un solo valor.
 Sumar o acumular los elementos de un valor a un unico valor
 const resultado = array.reduce((acumulador, elemento, índice, array) => {
// Código para acumular el valor
return nuevoValorDelAcumulador;
}, valorInicial); */

let numeros = [1, 2, 3, 4, 5];
let suma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
// En la primera el acumulador es  0
alert(suma);
