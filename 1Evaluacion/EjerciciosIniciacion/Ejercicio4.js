/*4. Suma tres números tecleados por usuario y calcula la media, mostrando en la consola:
“La suma es: RESULTADO_SUMA”
“La media es: MEDIA”*/

let num1 = parseInt(prompt("Introduce el primer numero"));
let num2 = parseInt(prompt("Introduce el segundo numero"));
let num3 = parseInt(prompt("Introduce el tercer numero"));

let suma = num1 + num2 + num3;
let media = suma / 3;
console.log("La suma es: " + suma);
console.log("La media es: " + media);
