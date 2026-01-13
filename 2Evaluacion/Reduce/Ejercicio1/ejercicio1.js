/* Ejercicio: Encuentra el número mayor del array: numeros = [12, 45, 67, 89, 23, 56, 34, 
78] */
let numeros = [12, 45, 67, 89, 23, 56, 34, 78];

let mayor = numeros.reduce((maximo, numero) => {
  //maximo es el acumulador que empieza en 0
  if (numero > maximo) {
    return numero;
  } else {
    return maximo;
  }
}, numeros[0]); // si no le ponemos nada cogeria el 12 como acumulador
alert(mayor);
