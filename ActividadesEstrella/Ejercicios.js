/* Nos piden hacer una función llamada “comprobarIgualdad” que reciba como primer
parámetro una cadena correctamente escrita y en el segundo parámetro una cadena
con algún carácter erróneo.
Debemos llamar a dicha función y si la cadena está correcta mostrar “La cadena está
correcta”, en caso contrario mostrar “Hay problemas con la cadena: En un lu#c#ar...”,
debe mostrar entre # el carácter incorrecto, en este ejemplo el carácter incorrecto es
la “c”.*/
function comprobarIgualdad(correcta, error) {
  let resultado = "";
  for (let i = 0; i < correcta.length; i++) {
    if (correcta[i] != error[i]) {
      resultado += "#" + error[i] + "#";
    } else {
      resultado += error[i];
    }
  }
  return resultado;
}
let correcta = "En un lugar de la mancha de cuyo nombre no quiero acordarme";
let error = "En un lugar de la pancha de cuyo nombre no querro afordarme";

function cadena() {
  alert(comprobarIgualdad(correcta, error));
}

/* Ejercicio 2(2 puntos)
Nos dan un array de fechas, cuyo día, mes y año están separados por guiones. Nos
piden que hagamos una función llamada "demora” que tenga como parámetros un
objeto fecha (inicializado con el día, mes y año del array) y el número días de la
demora.
Si al sumarle los días de la demora se pasa a otro mes devolverá false, en caso
contrario true.
Al pulsar el botón “Ejercicio 2” recorrerá todas las fechas y llamará a la función
“demora” con, por ejemplo”, 10 días de demora y mostrará en un alert las fechas que
se pueden demorar y las que NO se pueden demorar (en 1 solo alert).*/
function demora(fecha, dias) {
  let partes = fecha.split("-");
  let dia = parseInt(partes[0]);
  let mes = parseInt(partes[1] - 1); //porque en js el 11 es diciembre
  let año = parseInt(partes[2]);
  let f = new Date(año, mes, dia);
  let mesincial = f.getMonth();
  f.setDate(f.getDate() + dias);
  let mesfinal = f.getMonth();
  return mesincial == mesfinal; //devuelve true si son iguales y false si no no hace falta hacer un if
}

let listafechas = [
  "03-02-2023",
  "24-04-2023",
  "05-06-2023",
  "16-05-2023",
  "03-01-2024",
  "14-02-2024",
  "26-04-2024",
];
function fechas() {
  let si = "Se puede demorar";
  let no = "No puede demorar";
  for (const valor of listafechas) {
    if (demora(valor, 10)) {
      si += valor + "\n";
    } else {
      no += valor + "\n";
    }
  }
  alert(si + no);
}

/*Utilizando el array de productos del ejercicio 5, crea un botón “cargarAsociativo” que
cargue en un array asociativo el nombre del producto y su precio, cuando acabe
mostrar “Asociativo cargado”.
Luego, al pulsar el botón Ejercicio 5 mostrará (Ojo! que tienen números delante):
Listado productos:
1.agua: 100
2.cocacola: 150
...
Pide al usuario “Introduce el producto a eliminar”, si no se encuentra el producto
mostrar “Producto no encontrado”, si lo encuentra, borrar del array asociativo y
mostrar “Producto eliminado” */
function asociativo() {
  const productos = [
    "Agua-100",
    "CocaCola-150",
    "Snickers-200",
    "Patatas-125",
    "Chicles-50",
    "Zumo-130",
    "Sandwich-250",
    "Café-110",
    "Té-65",
    "Galletas-135",
  ];
  let array = [];
  let mensaje = " ";
  let contador = 1;
  for (const valor of productos) {
    let partes = valor.split("-");
    let producto = partes[0];
    let precio = parseInt(partes[1]);
    array[producto] = precio;
  }
  alert("Asociativo cargado");

  for (const indice in array) {
    // recorrer el asociativo opcional
    mensaje += contador + indice + "," + array[indice] + "\n";
    contador++;
  }
  alert(mensaje);

  let eliminado = prompt("Introduce el producto a eliminar ");
  if (array[eliminado] == undefined) {
    alert(" El producto no se ha encontrado ");
    return;
  }
  delete array[eliminado];
  alert("Producto borrado");
  //lo enseñamos de nuevo con el producto eliminado
  let mensaje2 = "";
  let conta = 1;
  for (const indice in array) {
    // recorrer el asociativo opcional
    mensaje2 += conta + indice + "," + array[indice] + "\n";
    conta++;
  }
  alert(mensaje2);
}
//OBJETOS//
/* Vamos a simular una máquina expendedora, los productos de dicha máquina nos lo
dan en un array de cadenas, donde está el nombre del producto, un guión y luego su
precio: “Agua-100”. También nos dan un array de monedas posibles (no puedo insertar
una moneda de 35 céntimos, por ejemplo), todas las monedas están en céntimos para
facilitar la tarea.

4.1 Crear una función llamada “cargarArrayProductos” que cree un array de objetos
con los productos de la máquina usando un objeto literal, así tenemos, por ejemplo,
que en el índice 0 del array estará el objeto con el nombre y el precio del array.

4.2 Crear una función llamada “sacarProducto” que recibirá como parámetro el
nombre del producto a sacar de la máquina y un array de monedas insertadas.
Si no existe el producto (independientemente de mayúsculas y minúsculas) mostrará
“Producto no encontrado”.

Si alguna moneda no es correcta mostrará “Moneda X no válida”.
Comprobar si hay suficiente dinero para comprar el producto.
Si se introduce el importe exacto, mostrar “Producto comprado. No hay cambio”
Si se necesita cambio, generar el cambio con el menor número de monedas posibles y
mostrar “Producto comprado. Este es su cambio: 50 10 5”, por ejemplo.

4.3 Al pulsar el botón ejercicio 5 se llamará a “cargarArrayProductos” y luego
sacaremos los productos que deseemos llamando a sacarProducto, por ejemplo:
sacarProducto("galletas", [200,50,10]).*/

const monedasPosibles = [5, 10, 50, 100, 200];
const productos = [
  "Agua-100",
  "CocaCola-150",
  "Snickers-200",
  "Patatas-125",
  "Chicles-50",
  "Zumo-130",
  "Sandwich-250",
  "Café-110",
  "Té-65",
  "Galletas-135",
];

function cargarArrayProductos() {
  let array = [];
  for (const valor of productos) {
    let partes = valor.split("-");
    let producto = partes[0];
    let precio = parseInt(partes[1]);
    array.push({ nombre: producto, precio: precio });
  }
  let mensaje = "";
  for (const indice of array) {
    mensaje += indice.nombre + indice.precio + "\n";
  }
  alert(mensaje);
  return array;
}
let lista = cargarArrayProductos();
console.log(lista[0].nombre); // "Agua"
console.log(lista[0].precio); // 100
