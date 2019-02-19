export default class Cita {
    constructor(name, dom, cel, seguro, numSeguro, enfe, date) {
        this._name = name.toUpperCase();
        this._dom = dom;
        this._cel = cel;
        this._seguro = seguro;
        this._numSeguro = numSeguro;
        this._enfe = enfe;
        this._date = date;
    }

    imprimir() {
        console.log(`${this._date}, ${this._dom}, ${this._cel}, ${this._seguro}, ${this._numSeguro},
        ${this._enfe}, ${this._date}`);
    }

    get name() {
        return this._name;
    }
    
    get numSeguro() {
        return this._numSeguro;
    }

    get seguro() {
        return this._seguro;
    }

    get enfe() {
        return this._enfe;
    }

    get date() {
        return this._date;
    }

    set seguro(seguro) {
        this._seguro = seguro;
    }

    set enfe(enfe) {
        this._enfe = enfe;
    }

    set date(date) {
        this._date = date;
    }

}