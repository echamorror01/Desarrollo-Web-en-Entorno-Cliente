/* Que pida un número y genere la secuencia de Fibonnaci entre 0 y dicho número (ambos inclusive).
Los números deben mostrarse con un espacio entre ellos. La secuencia se calcula sumando los 2
anteriores, siendo la secuencia así: 0,1,1,2,3,5,8,13..*/
let numero = parseInt(prompt("Introduce un numero"));
let numero1 = 0;
let numero2 = 1;
let resultado = "";
while (numero1 <= numero) {
  resultado += numero1 + "";
  let suma = numero1 + numero2;
  numero1 = numero2;
  numero2 = suma;
}
console.log(resultado);
