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
        if(!this.agendaLlena()){
            this.#contactos.push(contacto);
        }else{
            alert('La agenda está llena');
        }
    }

    existeContacto(contacto){
        const contact = this.#contactos.find(c => c.numDeTelefono === contacto.numDeTelefono);
        if(contact !== undefined){
            document.write(`<h2>El contacto ${contact.nombre} si existe</h2>`);
        }else{
            document.write(`<h2>No existe el contacto ${contacto.nombre}</h2>`);
        }
    }

    listarContactos(){
        document.write(`<h2>Listado de contactos</h2>`);
        this.#contactos.map(c => document.write(`<h2>Nombre: ${c.nombre}, Teléfono: ${c.numDeTelefono}</h2><br>`));
    }

    buscarContacto(nombre){
        const contactoBuscado = this.#contactos.find(c => c.nombre === nombre);
        if(contactoBuscado !== undefined){
            document.write(`<h2>Nombre: ${contactoBuscado.nombre}, Teléfono: ${contactoBuscado.numDeTelefono}</h2>`);
        }else{
            document.write(`<h2>No se encontro ningún contacto con nombre ${nombre}</h2>`);
        }
    }

    eliminarContacto(contacto){
        const indexContact = this.#contactos.findIndex(c => c.nombre === contacto.nombre);
        if(indexContact !== -1){
            this.#contactos.splice(indexContact, 1);
            return alert(`Se elimino el contacto ${contacto.nombre}`);
        }else{
            return alert('No se encontro el contacto ingresado');
        }
    }

    agendaLlena(){
        return this.#contactos.length === this.#cantidadDeContactos;
    }

    huecosLibres(){
        const huecosLib = this.#cantidadDeContactos - this.#contactos.length;
        return huecosLib;
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
        if(!isNaN(newTel) && newTel > 0 && newTel <= 9999999999){
            this.#numDeTelefono = newTel;
        }else{
            alert('Ingrese un número de telefono válido');
        }
    }
}

const agenda = new AgendaTelefonica();
let condicion = true;

while(condicion){
    const opcion = parseInt(prompt(`\nMenú de Agenda Telefónica:
    1. Añadir contacto
    2. Buscar contacto
    3. Eliminar contacto
    4. Listar contactos
    5. Huecos libres
    6. Cambiar el limite de contactos de la agenda
    7. Salir\n`));

    switch(opcion){
        case 1:
            const nombre = prompt('Ingrese el nombre del contacto:');
            const telefono = parseInt(prompt('Ingrese el teléfono del contacto:'));
            const nuevoContacto = new Contacto(nombre, telefono);
            agenda.aniadirContactos(nuevoContacto);
            break;
        case 2:
            const nombreBuscar = prompt('Ingrese el nombre del contacto a buscar:');
            condicion = false;
            agenda.buscarContacto(nombreBuscar);
            break;
        case 3:
            const nombreEliminar = prompt('Ingrese el nombre del contacto a eliminar:');
            const contactoEliminar = new Contacto(nombreEliminar, 0);
            agenda.eliminarContacto(contactoEliminar);
            break;
        case 4:
            condicion = false;
            agenda.listarContactos();
            break;
        case 5:
            const huecosLibres = agenda.huecosLibres();
            alert(`Quedan ${huecosLibres} lugares en la agenda.`);
            break;
        case 6:
            const cantidadNueva = parseInt(prompt('Ingrese el nuevo limite de contactos de la agenda'));
            agenda.cantidadDeContactos = cantidadNueva;
            break;
        case 7:
            condicion = false;
            break;
        default:
            alert('Por favor ingrese una opción válida');
    }
}
