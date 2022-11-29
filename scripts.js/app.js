const { error, table } = require('console');
var fs = require('fs');
const Clases = require('./Clases');

//////////////////// Generador de ID ////////////////////
function generarGuid(longitud) {
    const ALFABETO = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var resultado = [];

    for (var i = 0; i < longitud; i++) {
        //Obtencion de un entero multiplicado random por Alfabeto
        resultado.push(ALFABETO.charAt(Math.floor(Math.random() * ALFABETO.length)));
    }

    return resultado.join('');
}

////////////////////    Proveedor   ///////////////////////
var ObjetosP = [];

try{
    var contenido = fs.readFileSync('./archivos/proveedor.txt','utf-8');
    ObjetosP = JSON.parse(contenido);
}catch(error){}

function guardarProveedor(atributos) {
    
    var nombre = atributos.nombre;

    var proveedor = new Clases.Proveedor(nombre);
    ObjetosP.push(proveedor);

    fs.writeFileSync('./archivos/proveedor.txt', JSON.stringify(ObjetosP), (error) => {
        if (error) {
            console.log('No se pudo guardar el objeto');
        } else {
            console.log('Archivo Guardado');
        }
    });

}

////////////////////    Producto    ///////////////////////
var productoNew = [];

try{
    var productoContenido = fs.readFileSync('./archivos/producto.txt','utf-8');
    productoNew = JSON.parse(productoContenido);
}catch(error){}

function guardarProducto(atrib){

    var nombre = atrib.nombre;
    var cantidad = atrib.cantidad;
    var marca = atrib.marca;
    var provee = atrib.idProv;
    
    var newProd = new Clases.Producto(nombre,cantidad,marca,provee);
    productoNew.push(newProd);

    fs.writeFileSync('./archivos/producto.txt', JSON.stringify(productoNew), (error) => {
        if (error) {
            console.log('No se pudo guardar el objeto');
        } else {
            console.log('Archivo Guardado');
        }
    });

}

////////////    Facturas   ////////////////
var Factu = [];

try{
    var facturasContenido = fs.readFileSync('./archivos/facturas.txt','utf-8');
    Factu = JSON.parse(facturasContenido);
}catch(error){}

function guardarFactura(id){

    var idNUmero=id.id;
    var numeroTramite = generarGuid(4);
    console.log(productoNew[idNUmero]);

    for (var i = 0; i < productoNew.length; i++) {
        if (productoNew[i] == productoNew[idNUmero]) {
            var nomb = productoNew[idNUmero].nombre;
            var cant = productoNew[idNUmero].cantidad;
            var marc = productoNew[idNUmero].marca;
            var pro = productoNew[idNUmero].provee;
        }
    }

    var nfactura = new Clases.Factura(nomb,cant,marc,pro,numeroTramite);

   Factu.push(nfactura);

   fs.writeFileSync('./archivos/facturas.txt', JSON.stringify(Factu), (error) => {
        if (error) {
            console.log('No se pudo guardar el objeto');
        } else {
            console.log('Archivo Guardado');
        }
    });
}

function eliminarProducto(num){

    var eliminar = num.num;
    console.log(eliminar);

    productoNew.splice(eliminar,1);       

    fs.writeFileSync('./archivos/producto.txt', JSON.stringify(productoNew), (error) => {
        if (error) {
            console.log('No se pudo guardar el objeto');
        } else {
            console.log('Archivo Guardado');
        }
    });
}

function eliminarProveedor(nume){

    var elim = nume.nume;
    console.log(elim);

    ObjetosP.splice(elim,1);       

    fs.writeFileSync('./archivos/proveedor.txt', JSON.stringify(ObjetosP), (error) => {
        if (error) {
            console.log('No se pudo guardar el objeto');
        } else {
            console.log('Archivo Guardado');
        }
    });
}

function modificarProducto(datos){

    var posicion = datos.idp;

    var nomb = datos.nombre;
    var cantid = datos.cantidad;
    var marc = datos.marca;
    var proveed = datos.idProveedor;

    for (var i = 0; i < ObjetosP.length; i++) {
        if (productoNew[i] == productoNew[posicion]) {
            productoNew[posicion].nombre = nomb;
            productoNew[posicion].cantidad = cantid;
            productoNew[posicion].marca = marc;
            productoNew[posicion].provee = proveed;
        }
    }

    fs.writeFileSync('./archivos/producto.txt', JSON.stringify(productoNew), (error) => {
        if (error) {
            console.log('No se pudo guardar el objeto');
        } else {
            console.log('Archivo Guardado');
        }
    });

}

function modificarProveedor(datas){

    var posi = datas.idr;

    var nombr = datas.nombre;

    for (var i = 0; i < ObjetosP.length; i++) {
        if (ObjetosP[i] == ObjetosP[posi]) {
            ObjetosP[posi].nombre = nombr;
        }
    }

    fs.writeFileSync('./archivos/proveedor.txt', JSON.stringify(ObjetosP), (error) => {
        if (error) {
            console.log('No se pudo guardar el objeto');
        } else {
            console.log('Archivo Guardado');
        }
    });
}

//////   //////  /////   ////  /////  ////  /////  ////

function enviarProveedores(){
    return ObjetosP;
}

function enviarProductos(){
    return productoNew;
}

function enviarFacturas(){
    return Factu;
}

module.exports = { guardarProducto, guardarProveedor, guardarFactura, enviarProveedores, enviarProductos, enviarFacturas, eliminarProducto, eliminarProveedor, modificarProducto, modificarProveedor}