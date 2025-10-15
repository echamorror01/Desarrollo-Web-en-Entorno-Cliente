/*
5. Realiza un script que escriba los números del 1 al 500, que indique cuales son múltiplos de 4 o de 
9 que cada 5 líneas impresas muestre una línea horizontal. 
Ejemplo: 
4 es múltiplo de 4 
8 es múltiplo de 4 
9 es múltiplo de 9 
12 es múltiplo de 4 
16 es múltiplo de 4 
 ————————————————————- 
18 es múltiplo de 9 
20 es múltiplo de 4 
24 es múltiplo de 4 
27 es múltiplo de 9 
28 s múltiplo de 4
*/

for (let i = 1; i <= 500; i++) {
  if (i % 4 == 0) {
    console.log(i + "es multiplo de 4 ");
  }
  if (i % 9 == 0) {
    console.log(i + " es multiplo de 9 ");
  }
}
