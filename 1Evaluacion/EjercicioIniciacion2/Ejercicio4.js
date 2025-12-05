/*4. Crea un programa que pida al usuario dos números. Si el segundo no es cero, mostrará el
resultado de dividir el primero entre el segundo. Por el contrario, si el segundo número es cero,
escribirá "Error: No se puede dividir entre cero".*/

let num1 = parseInt(prompt("Introduce un numero"));
let num2 = parseInt(prompt("Introduce otro numero"));

if (num2 != 0) {
  alert(num1 / num2);
} else {
  alert('"Error: No se puede dividir entre cero"');
}
