function creartabla() {
  let filas = parseInt(prompt("Introduce el numero de filas"));
  let columnas = parseInt(prompt("Introduce el numero de columnas"));
  let valor = filas * columnas;
  let resultado = "<table border=1 >";
  for (let f = 0; f < filas; f++) {
    resultado += "<tr>";
    for (let c = 0; c < columnas; c++) {
      resultado += "<td>" + valor + "</td>";
      valor--;
    }
    resultado += "</tr>";
  }
  resultado += "</table>";
  document.getElementById("tabla").innerHTML = resultado;
}
