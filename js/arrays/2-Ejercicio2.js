/*
Registro de notas de estudiantes: Tienes dos arrays, uno con nombres de estudiantes y otro con sus respectivas notas en un curso. Debes crear funciones que calculen el promedio de notas por estudiante y muestren un resumen con los nombres de los estudiantes que aprobaron y reprobaron el curso.
*/

const estudiantes = ['Agustin', 'Luciano', 'Luchy', 'Lucas', 'Enzo'];
const notas = [[10, 9, 10, 8, 9], [10, 9, 8, 8, 7], [7, 9, 5, 5, 7], [10, 7, 7, 6, 5], [8, 9, 6, 5, 7]];

const mostrarEstudiantes = (estudiantes, titulo) => {
    document.write(`<h2>Listado de Alumnos ${titulo}</h2>`);
    document.write("<ul>");
    estudiantes.map( alumno =>  document.write(`<li>${alumno}</li>`) );
    document.write("</ul>");
};

const promedioDeNotas = notasEstudiantes =>{
    const sumaDeNotas = notasEstudiantes.reduce((acumulador, nota) => acumulador + nota, 0);
    const promedio = sumaDeNotas / notasEstudiantes.length;

    return promedio;
}

const aproboElCurso = nota => nota >= 7;

const resumenDeEstudiantes = (estudiantes, notas) => {
    const promedios = notas.map(nota => promedioDeNotas(nota));
    const estudiantesAprobados = estudiantes.filter((estudiante,index) => aproboElCurso(promedios[index]));
    const estudiantesDesaprobados = estudiantes.filter((estudiante,index) => !aproboElCurso(promedios[index]));
    mostrarEstudiantes(estudiantesAprobados, 'Aprobados');
    mostrarEstudiantes(estudiantesDesaprobados, 'Desaprobados');
}

resumenDeEstudiantes(estudiantes, notas);