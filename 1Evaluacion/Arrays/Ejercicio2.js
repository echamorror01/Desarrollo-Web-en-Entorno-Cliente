/*2. Crea un programa que pregunte al usuario cuantos números va a introducir (por ejemplo, 5), le 
pida todos esos números, los guarde en un array y finalmente calcule y muestre la media de esos 
números. */

let cantidad = parseInt(prompt("¿Cuantos numeros vas a introducir"));
let miarray = [];
let suma = 0;

for (let i = 0; i < cantidad; i++) {
  let numero = parseInt(prompt("Introduce los numeros"));
  miarray.push(numero);
  suma += numero;
}
let media = suma / cantidad;

console.log("La media de los numeros introducidos es " + media);
