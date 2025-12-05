//Crea un programa que pida al usuario un número y diga si es par.

let num = parseInt(prompt("Introduce un numero"));
if (num % 2 == 0) {
  alert("El numero " + num + "es par");
} else {
  alert("El numero " + num + " es impar ");
}
