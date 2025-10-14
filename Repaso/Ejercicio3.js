/*. Realiza un script que pida cadenas de texto hasta que se pulse cancelar en un confirm. Al salir 
con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión. */
let texto = "";
let resultado = "";
let continuar = true;
do {
  texto = prompt("Introduce una cadena de texto");
  resultado += "- " + texto + " ";
  continuar = confirm("Quieres introducir mas texto?");
} while (continuar);

console.log(resultado);
