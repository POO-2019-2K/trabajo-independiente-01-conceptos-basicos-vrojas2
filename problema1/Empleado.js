export default class Empleado {
    constructor(nombre, dom, telefono, cedula, puesto, dateIng,) {
    this._nombre = nombre.toUpperCase();
    this._dom = dom;
    this._telefono = telefono;
    this._puesto = puesto;
    this._dateIng = dateIng;
    }

    imprimir() {
        console.log(`${this._nombre}, ${this._dom}, ${this._telefono}, ${this._puesto}, ${this._dateIng}`);
    }

    get nombre() {
        return this._nombre;
    }
    
    get puesto() {
        return this._puesto;
    }

    set puesto(puesto) {
        this._puesto = puesto;
    }
}