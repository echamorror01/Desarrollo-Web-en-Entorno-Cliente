/* Ejercicio 1: Obtener de un array solo las cadenas que tengan una longitud mayor a 5 
caracteres. palabras = ['manzana', 'pera', 'banana', 'uva', 'sandía', 'kiwi']; */

let palabras = ["manzana", "pera", "banana", "uva", "sandía", "kiwi"];
let longitud = palabras.filter((palabra) => palabra.length > 5);
alert(longitud);
