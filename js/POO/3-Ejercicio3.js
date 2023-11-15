class Rectangulo{
    #alto;
    #ancho;
    constructor(alto, ancho){
        this.#alto = alto,
        this.#ancho = ancho;
    }

    get alto(){
        return this.#alto
    }

    set modificarAlto(altoNuevo){
        this.#alto = altoNuevo;
    }

    get ancho(){
        return this.#ancho;
    }

    set modificarAncho(anchoNuevo){
        this.#ancho = anchoNuevo;
    }

    calcularPerimetro(){
        return (2*this.#alto) + (2*this.#ancho);
    }

    calcularArea(){
        return this.#alto*this.#ancho;
    }

    mostrarPropiedades(){
        document.write(`<h2>Alto: ${this.alto} cm.</h2>`);
        document.write(`<h2>Ancho: ${this.ancho} cm.</h2>`);
    }
}


const alto = parseFloat(prompt('Ingrese el alto del rectangulo en cm.'));
const ancho = parseFloat(prompt('Ingrese el ancho del rectangulo en cm.'));
const rect = new Rectangulo(alto,ancho);
rect.mostrarPropiedades();
const perimetro = rect.calcularPerimetro();
const area = rect.calcularArea();
document.write(`<h2>El permitro del rectangulo es: ${perimetro} cm.</h2>`);
document.write(`<h2>El area del rectangulo es: ${area} cm.</h2>`);