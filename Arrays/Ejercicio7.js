// los array asociativos tienen clave y valor , contador obejto y elemento es la clave
//contador[3]=5 el numero 3 aparecio 5 veces
const miarray = [1, 2, 3, 3, 4, 5, 6, 7, 7, 8, 7, 2, 1];
let contador = {}; //array asociativo SI PONGO [] NO ME HACE BIEN LA SALIDA
let max = 0;
let elementomax = null;

for (let i = 0; i < miarray.length; i++) {
  let elemento = miarray[i];
  if (!contador[elemento]) {
    // Si el elemento no existe como clave en contador, lo inicializo en 0
    contador[elemento] = 0;
  }
  contador[elemento]++;
  if (contador[elemento] > max) {
    max = contador[elemento];
    elementomax = elemento;
  }
}
console.log("El elemento que más aparece es:", elementomax);
console.log("Conteo completo:", contador);
