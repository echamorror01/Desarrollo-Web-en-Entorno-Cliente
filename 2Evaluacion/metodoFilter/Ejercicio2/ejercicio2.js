/* Ejercicio 2: Filtrar un array de elementos y mostrar solo los que estén en las posiciones 
pares (en los índices pares del array). Usad este array: numeros = [10, 20, 30, 40, 50, 
60, 70, 80, 90];*/
let numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90];

let pares = numeros.filter((numero, indice) => indice % 2 == 0);
alert(pares);
