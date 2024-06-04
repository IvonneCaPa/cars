/** cargamos modulos con require */
const express = require('express');
const mysql = require('mysql')
const path = require('path')

/** Iniciar rutas */
const router = express.Router();

/** conexion a ka BD */
const configConecction = {
    host: 'localhost',
    user: 'root',
    password:'',
    database: 'cars'
}

/**  */
const connection = mysql.createConnection(configConecction);

/** RUTA RAIZ */
router.get('/', (req, res) => {
    const selectAll = "SELECT * FROM modelos"
    connection.query(selectAll, (err, result) => {
        if(err){console.log(err);  
        } else {
            res.render("index", {h2:"Nuestos Coches", result})
        }
    })
    // res.render("index", {h2:"Nuestos Coches"})
})




/** exportar el router */
module.exports = router