const app = require('./app');
const port = process.env.PORT || 5000;
app.listen(port, ()=>{console.log(`server is running on this ${port}`)}) // creacion del servidor local