/*Encuentra el número mayor del array: numeros = [12, 45, 67, 89, 23, 56, 34,
78] */

let numeros = [12, 45, 67, 89, 23, 56, 34, 78]; //aqui maximo es el acumulador
let mayor = numeros.reduce((maximo, numero) => {
  //si hacemos algo mas hay q abrir llaves
  if (numero > maximo) {
    return numero;
  } else {
    return maximo;
  }
}, numeros[0]); // si no le pones nada cogeria el 12 en el acumulador y numero seria 45
// numeros[0] ya es 12 , aqui tambien podríamos poner 0
