let tamaño = parseInt(prompt("Tamaño de la matriz : "));
let miarray = []; //guardamos los datos
for (let i = 0; i < tamaño; i++) {
  //fila
  miarray[i] = []; //crea una fila vacia
  for (let j = 0; j < tamaño; j++) {
    //columna
    let celdas = prompt(
      "Dime el valor de la fila " + (i + 1) + " de  la columna" + (j + 1) + " :"
    );
    miarray[i][j] = celdas;
  }
}

let tabla = "<table>";
for (let i = 0; i < tamaño; i++) {
  //genera las filas
  tabla += "<tr>";
  for (let j = 0; j < tamaño; j++) {
    tabla += "<td>" + miarray[i][j] + "</td>";
  }
  tabla += "</tr>";
}
tabla += "</table>";
document.getElementById("tabla").innerHTML = tabla; //inserta dentro de el el contenido de la tabla
