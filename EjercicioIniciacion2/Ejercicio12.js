/*12. Crea un programa que pida al usuario el ancho (por ejemplo, 4) y el alto (por ejemplo, 3) y
muestre un rectángulo formado por esa cantidad de asteriscos:
****
****
****  */

let alto = parseInt(prompt("Introduce el alto"));
let ancho = parseInt(prompt("Introduce el ancho"));
let rectángulo = " ";
for (i = 0; i < alto; i++) {
  //filas
  for (j = 0; j < ancho; j++) {
    //columnas
    rectángulo += "*";
  }
  rectángulo += "\n"; // salto de linea despues de cada fila
}
alert(rectángulo);
