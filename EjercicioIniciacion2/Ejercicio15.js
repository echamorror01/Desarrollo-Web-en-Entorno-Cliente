let numero;

do {
  numero = parseInt(prompt("Introduce un numero"));
  if (numero !== 0) {
    let cuadrado = numero * numero;
    alert("El cuadradado del " + numero + " es " + cuadrado);
  } else {
    alert("Has introducido un 0");
  }
} while (numero !== 0);
