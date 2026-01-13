/* Ejercicio 2 
Extraer los hashtags de un texto. 
cadena = "Hoy es un buen día #feliz #javascript #coding."*/
let cadena = "Hoy es un buen día #feliz #javascript #coding.";
function extraer(cadena) {
  let regEx = /#\w+/g;
  return cadena.match(regEx);
}
alert(extraer(cadena));
