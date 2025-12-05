/*1. Si tenemos una cadena en minúsculas “miel”. ¿Cómo podemos transformarla en una cadena con la
primera letra en mayúsculas(Miel)?*/

let cadena = "miel";
let letraM = cadena[0].toUpperCase(); //let primercaracter=cadena.charAt(0)
let porcion = cadena.slice(1);
alert(letraM + porcion);
