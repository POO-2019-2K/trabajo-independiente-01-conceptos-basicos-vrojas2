import Reservacion from "./Reservacion.js";

let r1 = new Reservacion("Rojas Victor", "17/02/2019", "8:00 pm", "2 personas", "312-000-1111");

r1.imprimir();

console.log(r1.name);
console.log(r1.cel);

r1.date = "New date:25/02/2019";
console.log(r1.date);

r1.hora = "New hour: 9:00 pm";
console.log(r1.hora);

r1.typeTab = "3 peronas";
console.log(r1.typeTab);