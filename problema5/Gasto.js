export default class Gasto {
    constructor(name, puesto, cel, fin, trans, food, hotel, pasaje, place) {
        this._name = name.toUpperCase();
        this._puesto = puesto;
        this._cel = cel;
        this._fin = fin;
        this._trans = trans;
        this._food = food;
        this._hotel = hotel;
        this._pasaje = pasaje;
        this._place = place;
    }

    imprimir() {
        console.log(`${this._name}, ${this._puesto}, ${this._cel}, ${this._fin}, ${this._trans},
        ${this._food}, ${this._hotel}, ${this._pasaje}, ${this._place}`);
    }

    get name () {
        return this._name;
    }

    get puesto() {
        return this._puesto;
    }

    get fin() {
        return this._fin.toUpperCase();
    }

    get trans() {
        return this._trans;
    }

    get food() {
        return this._food;
    }

    get hotel() {
        return this._hotel;
    }

    get pasaje() {
        return this._pasaje;
    }

    get place() {
        return this._place;
    }

    set trans(trans) {
        this._trans = trans;
    }

    set food(food) {
        this._food = food;
    }

    set hotel(hotel) {
        this._hotel = hotel;
    }

    set pasaje(pasaje) {
        this._pasaje = pasaje;
    }

}
