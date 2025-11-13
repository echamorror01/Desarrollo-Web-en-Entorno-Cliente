/*Ejercicio 3.Tenemos un array con los votos de unas votaciones Nacionales, en cada casilla del array está la provincia, 
dos puntos y sus votos. Ejemplo: ["Madrid: 125", "Barcelona: 89", "Valencia: 45", "Sevilla: 32","Madrid: 
31"]. Por un error se han duplicado las provincias en vez de sumarse los votos (pertenecen a varias 
localidades) y queremos saber cuáles son las provincias que han votado. Hacer una función que reciba el 
array de votos y devuelva un array con las provincias que han votado. Al pulsar el botón del ejercicio 
debe mostrar un alert con las provincias que han votado cada una en una línea:  
"Han votado las provincias:  */

function provincia() {
  let array = [
    "Madrid: 125",
    "Barcelona: 89",
    "Valencia: 45",
    "Sevilla: 32",
    "Madrid: 31",
  ];
  let conjunto = new Set();
  for (const ciudades of array) {
    //podemos usar split porque dentro es una cadena de texto
    let provincia = ciudades.split(":")[0]; //cogemos las provincias
    conjunto.add(provincia);
  }
  let final = Array.from(conjunto);
  alert("Las provincias que han votado son:\n " + final.join("\n"));
}
