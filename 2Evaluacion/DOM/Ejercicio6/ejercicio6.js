/* Ejercicio 6
reas:
1. Crea un título h2 que diga "Ciudades de España".
2. Crea una lista <ul> con todos los elementos del array.
3. Inserta todo en el div usando innerHTML.
4. Muestra un alert que diga “Lista creada con X ciudades”
*/
const resultado = "";
const ciudades = ["Madrid", "Barcelona", "Valencia", "Sevilla"];
const contenedor = document.querySelector("#contenedor-lista");
resultado += "<h2>Ciudades de España</h2>";

resultado += "<ul>";
ciudades.forEach(function (ciudad, indice) {
  resultado += "<li>" + ciudad + "</li>";
});
resultado += "</ul>";
contenedor.innerHTML = resultado;
alert("Lista creada con " + ciudad.length + "ciudades");
