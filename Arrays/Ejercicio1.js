/*
1. Crea un programa que pida al usuario 6 números y luego los muestre en orden inverso (pista: usa
un array para almacenarlos y "for" para mostrarlos).*/

let num;
let miarray = [];
let contador = 0;

do {
  num = parseInt(prompt("Introduce un numero"));
  miarray.push(num); //aqui vamos guardando todos los numeros y lo vamos almacenando
  contador++;
} while (contador != 6);

for (let i = miarray.length - 1; i >= 0; i--) {
  console.log("El elemento " + i + " toma el valor " + miarray[i]);
}
