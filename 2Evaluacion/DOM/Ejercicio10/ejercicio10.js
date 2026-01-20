/* Ejercicio 10:
Tareas:
1. Selecciona todas las tarjetas y muestra cuántas hay.
2. Añade la clase "activa" solo a la primera tarjeta.
3. Añade la clase "grande" a todas las tarjetas usando un bucle. Y muestra cómo
van quedando las clases en cada tarjeta.
4. Verifica cuántas clases tiene la primera tarjeta
  */

function ejecutar() {
  const tarjeta = document.querySelectorAll(".tarjeta");
  console.log("Numero de tarjetas " + tarjeta.length);

  tarjeta.forEach(function (tarj, indice) {
    if (indice == 0) {
      tarj.classList.add(" activa");
    }
    tarj.classList.add("grande");
    console.log("Tarjeta " + (indice + 1) + tarj.className);
  });
  console.log(
    "La primera tarjeta tiene " + tarjeta[0].classList.length + "clases",
  );
}
