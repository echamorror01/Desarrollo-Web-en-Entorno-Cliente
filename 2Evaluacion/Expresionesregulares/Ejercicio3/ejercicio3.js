/* Ejercicio 3 
Hacer una función validarHora que tenga una hora como parámetro de entrada y que 
valide si una hora tiene el formato hh:mm:ss.*/
//hh:mm:ss
function validarhora(hora) {
  let regEx = /^\d{2}:\d{2}:\d{2}$/;
  return regEx.test(hora);
}
alert(validarhora("12:30:20"));
