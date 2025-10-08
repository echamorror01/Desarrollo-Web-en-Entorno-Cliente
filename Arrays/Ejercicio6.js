let tamaño = parseInt(prompt("Tamaño de la matriz : "));
let miarray = [];
for (let i = 0; i < tamaño; i++) {
  miarray[i] = [];
  for (let j = 0; j < tamaño; j++) {
    let celdas = prompt(
      "Dime el valor de la fila " + (i + 1) + " de  la columna" + (j + 1) + " :"
    );
    miarray[i][j] = celdas;
  }
}

let tabla = "<table>";
for (let i = 0; i < tamaño; i++) {
  tabla += "<tr>";
  for (let j = 0; i < tamaño; j++) {
    tabla += "<td>" + miarray[i][j] + "</td>";
  }
  tabla += "</tr>";
}
tabla += "</table>";
document.getElementById("tabla").innerHTML = tabla;
