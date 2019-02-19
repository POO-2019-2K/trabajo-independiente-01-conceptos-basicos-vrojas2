import Cuenta from "./Cuenta.js";

let c1 = new Cuenta("Rojas Victor", "Lomas Vista Hermosa", "312-000-1111", "100", "15,000");

c1.imprimir();

console.log(c1.name);
console.log(c1.cel);
console.log(c1.acco);

c1.dom = "New dom: Las palmas";
console.log(c1.dom);

c1.saldo = "Saldo nuevo; 10,00";
console.log(c1.saldo);