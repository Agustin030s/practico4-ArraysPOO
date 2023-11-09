/*
Gestión de proyectos en una empresa: Tienes dos arrays, uno para los nombres de proyectos y otro para los estados de los proyectos. Debes crear funciones que permitan agregar nuevos proyectos, cambiar el estado de un proyecto, asignar un responsable y generar un resumen de proyectos en curso.
*/

const proyectos = ['Ecommerce', 'Microservicios con docker para sistema bancario', 'Aplicacion de ventas en .NET']
const estadosProyecto = ['In progress', 'In progress', 'To Do'];
const responsables = ['Luciano', 'Agustin', 'Sin Asignar']

const mostrarArrays = (arreglo, titulo) => {
    document.write(`<h2>Listado de ${titulo}</h2>`);
    document.write("<ul>");
    arreglo.map( item =>  document.write(`<li>${item}</li>`) );
    document.write("</ul>");
};

const agregarProyecto = (nombreProyecto) => {
    proyectos.push(nombreProyecto);
    estadosProyecto.push('To do');
    responsables.push('Sin Asignar');
}

const cambiarEstadoDeProyecto = (nombreProyecto, estado) => {
    const indexProyecto = proyectos.findIndex(proyecto => proyecto.includes(nombreProyecto));
    const proyecto = proyectos.find(proyecto => proyecto.includes(nombreProyecto));

    if(indexProyecto !== -1){
        estadosProyecto[indexProyecto] = estado;
        return alert(`Al proyecto ${proyecto} se le cambio el estado a ${estado}`);
    }else{
        return alert(`No se puedo encontrar el proyecto ingresado`);
    }
}

const proyectoEnCurso = estado => estado === 'In progress';

const asignarResponsableAlProyecto = (nombreProyecto, responsable) => {
    const indexProyecto = proyectos.findIndex(proyecto => proyecto.includes(nombreProyecto));
    const proyecto = proyectos.find(proyecto => proyecto.includes(nombreProyecto));

    if(indexProyecto !== -1){
        responsables[indexProyecto] = responsable;
        return alert(`Al proyecto ${proyecto} se le asigno el responsable ${responsable}`);
    }else{
        return alert(`No se puedo encontrar el proyecto ingresado`);
    }
}

const resumenProyectosEnCurso = () =>{
    const proyectosEnCurso = proyectos.filter((proyecto, index) => proyectoEnCurso(estadosProyecto[index]));
    console.log(proyectosEnCurso);
}

// const nombreProyecto = prompt('Ingrese el proyecto al que desea cambiar el estado');
// const estadoNuevo = prompt('Ingrese el nuevo estado del proyecto');
// agregarProyecto(nombreProyecto);
console.log(proyectos);
console.log(estadosProyecto);
// cambiarEstadoDeProyecto(nombreProyecto, estadoNuevo);
// console.log(estadosProyecto);
resumenProyectosEnCurso()
