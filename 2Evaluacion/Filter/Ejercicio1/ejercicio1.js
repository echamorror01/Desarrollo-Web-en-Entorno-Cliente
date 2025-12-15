/*Ejercicio 1: Obtener de un array solo las cadenas que tengan una longitud mayor a 5
caracteres. palabras = ['manzana', 'pera', 'banana', 'uva', 'sandía', 'kiwi'] */

let palabras = ["manzana", "pera", "banana", "uva", "sandía", "kiwi"];
let palabrasmayorcinco = palabras.filter((palabras) => palabras.length > 5);
alert(palabrasmayorcinco);
