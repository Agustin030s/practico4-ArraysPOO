class Persona{
    #nombre;
    #edad;
    #dni;
    #sexo;
    #peso;
    #altura;
    #fechNac;

    constructor(nombre, edad, dni, sexo, peso, altura, fechaNac){
        this.#nombre = nombre;
        this.#edad = edad;
        this.#dni = dni;
        this.#sexo = sexo;
        this.#peso = peso;
        this.#altura = altura;
        this.#fechNac = fechaNac;
    }

    get nombre(){
        return this.#nombre;
    }

    set nombre(nom){
        this.#nombre = nom;
    }

    get edad(){
        return this.#edad;
    }

    set edad(edadNuev){
        if(!isNaN(edadNuev) && edadNuev >= 0){
            this.#edad = edadNuev;
        }else{
            alert('Ingrese una edad válida');
        }
    }

    get dni(){
        return this.#dni;
    }

    set dni(dniNuev){
        if(!isNaN(dniNuev) && dniNuev <= 99999999 && dniNuev > 0){
            this.#dni = dniNuev;
        }else{
            alert('Ingrese un número de DNI válido');
        }
    }

    get sexo(){
        return this.#sexo;
    }

    set sexo(sexoNuev){
        if(sexoNuev === 'M' || sexoNuev === 'H'){
            this.#sexo = sexoNuev;
        }else{
            alert('Ingrese un sexo válido (M - mujer, H - hombre)');
        }
    }

    get peso(){
        return this.#peso;
    }

    set peso(pesoNuev){
        if(!isNaN(pesoNuev) && pesoNuev > 0){
            this.#peso = pesoNuev;
        }else{
            alert('Ingrese un peso válido');
        }
    }

    get altura(){
        return this.#altura;
    }

    set altura(altNuev){
        if(!isNaN(altNuev) && altNuev > 0){
            this.#altura = altNuev;
        }else{
            alert('Ingrese una altura válida');
        }
    }

    get fechNac(){
        return this.#fechNac;
    }

    set fechNac(fechNuev){
        this.#fechNac = fechNuev;
    }

    obtenerFecha(){
        const day = this.#fechNac.getDay();
        const month = this.#fechNac.getMonth();
        const year = this.#fechNac.getFullYear();

        const fechaNacimiento = `${day}/${month}/${year}`;
        return fechaNacimiento;
    }

    mostrarDatos(){
        const fechNacimiento = this.obtenerFecha();
        document.write(`<h2>Nombre: ${this.#nombre}</h2>`);
        document.write(`<h2>DNI: ${this.#dni}</h2>`);
        document.write(`<h2>Edad: ${this.#edad}</h2>`);
        document.write(`<h2>Fecha de Nacimiento: ${fechNacimiento}</h2>`);
        document.write(`<h2>Sexo: ${this.#sexo}</h2>`);
        document.write(`<h2>Peso: ${this.#peso} Kg.</h2>`);
        document.write(`<h2>Altura: ${this.#altura} cm.</h2>`);
    }
    
    mostrarGeneracion(){
        const añoDeNacimiento = this.#fechNac.getFullYear();
        let generacion = '';
        let rasgoCaracteristico = '';

        if(añoDeNacimiento >= 1994 && añoDeNacimiento <= 2010){
            generacion = 'Generación Z';
            rasgoCaracteristico = 'Irreverencia';
        }else if(añoDeNacimiento >= 1981 && añoDeNacimiento <= 1993){
            generacion = 'Generación Y: Millenials';
            rasgoCaracteristico = 'Frustración';
        }else if(añoDeNacimiento >= 1969 && añoDeNacimiento <= 1980){
            generacion = 'Generación X';
            rasgoCaracteristico = 'Obsesión por el éxito';
        }else if(añoDeNacimiento >= 1949 && añoDeNacimiento <= 1968){
            generacion = 'Baby Boom';
            rasgoCaracteristico = 'Ambición';
        }else if(añoDeNacimiento >= 1930 && añoDeNacimiento <= 1948){
            generacion = 'Silent Generation';
            rasgoCaracteristico = 'Auteridad';
        }else{
            generacion = 'Sin generación';
            rasgoCaracteristico = 'No tiene rasgo caracteristico';
        }

        document.write(`<h2>La generación de ${this.#nombre} es ${generacion} y su rasgo caracteristico es: ${rasgoCaracteristico}</h2>`);
    }

    esMayorDeEdad(){
        if(this.#edad >= 18){
            document.write(`<h2>${this.#nombre} es mayor de edad</h2>`);
        }else{
            document.write(`<h2>${this.#nombre} es menor de edad</h2>`);
        }
    }

    generarDni(){
        const numDNI = Math.floor(Math.random() * 99999999) + 1;
        return numDNI;
    }
}

const persona = new Persona('Juan', 30, 12345678, 'M', 70, 175, new Date(1995,5,15));
persona.mostrarDatos();
persona.mostrarGeneracion();
persona.esMayorDeEdad();
const nuevoDni = persona.generarDni();
persona.dni = nuevoDni;
document.write(`<h2>Nuevo DNI: ${persona.dni}</h2>`);