/*. Crea un programa que pida al usuario dos números y diga si son iguales o, en caso contrario,
cuál es el mayor de ellos*/

let num1 = parseInt(prompt("Introduce un numero"));
let num2 = parseInt(prompt("Introduce otro numero"));

if (num1 == num2) {
  alert("Los dos numeros son iguales");
} else if (num1 > num2) {
  alert("El primer numero :  " + num1 + " es mayor ");
} else {
  alert("El segundo numero : " + num2 + " es mayor ");
}
