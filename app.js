
//---------------SERVIDOR HTTP------------------

// const http = require('http');
// const server = http.createServer((req, res)=>{
//     res.end("Hola amigo, como estas ?");
// })

// const puerto = 3000;
// server.listen(puerto, ()=> {    //Para habilitar la escucha del puerto 3000
//     console.log("Escuchando solicitudes");
// })

//------------EXPRESS-----------------------

const express = require('express');
const router = require('./router/RutasWeb');
const app = express()
const puerto = process.env.PORT || 3977;

//--------------------Motor de plantillas----------------------
app.set('view engine', 'ejs'); //Con esto le decimos a express que usamos un motor de plantillas llamado EJS
app.set('views', __dirname + '/views')

app.use(express.static(__dirname + '/public')) //Es importante mantener esta linea ya que en views no se hace css no js, este se hace en public


//app.get('/servicios', (req, res)=>{
  //  res.send("Esta es la pagina de servicios");
//})

app.use('/', require('./router/RutasWeb'));

app.use('/mascotas', require('./router/mascotas'))

app.listen(puerto, ()=>{   //Para habilitar la escucha del puerto 3000
    console.log(`Te estoy escuchando por el puerto ${puerto}`);
})

app.use((req, res, next) => {
    res.status(404).render("404.ejs")
})