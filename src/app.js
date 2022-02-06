// 1. Requerimos nuestro framework express y las demas dependencias 
const express = require('express');
const app = express();
const path = require('path');

const methodOverride = require('method-override'); // permite el uso de los metodos put o delete
app.use(methodOverride('_method'));

app.use(express.urlencoded({extended: false})); // URL encode - Tomar la información desde el formulario al req.body
app.use(express.json()); // para que el servidor reciba archivos json

// 2. Indicarle express la carpeta donde se encuentran los archivos estáticos
app.use(express.static(path.resolve(__dirname, '..', 'public'))); 

// 3. setear la ubicacion mi motor de renderizacion de las vistas ejs
app.set('views', path.resolve(__dirname,'.', '/views'));
app.set('view engine', 'ejs');

// 4. requiero las rutas de mi aplicativo
app.use('/', require('./routes'));// al llamarse index express toma el entry point y no es necesario ./routes/index



module.export = app; // ejecutamos app.listen en index