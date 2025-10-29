let dias = [
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
  "Domingo",
];
let fecha = new Date(2002, 9, 1);
fecha.setDate(fecha.getDate() + 74);
let dia = fecha.getDate();
let mes = fecha.getMonth() + 1; //porque enero es 0
let año = fecha.getFullYear();
let diaSemana = fecha.getDay();
alert(dia + "/" + mes + "/" + año + "y hoy es " + dia[diaSemana]);
//preguntar a miguel angel
