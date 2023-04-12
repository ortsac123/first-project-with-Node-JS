const express = require('express');
const router = express.Router();


router.get("/", (req, res)=>{
    res.render("mascotas", {
        arrayMascotas: [
            {id : '10000', nombre: 'Guardian', descripcion: 'Perro' },
            {id : '20000', nombre: 'La niña', descripcion: 'Gato' }            
        ]
    })
})

module.exports = router;