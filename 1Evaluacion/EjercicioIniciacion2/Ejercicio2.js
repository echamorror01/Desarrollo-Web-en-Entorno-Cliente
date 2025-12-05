//2. Crea un programa que pida al usuario dos números y diga cuál es el mayor de ellos

let num1 = parseInt(prompt("Introduce un numero"));
let num2 = parseInt(prompt("Introduce otro numero"));

if (num1 > num2) {
  alert("El numero " + num1 + " es el mayor");
} else {
  alert("El numero " + num2 + " es el mayor ");
}
