class Producto {
    #codigo
    #nombre
    #precio
    constructor(codigo, nombre, precio){
        this.#codigo = codigo;
        this.#nombre = nombre;
        this.#precio = precio;
    }

    get codigo(){
        return this.#codigo;
    }

    set codigo(codigoNuevo){
        this.#codigo = codigoNuevo;
    }

    get nombre(){
        return this.#nombre;
    }

    set nombre(nomNuevo){
        this.#nombre = nomNuevo;
    }

    get precio(){
        return this.#precio;
    }

    set precio(precioNuevo){
        this.#precio = precioNuevo;
    }

    imprimirDatos(){
        document.write(`<h2>Código: ${this.#codigo}</h2>`);
        document.write(`<h2>Nombre: ${this.#nombre}</h2>`);
        document.write(`<h2>Precio: $ ${this.#precio}</h2>`);
        document.write(`<br>`);
    }
}

const productos = [];
const producto1 = new Producto(5, 'Pepsi 2lts', 700);
productos.push(producto1);
const producto2 = new Producto(7, 'Oreos', 900);
productos.push(producto2);
const producto3 = new Producto(9, 'Arroz', 500);
productos.push(producto3);

productos.map(producto => producto.imprimirDatos());