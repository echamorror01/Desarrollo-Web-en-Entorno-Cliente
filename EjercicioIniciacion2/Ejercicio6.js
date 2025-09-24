//6. Necesitamos un programa que muestre los números del 10 al 20, ambos inclusive. Y a
//continuación, muestre los números del 20 al 10, es decir, de mayor a menor
let resultado = 0;
for (i = 10; i <= 20; i++) {
  resultado = resultado + i + " ";
}
alert(resultado);

let resultado2 = 0;
for (i = 20; i >= 10; i--) {
  resultado2 = resultado2 + i + " ";
}
alert(resultado2);
