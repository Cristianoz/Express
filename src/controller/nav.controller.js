// 7. Crear controlador de la ruta principal nav

const navController = {

    getHome: (req, res) => {
       // res.render('index')
        res.send('index');
    },
}

module.exports = navController;