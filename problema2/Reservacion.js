export default class Reservacion {
    constructor(name, date, hora, typeTab, cel) {
        this._name = name.toUpperCase();
        this._date = date;
        this._hora = hora;
        this._typeTab = typeTab;
        this._cel = cel;
    }
    
    imprimir() {
        console.log(`${this._name}, ${this._date}, ${this._hora}, ${this._typeTab}, ${this._cel}`);
    }

    get name() {
        return this._name;
    }

    get cel() {
        return this._cel;
    }

    get date() {
        return this._date;
    }

    get hora() {
        return this._hora;
    }

    get typeTab() {
        return this._typeTab;
    }

    set date(date) {
        this._date = date;
    }

    set hora(hora) {
        this._hora = hora;
    }

    set typeTab(typeTab) {
        this._typeTab = typeTab;
    }
}