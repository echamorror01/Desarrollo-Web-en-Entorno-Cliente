/* Nos dan un array [5, 3, 2, 5, 5, 9, 4, 5]. Cuenta el número de elementos únicos (no repetidos) que hay*/

let array = [5, 3, 2, 5, 5, 9, 4, 5];
let unicos = new Set(array);

alert("En el array hay " + unicos.size + "elementos unicos");
