//esqueleto p´a todo
var express = require('express');
var router = express.Router();
var db = require('./conexion.js');

//mostra if
router.get('/', function(req, res, next) {
	const sql= 'SELECT * FROM nacionalidades';
	db.query(sql, function(error, resul) {
		if(error){
			console.log(error);
			res.send("Ocurrio un error");
		}else{ 
		res.send(resul);
	}
	})
});
// cambiar 
router.put('/', function(req, res, next) {
		const {nacionalidad ,id} = req.body;
	const sql= "UPDATE nacionalidades SET descripcion = '"+ nacionalidad +"' WHERE id = " + id;
	db.query(sql, function(error, resul) {
		if(error){
			console.log(error);
			res.send("Ocurrio un error");
		}else{ 
		res.send("Guardado");
	}
	})


});
//Eleminar
router.delete('/', function(req, res, next) {
	const {id} = req.body;
	const sql= "DELETE  FROM nacionalidades WHERE id = " + id;
	db.query(sql, function(error, resul) {
		if(error){
			console.log(error);
			res.send("Ocurrio un error");
		}else{ 
		res.send("Eliminado");
	}
	})


});
//agregar 
router.post('/', function(req, res, next) {
	const {nacionalidad} =req.body;
	const sql= 'INSERT INTO nacionalidades (descripcion) VALUES (?)'; 
	db.query(sql, [nacionalidad], function(error, resul){
		if (error) {
			console.log(error);
			res.send("Ocurrio un error");
		} else {
			res.send("Guardado");
		}
	})

});

module.exports = router; 