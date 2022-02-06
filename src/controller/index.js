// aca vamos a conocer la utilidad de usar los archivos index
// requiero todos mis controladores
const nav = require('./nav.controller');
const one = require('./controllerOne');
const two = require('./controllerTwo');

// los exporto a las rutas organizadas en un objeto

module.exports = {
    nav,
    one,
    two
}