/*1.Crear una función que pida una cadena por teclado y muestre su tamaño
2. Crea una función que pida la clave Secreta por pantalla, si la introduce correctamente aparece el
mensaje “Has acertado” (también serán válidas: secreta, SECRETA, SeCrEtA...)
3. Crea una función que recorra una cadena y separe los caracteres con un guión (Que no aparezca guión
al final)*/

function mostrartamaño() {
  let cadena = prompt("Introduce una cadena de texto");
  alert(cadena.length);
}

function palabrasecreta() {
  let clave = prompt("Intruduce la clave secreta");
  if (clave.toLowerCase() == "secreta") {
    alert("Has acertado");
  } else {
    alert("Incorrecta");
  }
}

function recorrercadena() {
  let cadena = prompt("Introduce una cadena");
  let cadenaseparada = " ";

  for (let i = 0; i < cadena.length; i++) {
    let caracter = cadena.charAt(i);
    if (cadena == " ") {
      cadenaseparada += caracter;
    } else {
      cadenaseparada += "-" + caracter;
    }
  }
  console.log(cadenaseparada);
}
