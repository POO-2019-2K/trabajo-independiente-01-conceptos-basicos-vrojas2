import Cita from "./Cita.js";
 
let c1 = new Cita("Rojas Victor", "Lomas Vista Hermosa", "312-000-1111", "Imss", "100", "Temperatura", "17/02/2019");

c1.imprimir();

console.log(c1.name);
console.log(c1.numSeguro);

c1.seguro = "Issste";
console.log(c1.seguro);

c1.enfe = "Infeccion";
console.log(c1.enfe);

c1.date = "New date 17/03/2018";
console.log(c1.date);