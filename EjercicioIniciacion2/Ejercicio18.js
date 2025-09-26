function crearTabla() {
  //tr fila y td el contenido de detro
  let letraascii = 65;
  let rdo = "<table><tr><td>&nbsp;&nbsp;</td>";
  for (let col = 1; col < 8; col++) {
    //esto es para las columnas
    rdo += "<td>" + String.fromCharCode(letraascii++) + "</td>";
  }
  rdo += "</tr>";
  for (let filas = 1; filas < 8; filas++) {
    rdo += "<tr>";
    for (let col = 1; col <= 8; col++) {
      if (col == 1) {
        rdo += "<td>" + filas + "</td>";
      } else {
        rdo += "<td>" + "</td>";
      }
      //esto es para las columnas
    }

    rdo += "</tr>";
  }

  rdo += "</table>";
  document.getElementById("tabla").innerHTML = rdo; //para meter dentro del div
}
