/*Ejemplo: Coger solo los elementos pares de un array:
Filtrar los elementos de un array 
let nuevoArray = arrayOriginal.filter(función(elemento, índice, array) => { … });
El indice y el array son opcionales a no se que lo necesitemos */

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numerosPares = numeros.filter((numero) => numero % 2 == 0);
alert(numerosPares);
