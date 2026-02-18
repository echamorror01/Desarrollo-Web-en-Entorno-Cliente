/**
 * Datos de entrada: Array de productos serializados (Simulando una fuente externa)
 * Formato: "IDProducto;Nombre;Precio;Descripción;URL_Imagen"
 */
const arrayProductos = [
  "123;Monitor UltraWide;349.99;Monitor curvo de 34 pulgadas ideal para programar.;https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500",
  "245;Teclado Mecánico;120.50;Teclado RGB con switches blue para una escritura táctil.;https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500",
  "367;Ratón Ergonómico;55.00;Ratón inalámbrico diseñado para largas jornadas de trabajo.;https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500",
  "423;Auriculares Studio;89.00;Cancelación de ruido activa y sonido de alta fidelidad.;https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
  "518;Silla Gaming;199.00;Comodidad extrema para tus sesiones de código.;https://www.powerplanetonline.com/cdnassets/silla_gaming_813_blanco_negro_001v2_l.jpg",
  "696;Webcam 4K;75.25;Resolución Ultra HD para tus reuniones de equipo.;https://resource.logitech.com/w_80,h_50,c_limit,q_auto,f_auto,dpr_2.0/d_transparent.gif/content/dam/logitech/en/products/webcams/brio/gallery/brio-gallery-2.png?v=1",
];

let listalimpia = arrayProductos.map((item) => {
  //esta forma es mas clara y mas limpia
  const [id, nombre, precio, descripcion, imagen] = item.split(";");
  return {
    id: parseInt(id),
    nombre: nombre,
    precio: parseFloat(precio),
    descripcion: descripcion,
    imagen: imagen,
  };
});

const grid = document.querySelector("#productGrid");
const template = document.querySelector("#plantillaTarjeta");
// un carrito siempre es un array donde se van a irr guardando los prodcutos
const templatecarritos = document.querySelector("#elementoCarrito");
const cartBarge = document.querySelector("#cartBadge");
const sidebar = document.querySelector("#sidebar");
const iconocarrito = document.querySelector("#iconoCarrito");
const cerrar = document.querySelector("#closeCart");
const cartItems = document.querySelector("#cartItems");
const total = document.querySelector("#totalValue");
const clean = document.querySelector("#clearCart");
const comprar = document.querySelector("#comprarCarrito");

let carrito = [];

listalimpia.forEach(function (produc, indice) {
  grid.appendChild(dibujar(produc));
});

//Abrir y cerrar carrito
iconocarrito.addEventListener("click", () => {
  sidebar.classList.add("active");
});
cerrar.addEventListener("click", () => {
  sidebar.classList.remove("active");
});
//Vaciar cesta
clean.addEventListener("click", () => {
  carrito = [];
  actualizarCarrito();
  actualizarBadge();
  total.textContent = "0€";
});
//Comprar
comprar.addEventListener("click", () => {
  if (carrito.length == 0) {
    alert("El carrito está vacío");
    return;
  }

  let mensaje = "Productos Comprados : \n";

  carrito.forEach(function (comprar, indice) {
    mensaje +=
      comprar.nombre +
      "Cantidad" +
      comprar.cantidad +
      "Precio" +
      comprar.precio;
  });
  alert(mensaje);
});
function dibujar(producto) {
  // rellenamos los productos
  const clon = template.content.cloneNode(true);
  const nombre = clon.querySelector(".product-title"); //cuidado con los nombres mirar bien el html
  nombre.textContent = producto.nombre;
  const precio = clon.querySelector(".product-price");
  precio.textContent = producto.precio + "€";
  const descripcion = clon.querySelector(".product-desc");
  descripcion.textContent = producto.descripcion;
  const imagen = clon.querySelector(".product-image");
  imagen.src = producto.imagen; // la imagen se tiene que poner asi

  const claseboton = clon.querySelector(".add-btn");
  claseboton.dataset.id = producto.id;

  claseboton.addEventListener("click", () => {
    //añadimos el producto al carrito cuando pulsamos añadirproducto
    añadircarrito(producto);
  });

  return clon;
}

function añadircarrito(producto) {
  //Buscamos si ese producto existe en el carrito
  //Lo primero que tenemos que hacer es si en mi carrito existe el producto
  const existe = carrito.find(function (carro) {
    return carro.id == producto.id;
  });
  if (existe) {
    existe.cantidad++; //si existe lo incrementamos
  } else {
    carrito.push({
      id: producto.id,
      nombre: producto.nombre,
      precio: producto.precio,
      descripcion: producto.descripcion,
      imagen: producto.imagen,
      cantidad: 1,
    });
  }

  actualizarCarrito();
}

function actualizarCarrito() {
  // actualizamos el carrito visualemente

  cartItems.textContent = ""; //tenemos que vaciar primero el carrito

  carrito.forEach(function (elementos, indice) {
    const clon = templatecarritos.content.cloneNode(true);
    const imagen = clon.querySelector(".cart-item-img");
    imagen.src = elementos.imagen;
    imagen.alt = elementos.nombre;

    const nombre = clon.querySelector(".cart-item-title");
    nombre.textContent = elementos.nombre + "x" + elementos.cantidad;
    const precio = clon.querySelector(".cart-item-price");
    precio.textContent = elementos.precio * elementos.cantidad + "€";

    const eliminar = clon.querySelector(".remove-btn");
    eliminar.addEventListener("click", () => {
      eliminardelcarrito(elementos.id);
    });
    cartItems.appendChild(clon);
  });
  actualizarBadge();
  actualizarTotal();
}

function eliminardelcarrito(id) {
  carrito = carrito.filter(function (eliminar) {
    return eliminar.id !== id; // deja solo el id que es distinto si hay 1 igual lo borra
  }); // true se queda el id, false lo borra

  actualizarCarrito();
  actualizarBadge();
}
function actualizarBadge() {
  //simbolo del carrito
  let total = 0;
  carrito.forEach(function (elemcarrito, indice) {
    //recorremos el array de carritos para saber la cantidad
    total = total + elemcarrito.cantidad;
  });
  cartBarge.textContent = total; // lo mostramos en el badge
}

function actualizarTotal() {
  let suma = 0;
  carrito.forEach(function (pro, indice) {
    suma += pro.precio * pro.cantidad;
  });
  total.textContent = suma.toFixed(2) + "€";
}
