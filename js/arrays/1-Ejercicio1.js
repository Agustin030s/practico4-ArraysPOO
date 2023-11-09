/*
Gestión de inventario en una tienda: Tienes dos arrays, uno que representa los productos en stock y otro que almacena los precios de los productos. Debes crear funciones que permitan agregar nuevos productos al inventario, eliminar productos agotados y calcular el valor total del inventario.
*/

const productos = ['Pepsi 2lts', 'Coca Cola 3lts', 'Fernet 750ml', 'Vino Un Loco Más', 'Vino alma mora', 'Fanta 2lts', 'Gin Gordons', 'Gin London', 'Agua Tonica Paso de los toros 1,5 lts', 'Whisky Jhony Walker'];

const precios = [700, 1350, 4250.50, 1680, 1700, 940, 2500, 7620, 900, 40000];

const mostrarProductos = arreglo => {
    document.write(`<h2>Listado de Productos</h2>`);
    document.write("<ul>");
    arreglo.map( producto =>  document.write(`<li>${producto}</li>`) );
    document.write("</ul>");
};

const mostrarPrecios = (arreglo, valorTot) => {
    document.write(`<h2>Listado de Precios</h2>`);
    document.write("<ul>");
    arreglo.map( precio =>  document.write(`<li>$ ${precio}</li>`) );
    document.write("</ul>");
    document.write(`<p>El valor total del inventario es: $ ${valorTot}</p>`);
};

const agregarProductos = (nombreProducto, precioDelProducto) =>{
    productos.push(nombreProducto);
    precios.push(precioDelProducto);

    return alert(`Se agrego el producto ${nombreProducto}, con precio ${precioDelProducto}`);
}

const eliminarProducto = (nombreDelProducto) => {
    const producto = productos.find( item => item.includes(nombreDelProducto) );

    for(let i = 0; i < productos.length; i++){
        if(productos[i] === producto){
            productos.splice(i, 1);
            precios.splice(i,1);
        }
    }

    return alert(`Se elimino el producto ${producto}`);
}

const calcularValorTotalDelInventario = () =>{
    let valorTotal = 0;

    for(let i = 0; i < productos.length; i++){
        valorTotal += precios[i];
    }

    return valorTotal;
}

// const productoNuevo = prompt('Ingrese el nombre del producto');
// const precioDelProducto = parseFloat(prompt('Ingrese el precio del producto ingresado'));

// agregarProductos(productoNuevo, precioDelProducto);

// const nombreDelProductoAEliminar = prompt('Ingrese el nombre del producto que desea eliminar');
// eliminarProducto(nombreDelProductoAEliminar);

const valorTotal = calcularValorTotalDelInventario();

mostrarProductos(productos);
mostrarPrecios(precios, valorTotal);
