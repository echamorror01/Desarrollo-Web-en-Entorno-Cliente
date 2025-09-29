function crearTabla() {
  //tr para cada fila y td para cada celda
  // la funcion se ejecuta cuando la llamo aqui

  let letraascii = 65;
  let rdo = "<table><tr>&nbsp;&nbsp<td></td>"; // se crea la primera celda vacia, ponemos nbsp para que lo haga mas grande
  for (let col = 1; col < 8; col++) {
    //esto es para las columnas

    rdo += "<td>" + String.fromCharCode(letraascii++) + "</td>"; //se asigna a cada celda
  }
  rdo += "</tr>"; // se cierra la fila que contiene las letras
  for (let filas = 1; filas <= 8; filas++) {
    //8  filas
    rdo += "<tr>"; // se abre una fila por cada numero
    for (let col = 1; col <= 8; col++) {
      //recorre 8 columnas dentro de cada fila
      if (col == 1) {
        rdo += "<td>" + filas + "</td>"; // se agrega el numero
      } else {
        rdo += "<td>" + "</td>"; // celdas vacias
      }
      //esto es para las columnas
    }

    rdo += "</tr>";
  }

  rdo += "</table>";
  document.getElementById("tabla").innerHTML = rdo; //para meter dentro del div , obten el elemento del id tabla
}
