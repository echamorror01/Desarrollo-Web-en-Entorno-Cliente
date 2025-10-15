function creartabla() {
  let tamaño = parseInt(prompt("Introduce el tamaño de la matriz cuadrada"));
  let resultado = "<table border=1 ";
  for (let filas = 1; filas <= tamaño; filas++) {
    resultado += "<tr>";
    for (let columnas = 1; columnas <= tamaño; columnas++) {
      let valor = parseInt(
        prompt(
          "Introduce el valo9r para la fila " +
            filas +
            " y la columna " +
            columnas
        )
      );
      resultado += "<td>" + valor + "</td>";
    }
    resultado += "</tr>";
  }
  resultado += "</table>";
  document.getElementById("tabla").innerHTML = resultado;
}
