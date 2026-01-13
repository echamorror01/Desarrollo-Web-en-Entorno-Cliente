/* Ejercicio 1. Sumarle el IVA a todos los elementos del array.  
const precios = [100, 200, 300, 400, 500]; */
let precios = [100, 200, 300, 400, 500];
let iva = precios.map((precio) => precio * 1.21);
alert(iva);
