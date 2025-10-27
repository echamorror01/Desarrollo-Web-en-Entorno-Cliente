/*2. Nos dan la lista de la compra en un array([“Leche”, “Café”, “Té”, “Miel”). Crea un botón para añadir
“Carne” al principio de la lista de la compra y “Azúcar” al final de la lista. Si ya se ha añadido “Carne” o
“Azúcar” no se vuelve a añadir, se muestra el mensaje “Ya se ha añadido este producto a la lista de la
compra”
Crea un botón “Alergias” que pida un producto al que eres alérgico y lo elimina de la lista de la compra,
indicando “He eliminado X producto de la cesta porque eres alérgico”, si no se encuentra el producto en
la cesta, mostrará “No existen alergias en la cesta”.
Crea un botón “Modificar” que pida un producto a buscar y si lo encuentra modifique su valor, por
ejemplo, que busque “Té” y te permita modificarlo a “Té verd
*/

let compra = ["Leche", "Café", "Té", "Miel"];

function Añadir() {
  let producto1 = "Carne";
  let producto2 = "Azucar";
  if (compra.includes(producto1) || compra.includes(producto2)) {
    //con que se cumpla 1 ya va para alante
    alert("Ya se han añadido estos productos a la lista de la compra ");
    return;
  }
  compra.unshift(producto1);
  compra.push(producto2);

  alert(compra);
}
function Alergias() {
  let cestaminusculas = arrayEnMinusculas(compra);
  let producalergico = prompt(
    "Dime a que producto eres alergico de la lista "
  ).toLocaleLowerCase();
  let indice = cestaminusculas.indexOf(producalergico);
  if (indice == -1) {
    alert("El producto no existe");
    return;
  }
  compra.splice(indice, 1);
  alert(compra);
}

function arrayEnMinusculas(lista) {
  let cestaMinusculas = [];
  for (const producto of lista) {
    cestaMinusculas.push(producto.toLowerCase());
  }
  return cestaMinusculas;
}

function Modificar() {
  let cestaminusculas = arrayEnMinusculas(compra);
  let producto = prompt(
    "Dime que producto quieres modificar"
  ).toLocaleLowerCase();
  let indice = cestaminusculas.indexOf(producto);
  if (indice == -1) {
    alert("El producto no existe");
    return;
  }
  let nuevoproducto = prompt("Introduce el nuevo producto");
  compra[indice] = nuevoproducto;

  alert(compra);
}
