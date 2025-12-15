/* 
Map:Esta función transforma elementos de un array. Map tiene como parámetro de
entrada una función y la aplica a cada elemento del array original, creando un nuevo
array con los resultados de la transformación. Básicamente map permite crear un
nuevo array basado en los elementos del array original, pero modificados de acuerdo
con la función proporcionada. 
 et nuevoArray = arrayOriginal.map((elemento, índice, array) => {
// Código para transformar el elemento
return nuevoElemento;*/

let numeros = [1, 2, 3, 4, 5];
let numerosDuplicados = numeros.map((numero) => numero * 2);
alert(numerosDuplicados);
