/*4. Un programa que pida al usuario 10 números, calcule su media y luego muestre los que están por
encima de la media*/

let miarray = [];
let suma = 0;
let contador = 0;

do {
  let numero = parseInt(prompt("Introduce un numero"));
  contador++;
  miarray.push(numero);
  suma += numero;
} while (contador != 10);

let media = suma / contador;
console.log("La media de los numeros " + "es" + media);

for (i = 0; i < miarray.length; i++) {
  if (miarray[i] > media) {
    console.log("El numero " + miarray[i] + "supera la media");
  } else {
    console.log("El numero " + miarray[i] + " no supera la media");
  }
}
