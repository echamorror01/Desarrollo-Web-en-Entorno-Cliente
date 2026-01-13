/* Ejercicio 3. Dado un array de objetos que representan productos, crea un array con 
solo los nombres de los productos. 
const productos = [ 
{ id: 1, nombre: "Laptop", precio: 1200 }, 
{ id: 2, nombre: "Teclado", precio: 50 }, 
{ id: 3, nombre: "Ratón", precio: 25 }, 
]; */

const productos = [
  { id: 1, nombre: "Laptop", precio: 1200 },
  { id: 2, nombre: "Teclado", precio: 50 },
  { id: 3, nombre: "Ratón", precio: 25 },
];

let nombres = productos.map((producto) => producto.nombre);
alert(nombres);
