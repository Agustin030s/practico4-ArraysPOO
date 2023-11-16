class Persona{
    #nombre;
    #edad;
    #profesion;
    constructor(nombre, edad, profesion){
        this.#nombre = nombre;
        this.#edad = edad;
        this.#profesion = profesion;
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

    get profesion(){
        return this.#profesion
    }

    set profesion(prof){
        this.#profesion = prof;
    }

    saludar(){
        document.write(`<h2>Hola a todos, soy ${this.#nombre}, tengo ${this.#edad} y mi profesión es: ${this.#profesion}</h2>`);
    }

    despedirse(){
        document.write(`<h2>Acsta la procima (sonido de fondo epico)</h2>`);
    }
}

const persona1 = new Persona('Juan Ruiz', 20, 'Profesor');
persona1.saludar();
persona1.despedirse();
const persona2 = new Persona('Agustin Maza', 23, 'Desarrollador');
persona2.saludar();
persona2.despedirse();
