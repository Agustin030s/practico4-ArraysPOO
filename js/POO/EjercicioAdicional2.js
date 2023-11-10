const listaDeTareas = {
    tareas: ['Especificaciones', 'Diseño', 'Desarrollo','Testing'],
    agregarTarea: function (tarea){
        this.tareas.push(tarea);
    },
    completarTarea: function(tarea){
        const tareaIndex = this.tareas.findIndex(x => x.includes(tarea));
        this.tareas[tareaIndex] = this.tareas[tareaIndex] + ' Completado';
    },
    listarTareas: function (){
        document.write(`<h2>Listado de Tareas</h2>`);
        document.write("<ul>");
        this.tareas.map((item) => document.write(`<li>${item}</li>`));
        document.write("</ul>");
    }
}

// listaDeTareas.agregarTarea('Implementación');
listaDeTareas.completarTarea('Especificacion')
listaDeTareas.completarTarea('Dise');
listaDeTareas.listarTareas();