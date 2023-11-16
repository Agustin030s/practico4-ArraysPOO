class Animal{
    #nombre;
    #edad;
    constructor(nombre,edad){
        this.#nombre = nombre;
        this.#edad = edad;
    }

    get nombre(){
        return this.#nombre
    }

    set nombre(nom){
        this.#nombre = nom;
    }

    get edad(){
        return this.#edad
    }

    set edad(age){
        if(!isNaN(age) && age >= 0){
            this.#edad = age;
        }else{
            alert('Ingrese una edad válida');
        }
    }

    emitirSonido(){
        document.write(`Aún no emito sonido :( )`);
    }
}

class Perro extends Animal{
    constructor(nombre, edad){
        super(nombre, edad);
    }

    emitirSonido(){
        document.write(`<h2>Soy ${this.nombre}, Guau Guau Guau 🐶</h2>`);
    }
}

class Gato extends Animal{
    constructor(nombre, edad){
        super(nombre, edad);
    }

    emitirSonido(){
        document.write(`<h2>Soy ${this.nombre}, Miau Miau Miau 😺</h2>`);
    }
}

const perro = new Perro('Toby', 8);
perro.emitirSonido();
const gato = new Gato('Macri', 5);
gato.emitirSonido();