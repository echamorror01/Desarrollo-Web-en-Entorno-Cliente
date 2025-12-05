/*5. Pide al usuario una cantidad de "millas náuticas" y muestra la equivalencia en metros.*/
let cant = parseInt(prompt("Introduce una cantidad de millas"));
const millas = 1609.344;

let metros = cant * millas;
alert("La equivalencia en metros es " + metros);
