const express = require('express');
const path = require('path'); //Creo una constante path(Sirve para la ruta)
const app = express();
const funciones = require('./scripts.js/app');

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended:false}));

var fs = require('fs');

const { response } = require('express');
const { request } = require('http');

app.listen(port,()=>{
    console.log(`Funciona ${port}`);
});

///////    ///////     ///////   ///////   ///////   /////   ////////   ///////

app.get('/',(request,response)=>{
    response.sendFile(path.join(__dirname,'./funcionesHTML/menu.html'));
});

///////    ///////     ///////   ///////   ///////   /////   ////////   ///////


app.get('/agregarProveedor',(request,response)=>{
    response.sendFile(path.join(__dirname,'./funcionesHTML/agregarProveedor.html'));
});

app.get('/agregarProducto',(request,response)=>{
    response.sendFile(path.join(__dirname,'./funcionesHTML/agregarProducto.html'));
});

app.get('/verProveedor',(request,response)=>{
    response.sendFile(path.join(__dirname,'./funcionesHTML/verProveedor.html'));
});

app.get('/verDeposito',(request,response)=>{
    response.sendFile(path.join(__dirname,'./funcionesHTML/verDeposito.html'));
});

app.get('/verFacturas',(request,response)=>{
    response.sendFile(path.join(__dirname,'./funcionesHTML/verFacturas.html'));
});

app.get('/eliminarProductos',(request,response)=>{
    response.sendFile(path.join(__dirname,'./funcionesHTML/eliminarProducto.html'));
});

app.get('/eliminarProveedores',(request,response)=>{
    response.sendFile(path.join(__dirname,'./funcionesHTML/eliminarProveedor.html'));
});

app.get('/modificarProductos',(request,response)=>{
    response.sendFile(path.join(__dirname,'./funcionesHTML/modificarProducto.html'));
});

app.get('/modificarProveedores',(request,response)=>{
    response.sendFile(path.join(__dirname,'./funcionesHTML/modificarProveedor.html'));
});

///////    ///////     ///////   ///////   ///////   /////   ////////   ///////


app.post('/guardarProveedor',(request, response) =>{
    funciones.guardarProveedor(request.body);
    response.send(request.body);
});

app.post('/guardarProducto',(request, response) =>{
    funciones.guardarProducto(request.body);
    response.send(request.body);
});

app.post('/guardarFacturas',(request, response) =>{
    funciones.guardarFactura(request.body);
    response.send(request.body);
});

//////     ////////     ///////     ////////      ///////     ////////   ///////

app.post('/eliminarProducto',(request,response) => {
    funciones.eliminarProducto(request.body);
    response.send(request.body);
});

app.post('/eliminarProveedor',(request,response) => {
    funciones.eliminarProveedor(request.body);
    response.send(request.body);
});

app.post('/modificarProducto',(request,response) => {
    funciones.modificarProducto(request.body);
    response.send(request.body);
});

app.post('/modificarProveedor',(request,response) => {
    funciones.modificarProveedor(request.body);
    response.send(request.body);
});

///////    ///////     ///////   ///////   ///////   /////   ////////   ///////


app.get('/verProveedoresTabla',(request,response)=>{
    var proveedores = funciones.enviarProveedores();
    response.send(proveedores);//Envio a la url
});

app.get('/verProductosTabla',(request, response)=>{
    var productos = funciones.enviarProductos();
    response.send(productos);
});

app.get('/verFacturasTabla',(request, response)=>{
    var facturas = funciones.enviarFacturas();
    response.send(facturas);
});