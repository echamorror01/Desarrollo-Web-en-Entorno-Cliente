/* Crea una función llamada “crearTarjetaProducto que reciba el objeto con los datos del
producto como parámetro de entrada, clone el template, rellene los datos de la tarjeta y
la devuelva. Si no hay stock mostrar AGOTADO, asignar la clase “sin-stock” y
deshabilitar el botón comprar.
Al pulsar el botón “Añadir al carrito” mostrar un mensaje: “Producto añadido al carrito:
[NOMBRE DEL PRODUCTO].*/

const productos = [
  {
    nombre: "Portátil Gaming",
    descripcion: "Intel i7, 16GB RAM, RTX 3060",
    precio: 1299,
    stock: 5,
  },
  {
    nombre: "Teclado Mecánico",
    descripcion: "RGB, switches azules",
    precio: 89,
    stock: 15,
  },
  {
    nombre: 'Monitor 27"',
    descripcion: "4K, 144Hz, IPS",
    precio: 399,
    stock: 0,
  },
  {
    nombre: "Ratón Gaming",
    descripcion: "16000 DPI, RGB",
    precio: 59,
    stock: 8,
  },
];
const template = document.querySelector("#template-producto");
const contenedor = document.querySelector("#contenedor-productos");
productos.forEach(function (produc, indice) {
  contenedor.appendChild(crearTarjetaProducto(produc));
});
contenedor.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-comprar")) {
    //target para hacer referencia
    const padre = e.target.parentElement.querySelector(".nombre");
    alert("Producto añadido al carrito " + padre.textContent);
  }
});

boton.addEventListener("click", (e) => {});

function crearTarjetaProducto(producto) {
  const clon = template.content.cloneNode(true);
  const nombre = clon.querySelector(".nombre");
  nombre.textContent = producto.nombre; //queryselector porque ya estoy dentro
  const descripcion = clon.querySelector(".descripcion");
  descripcion.textContent = producto.descripcion;
  const precio = clon.querySelector(".precio");
  precio.textContent = producto.precio;
  const stock = clon.querySelector(".stock");
  stock.textContent = producto.stock;
  const boton = clon.querySelector(".btn-comprar");

  if (producto.stock == 0) {
    stock.textContent = "Agotado";
    stock.classList.add("sin-stock");
    boton.disabled = true;
  }

  return clon;
}
