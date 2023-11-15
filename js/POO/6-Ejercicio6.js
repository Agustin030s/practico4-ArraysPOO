class Libro{
    #ISBN;
    #titulo;
    #autor;
    #numDePag;

    constructor(ISBN, titulo, autor, numeroDePag){
        this.#ISBN = ISBN;
        this.#titulo = titulo;
        this.#autor = autor;
        this.#numDePag = numeroDePag;
    }

    get ISBN(){
        return this.#ISBN;
    }

    set ISBN(newISBN){
        this.#ISBN = newISBN;
    }

    get titulo(){
        return this.#titulo;
    }

    set titulo(newTit){
        this.#titulo = newTit;
    }

    get autor(){
        return this.#autor;
    }

    set autor(newAutor){
        this.#autor = newAutor;
    }

    get numDePag(){
        return this.#numDePag;
    }

    set numDePag(newNumPag){
        this.#numDePag = newNumPag;
    }

    mostrarLibro(){
        document.write(`<h2>El libro ${this.#titulo} con ISBN: ${this.#ISBN} creado por el autor ${this.#autor} tiene ${this.#numDePag} páginas</h2>`);
    }
}

const libroFisica = new Libro(9786073244398, 'Fisica Universitaria Vol 1', 'Sears Zemansky', 760);
const ingSoftware = new Libro(9786073206037, 'Ingenieria de Software', 'Ian Somerville', 774);
libroFisica.mostrarLibro();
ingSoftware.mostrarLibro();

if(libroFisica.numDePag > ingSoftware.numDePag){
    document.write(`<h2>El libro ${libroFisica.titulo} tiene mayor cantidad de páginas</h2>`);
}else{
    document.write(`<h2>El libro ${ingSoftware.titulo} tiene mayor cantidad de páginas</h2>`);
}