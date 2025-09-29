let usuario;
let contraseña;
let intento = 0;
const id = "alibaba";
const contra = "sesamo";
do {
  usuario = prompt("Introduce tu usuario");
  contraseña = prompt("Introduce la contraseña");
  intento++;
  if (usuario == id && contraseña == contra) {
    alert("Acceso concedido.¡Bienvenido!");
  } else {
    if (intento < 3) {
      alert("Identificador y contraseña incorrectos.Intentalo de nuevo");
    } else {
      alert("Identificador/contraseña incorrectos.Acceso denegado");
    }
  }
} while (intento < 3);
