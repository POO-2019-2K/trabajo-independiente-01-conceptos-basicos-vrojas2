export default class Cuenta {
    constructor(name, dom, cel, acco, saldo) {
        this._name = name.toUpperCase();
        this._dom = dom;
        this._cel = cel;
        this._acco = acco;
        this._saldo = saldo;
    }

    imprimir(){
        console.log(`${this._name}, ${this._dom}, ${this._cel}, ${this._acco}, ${this._saldo}`);
    }

    get name() {
        return this._name;
    }

    get cel() {
        return this._cel;
    }

    get acco() {
        return this._acco;
    }

    get dom() {
        return this._dom;
    }

    get saldo() {
        return this._saldo;
    }

    set dom(dom) {
        this._dom = dom;
    }

    set saldo(saldo) {
        this._saldo = saldo;
    }
    
}