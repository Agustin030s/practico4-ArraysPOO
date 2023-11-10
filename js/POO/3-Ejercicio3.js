class Rectangulo{
    constructor(alto, ancho){
        this.alto = alto,
        this.ancho = ancho;
    }

    mostrarPropiedades(){
        document.write(`<h2>Alto: ${this.alto}</h2>`);
        document.write(`<h2>Ancho: ${this.ancho}</h2>`);
    }

    set modificarAlto(altoNuevo){
        this.alto = altoNuevo;
    }

    set modificarAncho(anchoNuevo){
        this.ancho = anchoNuevo;
    }

    get calcularPerimetro(){
        return (2*this.alto) + (2*this.ancho);
    }

    get area(){
        return this.alto*this.ancho;
    }
}

const rect = new Rectangulo(10, 5);
rect.mostrarPropiedades();
// const perimetro = rect.calcularPerimetro();
const area = rect.area();
// console.log(perimetro);
console.log(area);