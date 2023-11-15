class AgendaTelefonica{
    #cantidadDeContactos;
    #contactos;
    constructor(){
        this.#cantidadDeContactos = 10;
        this.#contactos = [];
    }

    get cantidadDeContactos(){
        return this.#cantidadDeContactos;
    }

    set cantidadDeContactos(nuevaCant){
        if(!isNaN(nuevaCant) && nuevaCant > 0){
            this.#cantidadDeContactos = nuevaCant;
        }else{
            alert('Ingrese una cantidad válida');
        }
    }

    get contactos(){
        return this.#contactos;
    }

    aniadirContactos(contacto){
        if(this.#contactos.length <= this.#cantidadDeContactos){
            this.#contactos.push(contacto);
        }else{
            alert('La agenda está completa');
        }
    }

    existeContacto(contacto){
        const contactoBuscado = this.#contactos.find(c => c === contacto);
    }

    buscarContacto(nombre){
        const contactoBuscado = this.#contactos.find(c => c.nombre === nombre);
        if(contactoBuscado !== undefined){
            document.write(`<h2>Nombre: ${contactoBuscado.nombre}, Teléfono: ${contactoBuscado.numDeTelefono}</h2>`);
        }else{
            document.write(`<h2>No se encontro ningún contacto con nombre ${contactoBuscado.nombre}</h2>`);
        }
    }
}

class Contacto{
    #nombre;
    #numDeTelefono;
    constructor(nombre, numeroTel){
        this.#nombre = nombre;
        this.#numDeTelefono = numeroTel;
    }

    get nombre(){
        return this.#nombre;
    }

    set nombre(nuevNombre){
        this.#nombre = nuevNombre;
    }

    get numDeTelefono(){
        return this.#numDeTelefono;
    }

    set numDeTelefono(newTel){
        if(!isNaN(newTel) && newTel > 0 && newTel <= 10){
            this.#numDeTelefono = newTel;
        }else{
            alert('Ingrese un número de telefono válido');
        }
    }
}