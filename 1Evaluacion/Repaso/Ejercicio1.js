/*1. Crear un programa que pida una nota (número) y muestre la calificación según la nota. Si la nota 
no es entre 0 y 10 mostrará el error “Nota errónea”: 
0-3: Muy deficiente 
3-5: Insuficiente 
5-6: Suficiente 
6-7: Bien 
7-9: Notable 
9-10: Sobresaliente*/
let nota;
do {
  nota = parseFloat(prompt("Introduce una nota"));
  if (nota >= 0 && nota < 3) {
    alert("Muy deficiente");
  } else if (nota >= 3 && nota < 5) {
    alert("Insuficiente");
  } else if (nota >= 5 && nota < 6) {
    alert("Suficiente");
  } else if (nota >= 6 && nota < 7) {
    alert("Bien");
  } else if (nota >= 7 && nota < 9) {
    alert("Notable");
  } else if (nota >= 9 && nota <= 10) {
    alert("Sobresaliente");
  } else {
    alert("Nota errónea");
  }
} while (nota < 10 && nota >= 0);
