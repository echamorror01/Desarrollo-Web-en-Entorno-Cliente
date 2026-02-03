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
let carrito = []; // un carrito siempre es un array donde se van a irr guardando los prodcutos

listalimpia.forEach(function (produc, indice) {
  grid.appendChild(dibujar(produc));
});

function dibujar(producto) {
  const clon = template.content.cloneNode(true);
  const nombre = clon.querySelector(".product-title"); //cuidado con los nombres mirar bien el html
  nombre.textContent = producto.nombre;
  const precio = clon.querySelector(".product-price");
  precio.textContent = producto.precio;
  const descripcion = clon.querySelector(".product-desc");
  descripcion.textContent = producto.descripcion;
  const imagen = clon.querySelector(".product-image");
  imagen.src = producto.imagen; // la imagen se tiene que poner asi

  const claseboton = clon.querySelector(".add-btn");
  claseboton.dataset.id = producto.id;

  claseboton.addEventListener("click", () => {
    añadircarrito(producto);
  });

  return clon;
}

function añadircarrito(producto) {
  let cantidad = 0;
  //Lo primero que tenemos que hacer es si en mi carrito existe el producto
  const existe = carrito.find(function (carro) {
    return carro.id == producto.id;
  });
  if (!existe) {
    carrito.push(producto);
  } else {
    cantidad++;
  }
}
