//7. Crea un programa que escriba en pantalla los números del 1 al 50 que sean múltiplos de 3
let num = 3;
let resultado = 0;
for (i = 1; i <= 50; i++) {
  if (i % num == 0) {
    alert(i);
  }
}
