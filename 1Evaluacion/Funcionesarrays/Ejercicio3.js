/*2. Nos dan un array de frutas [“banana”, “naranja”, “mango”, “limon”]. Crear un script que pregunte al
usuario qué fruta quiere buscar en el array, si no existe dicha fruta mostrará “Esta fruta no existe en el
array” en caso contrario mostrará “Sí hay aguacate en el array”. La fruta se puede poner en mayúsculas y
minúsculas y la seguirá encontrando.*/

let array = ["banana", "naranja", "mango", "limon"];

let fruta = prompt("Que fruta desea buscar?").toLowerCase();

if (array.includes(fruta)) {
  alert("Si hay " + fruta + " en el array");
} else {
  alert("Esta fruta" + fruta + "no existe en el array");
}
