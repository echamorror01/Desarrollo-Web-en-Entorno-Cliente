/* Ejercicio 1 
Crear una función llamada validarTelefono que reciba como parámetro de entrada una 
cadena con un número de teléfono y devuelva true o false, dependiendo de si el 
número del teléfono cumple que empiece por 6 o 7 y luego tenga 8 dígitos. */

function telefono(teléfono) {
  let regEx = /^[67]\d{8}$/;
  return regEx.test(teléfono);
}

alert(telefono("680744267"));
