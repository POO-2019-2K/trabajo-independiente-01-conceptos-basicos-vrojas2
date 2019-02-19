import Empleado from "./Empleado.js";
 let e1 = new Empleado("Victor Rojas", "Lomas Vista Hermosa", "312-111-1111", "Desarrollador", "08/09/2004","");

 e1.imprimir();

 console.log(e1.nombre);

 e1.puesto = "Jefe de equipo";
 
 console.log(e1.puesto);