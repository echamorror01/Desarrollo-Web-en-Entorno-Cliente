/*1. Mostrar los elementos de un array del final 
al principio usando pop.*/

let array = [1, 2, 3, 4, 5, 6];
let tamaño = array.length; //aqui guardamos el tamaño del array si o sí
let rdo = " ";
for (let i = 0; i < tamaño; i++) {
  rdo += array.pop(); //para que salgan todos seguidos
  alert(rdo);
}
