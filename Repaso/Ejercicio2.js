/*2. Programa que pida 2 números y muestre todos los números impares que hay entre estos 2
números introducidos (ambos inclusive) separados por un guión. Sin usar arrays y sin que quede
un guión al final.*/

let num1 = parseInt(prompt("Introduce un numero"));
let num2 = parseInt(prompt("Introduce otro numero"));

//para averigurar cual de los dos es mayor
let min;
let max;
if (num1 < num2) {
  min = num1;
  max = num2;
} else {
  min = num2;
  max = num1;
}
let resultado = "";
for (let i = min; i <= max; i++) {
  if (i % 2 !== 0) {
    resultado += "- " + i + " ";
  }
}
alert(resultado);
