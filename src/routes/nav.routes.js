const express = require('express');
const route = express.Router(); 
const {nav, one, two} = require('../controller/index'); // recibo los controladores y las funcionalidades respectivas

// agregamos las rutas 
route.get('/', nav.getHome);
route.get('/one',one.getOne);
route.get('/two',two.getTwo);


module.exports = route;