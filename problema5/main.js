import Gasto from "./Gasto.js";

let g1 = new Gasto("Rojas Victor", "Subgerente", "312-000-1111", " Contrato ", "Interjet",
 "Restaurant", "Jose", "2000", "Mx");

g1.imprimir();

console.log(g1.name);
console.log(g1.puesto);
console.log(g1.place);

g1.trans = 2000;
console.log(g1.trans);

g1.food = 1800;
console.log(g1.food);

g1.hotel = 1000;
console.log(g1.hotel);

g1.pasaje = 500;
console.log(g1.pasaje);

var tot = g1.trans + g1.food + g1.hotel + g1.pasaje;
console.log("total: " + tot);