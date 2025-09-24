/*6. Dado el siguiente código:
let a = 5;
let b = a++;
Y este otro:
let a = 5;
let b = ++a;
¿Tendrá la variable ‘b’ el mismo valor en ambos scripts? ¿Por qué?*/

let a = 5; // Aqui la variable b tiene el valor de 5 y a 6  porque se le suma 1 porque primero se asgina el valor a b y luego se incrementa
let b = a++;

let a2 = 5; // aqui si b tiene el valor de seis porque a se incrementa primero y luego
// pasa el valor a b
let b2 = ++a;
