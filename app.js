/** cargamos modulos con require */
const express = require('express');
// const bodyParser = require('body-parser')
/** importamos el router */
const router = require('./router.js')

/** creamos la app */
const app = express();

/** Definir puerto de conexion */
const port = process.env.PORT || 3000;

/** Definir motor de plantillas */
app.set('view engine', 'ejs')

/** configurar body-parser: nos ayuda con el select, convierte el select en array */
// app.use(bodyParser.urlencoded({extended:true}))
// app.use(bodyParser.json())

/** con express */
app.use(express.urlencoded({extended:true}))
app.use(express.json())

/** definir la carpeta de los ficheros estaticos */
app.use(express.static('public'))

/** usamos el router */
app.use(router)

/** definir que hacer en caso de error */





/** poner el servidor en escucha */
app.listen(port, () => console.log(`servidor funcionando en http://localhost:${port}`))
