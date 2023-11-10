/*
Catálogo de biblioteca: Tienes un array que almacena títulos de libros en una biblioteca. Debes crear funciones que permitan a los usuarios buscar libros por título, verificar si un libro específico está disponible para préstamo y llevar un registro de la disponibilidad de los libros.
*/

const libros = ['POO en Java', 'PHP el lenguaje universal', 'Ingenieria de Software'];
const disponibilidad = ['Disponible', 'No Disponible', 'No Disponible'];

const mostrarLibros = (arreglo, titulo) => {
    document.write(`<h2>Listado de libros ${titulo}</h2>`);
    document.write("<ul>");
    arreglo.map( item =>  document.write(`<li>${item}</li>`) );
    document.write("</ul>");
};

const buscarLibros = titulo => {
    const libroBuscado = libros.find(libro => libro.includes(titulo));
    if(libroBuscado === undefined){
        alert('No se encontro el libro que ingreso en la biblioteca');
    }
    return libroBuscado;
}

const verificarDisponibilidad = estado => estado === 'Disponible';
const libroDisponible = titulo =>{
    const libroIndex = libros.findIndex(item => item.includes(titulo));
    const libro = buscarLibros(titulo);
    if(libroIndex !== -1){
        if(verificarDisponibilidad(disponibilidad[libroIndex])){
            alert(`El libro ${libro} si esta disponible`);
        } else{
            alert(`El libro ${libro} no esta disponible`);
        }
    } else{
        alert(`El libro ${libro} no se encontró en la biblioteca`);
    }
}

const librosDisponibles = () =>{
    const librosDisp = libros.filter((libro, index) => verificarDisponibilidad(disponibilidad[index]));
    mostrarLibros(librosDisp, 'Disponibles');
}

const libroABuscar = prompt('Ingrese el titulo del libro que desea buscar');
const libro = buscarLibros(libroABuscar);
libroDisponible(libro);
librosDisponibles();
document.write(`<p>El libro es: ${libro}</p>`)