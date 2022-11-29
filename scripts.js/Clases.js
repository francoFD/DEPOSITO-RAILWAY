//Constructor of objects

class Proveedor{
    constructor (nombre){ 
        this.nombre=nombre;
    }
}

class Producto{
    constructor(nombre,cantidad,marca,provee){
        this.nombre=nombre;
        this.cantidad=cantidad;
        this.marca=marca;
        this.provee=provee;
    }
}

class Factura{
    constructor(nombre,cantidad,marca,proveedor,numeroTramite){
        this.nombre=nombre;
        this.cantidad=cantidad;
        this.marca=marca;
        this.proveedor=proveedor;
        this.numeroTramite=numeroTramite;
    }
}

module.exports={Producto, Proveedor, Factura};