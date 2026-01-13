/* 1. Selecciona el elemento h1 por su ID y muestra su contenido en consola.
2. Selecciona el primer párrafo con clase "intro" y muestra su texto.
3. Selecciona TODOS los párrafos con clase "intro"(Salida: Intro 1: “…”) y
muestra cuántos hay.
4. Selecciona TODOS los párrafos (sin importar la clase) y muestra cuántos hay.*/

function ejecutar() {
  const elemento = document.querySelector("#titulo");
  console.log(elemento.textContent); //aparece el contenido

  const primerparrafo = document.querySelector(".intro"); //p.intro
  console.log(primerparrafo.textContent);

  const parrafosintro = document.querySelectorAll("p.intro");
  parrafosintro.forEach(function (parrafo, indice) {
    console.log("Intro" + (indice + 1) + parrafo.textContent);
  });

  const todosparrafos = document.querySelectorAll("p");
  console.log(todosparrafos.length);
}
