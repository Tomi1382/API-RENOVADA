var express = require('express');
var router = express.Router();

var nacionalidadesRouter = require('./nacionalidades');
var generoRouter = require('./genero');
var afiliadosRouter = require('./afiliados');
var autoresRouter = require('./autores');
var alquilerRouter = require('./alquiler');
var librosRouter = require('./libros');

router.use('/nacionalidades',nacionalidadesRouter);
router.use('/genero',generoRouter);
router.use('/afiliados',afiliadosRouter);
router.use('/autores',autoresRouter);
router.use('/alquiler',alquilerRouter);
router.use('/libros',librosRouter);

module.exports = router;
