
//----Modularizando todas las rutas de nuestra app------

const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.render("index", {titulo: "Titulo dinamico"})
});

router.get('/servicios',(req, res)=>{
    res.render("servicios", {tituloservicios: "Esta es la pgina de servicios"})
})

module.exports = router;