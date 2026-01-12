/* 1. Selecciona el elemento h1 por su ID y muestra su contenido en consola.
2. Selecciona el primer párrafo con clase "intro" y muestra su texto.
3. Selecciona TODOS los párrafos con clase "intro"(Salida: Intro 1: “…”) y
muestra cuántos hay.
4. Selecciona TODOS los párrafos (sin importar la clase) y muestra cuántos hay.*/

function ejecutar() {
  const titulo = document.querySelector("#titulo");
  console.log(titulo); // con .textContent me sale el contenido MiBlog
  const parrafo = document.querySelector("p.intro"); //el primer p de la clase intro
  console.log(parrafo);

  const p = document.querySelectorAll("p.intro");
  p.forEach(function (parrafo, indice) {
    //parrafo es el contenido y indice el indice del array
    console.log("Intro" + (indice + 1) + ":" + parrafo.textContent);
  });
  const todosparrafos = document.querySelectorAll("p");
  console.log(todosparrafos.length);
}
