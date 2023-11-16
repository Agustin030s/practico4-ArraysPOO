class Aeropuerto{
    #nombreAeropuerto;
    #listaAviones;
    constructor(nombre){
        this.#nombreAeropuerto = nombre;
        this.#listaAviones = [];
    }

    get nombreAeropuerto(){
        return this.#nombreAeropuerto
    }

    set nombreAeropuerto(nom){
        this.#nombreAeropuerto = nom;
    }

    get listaAviones(){
        return this.#listaAviones;
    }

    agregarAviones(avion){
        this.#listaAviones.push(avion);
    }

    buscarAvion(nombre){
        const avionBuscado = this.#listaAviones.find(avion => avion.nombre === nombre);
        if(avionBuscado !== undefined){
            document.write(`<h2>Nombre: ${avionBuscado.nombre}, Capacidad: ${avionBuscado.capacidad}, Destino: ${avionBuscado.destino}, Lista De Pasajeros: ${avionBuscado.listarPasajeros()}</h2>`);
        }else{
            document.write(`<h2>No se encontro ningún avión con nombre ${nombre}</h2>`);
        }
    }
}

class Avion{
    #nombre;
    #capacidad;
    #destino;
    #listaDePasajeros;
    constructor(nombre, capacidad, destino){
        this.#nombre = nombre;
        this.#capacidad = capacidad;
        this.#destino = destino;
        this.#listaDePasajeros = [];
    }

    get nombre(){
        return this.#nombre
    }

    set nombre(nom){
        this.#nombre = nom;
    }

    abordar(pasajero){
        if(!this.lugarDisponible()){
            this.#listaDePasajeros.push(pasajero);
        }else{
            alert('Avión lleno, no quedan lugares');
        }
    }

    lugarDisponible(){
        return this.#listaDePasajeros.length === this.#capacidad;
    }

    listarPasajeros(){
        this.#listaDePasajeros.map(pasajero => document.write(`<p>${pasajero}</p>`));
    }
}

const aeropuerto = new Aeropuerto('Aeropuerto Internacional');
const avion1 = new Avion('Fly Bondi', 50, 'Hawai');
avion1.abordar('Juan');
avion1.abordar('Pedro');
const avion2 = new Avion('Wiiiii', 70, 'Londres');
avion2.abordar('Juan');
avion2.abordar('Pedro');
const avion3 = new Avion('Hercules', 150, 'Ushuaia');
avion3.abordar('Juan');
avion3.abordar('Pedro');

aeropuerto.agregarAviones(avion1);
aeropuerto.agregarAviones(avion2);
aeropuerto.agregarAviones(avion3);
console.log(aeropuerto);
aeropuerto.buscarAvion('Wiiiii');
