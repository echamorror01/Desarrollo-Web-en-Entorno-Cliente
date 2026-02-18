// Tenemos un array de objetos con fechas (similar a tus tareas)
let entregas = [
  { id: 1, entrega: new Date("2026-02-20") },
  { id: 2, entrega: new Date("2026-02-25") },
  { id: 3, entrega: new Date("2026-03-01") },
];

/**
 * FUNCIÓN: Posponer fecha
 * Usa el método .set... para modificar el objeto Date original
 */
function posponerEntrega(diasExtra) {
  entregas.forEach((item) => {
    // 1. Obtenemos el día actual del objeto fecha
    let diaActual = item.entrega.getDate();

    // 2. Usamos SET para cambiarlo (JS gestiona automáticamente el cambio de mes)
    item.entrega.setDate(diaActual + diasExtra);

    // 3. Bonus: Normalizar la hora a última hora del día
    item.entrega.setHours(23, 59, 59);
  });

  console.log("Fechas actualizadas:");
  mostrarFechas();
}

function mostrarFechas() {
  entregas.forEach((f) => {
    console.log(`ID ${f.id}: ${f.entrega.toLocaleString("es-ES")}`);
  });
}

// Ejecución
posponerEntrega(7); // Pospone todo una semana
