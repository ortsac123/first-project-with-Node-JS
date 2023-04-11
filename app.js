
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

const express = require('express')
const app = express()
const puerto = 3000;

//--------------------Motor de plantillas----------------------
app.set('view engine', 'ejs'); //Con esto le decimos a express que usamos un motor de plantillas llamado EJS
app.set('views', __dirname + '/views')

app.use(express.static(__dirname + '/public')) //Es importante mantener esta linea ya que en views no se hace css no js, este se hace en public

app.get('/', (req, res)=>{
    res.render("index", {titulo: "Titulo dinamico"})
});

app.get('/servicios',(req, res)=>{
    res.render("servicios", {tituloservicios: "Esta es la pgina de servicios"})
})

//app.get('/servicios', (req, res)=>{
  //  res.send("Esta es la pagina de servicios");
//})


app.listen(puerto, ()=>{   //Para habilitar la escucha del puerto 3000
    console.log("Te estoy escuchando por el puerto 3000 :)");
})

app.use((req, res, next) => {
    res.status(404).render("404")
})