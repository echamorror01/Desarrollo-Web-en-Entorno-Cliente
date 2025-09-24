//3. Crea un programa que pida al usuario dos números y diga si el primero es múltiplo del segundo

let num1 = parseInt(prompt("Introduce un numero"));
let num2 = parseInt(prompt("Introduce otro numero"));

if (num1 % num2 == 0) {
  alert("El numero " + num1 + " es multiplo del numero " + num2);
} else {
  alert("El numero " + num1 + "no es multiplo del numero " + num2);
}
