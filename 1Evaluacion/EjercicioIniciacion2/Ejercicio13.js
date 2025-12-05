/*13. Lo mismo que el ejercicio anterior, pero esta vez mostrará una diagonal con otro carácter: 
O*** 
*O** 
**O* */

let alto = parseInt(prompt("Introduce el alto"));
let ancho = parseInt(prompt("Introduce el ancho"));
let rectángulo = " ";
for (i = 0; i < alto; i++) {
  //filas
  for (j = 0; j < ancho; j++) {
    //columnas
    if (i == j) {
      rectángulo += "0";
    } else {
      rectángulo += "*";
    }
  }
  rectángulo += "\n"; // salto de linea despues de cada fila
}
alert(rectángulo);
