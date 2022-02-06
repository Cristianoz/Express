const express = require('express');
const route = express.Router; // 6. Creamos nuestro ruteador 

// agregamos las rutas
route.use('/', require('./nav.routes'));

module.export = route;