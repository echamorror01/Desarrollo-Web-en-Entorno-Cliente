/*1. Crea un array de elementos y muestra dichos elementos por pantalla separados por "#", ahora haz lo
mismo con uno bidimensional:
let anidado1 = ["anidado1", "anidado2", "anidado3"]
let anidado2 = ["a1", "a2", "a3"]
let matriz = [anidado1, anidado2]
Recorre la matriz y muestra los elementos separados por “#”, mostrando el mensaje: “Indice X:
elem1#elem2#elem3”*/

let anidado1 = ["anidado1", "anidado2", "anidado3"];
let anidado2 = ["a1", "a2", "a3"];
let matriz = [anidado1, anidado2];

for (const elemento in matriz) {
  alert(" En el indice " + elemento + " hay " + matriz[elemento].join(" # "));
}
