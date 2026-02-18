// 1. Nuestro array inicial de tareas con objetos Date reales
let entregas = [
  { id: 1, titulo: "Examen de JS", limite: new Date("2026-02-20") },
  { id: 2, titulo: "Proyecto DOM", limite: new Date("2026-02-15") },
  { id: 3, titulo: "Tarea Arrays", limite: new Date("2026-02-10") },
];

/**
 * FUNCIÓN: Aplicar Prórroga
 * Esta función busca una tarea y le suma N días a su fecha límite.
 */
function darProrroga(idTarea, diasExtra) {
  // Buscamos la tarea por ID
  const tarea = entregas.find((t) => t.id === idTarea);

  if (tarea) {
    // --- AQUÍ ESTÁ EL USO DE SET ---
    // 1. Obtenemos el día actual de la fecha límite
    let diaActual = tarea.limite.getDate();

    // 2. Modificamos el objeto fecha usando .setDate()
    // JS es listo: si es 31 de enero y sumas 1, pasa a 1 de febrero solo.
    tarea.limite.setDate(diaActual + diasExtra);

    // 3. Forzamos a que la hora sea las 23:59 (final del día)
    tarea.limite.setHours(23, 59, 59);

    console.log(`✅ Prórroga aplicada a: ${tarea.titulo}`);
  }
}

/**
 * FUNCIÓN: Comprobar Vencidas
 * Filtra el array para ver qué tareas tienen una fecha límite menor a "hoy"
 */
function obtenerTareasVencidas() {
  const hoy = new Date(); // Fecha y hora actual

  const vencidas = entregas.filter((tarea) => {
    // Comparamos los objetos Date directamente
    return tarea.limite < hoy;
  });

  return vencidas;
}

// --- PRUEBA DEL CÓDIGO ---

console.log("--- Tareas antes de la prórroga ---");
entregas.forEach((t) =>
  console.log(`${t.titulo}: ${t.limite.toLocaleDateString()}`),
);

// Aplicamos 10 días de prórroga a la tarea 3 (que estaba vencida)
darProrroga(3, 10);

console.log("--- Tareas vencidas actualmente ---");
const listaVencidas = obtenerTareasVencidas();
console.table(listaVencidas);
