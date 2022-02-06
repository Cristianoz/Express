const app = require('./app');
const port = process.env.PORT || 3040
app.listen(port, ()=>{console.log(`server is running on this ${port}`)}); // 5. creacion del servidor locales