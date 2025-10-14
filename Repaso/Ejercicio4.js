/*4. Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma: 
1 
22 
333 
4444 
55555 
666666 
*/

for (let i = 1; i <= 30; i++) {
  let linea = "";
  for (let j = 1; j <= i; j++) {
    linea += i; // aqui pasa a cadena el numero
  }
  console.log(linea);
}
