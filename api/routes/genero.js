//esqueleto p´a todo
var express = require('express');
var router = express.Router();
var db = require('./conexion.js');


router.get('/', function(req, res, next) {
	const sql= 'SELECT * FROM genero';
	db.query(sql, function(error, resul) {
		if(error){
			console.log(error);
			res.send("Ocurrio un error");
		}else{ 
		res.send(resul);
	}
	})
});
router.put('/', function(req, res, next) {
		const {genero,id} = req.body;
	const sql= "UPDATE genero SET descripcion = '"+ genero +"' WHERE id = " + id;
	db.query(sql, function(error, resul) {
		if(error){
			console.log(error);
			res.send("Ocurrio un error");
		}else{ 
		res.send("Guardado");
	}
	})


});
router.delete('/', function(req, res, next) {
	const {id} = req.body;
	const sql= "DELETE  FROM genero WHERE id = " + id;
	db.query(sql, function(error, resul) {
		if(error){
			console.log(error);
			res.send("Ocurrio un error");
		}else{ 
		res.send("Eliminado");
	}
	})


});
router.post('/', function(req, res, next) {
	const {genero} =req.body;
	const sql= 'INSERT INTO genero (descripcion) VALUES (?)'; 
	db.query(sql, [genero], function(error, resul){
		if (error) {
			console.log(error);
			res.send("Ocurrio un error");
		} else {
			res.send("Guardado");
		}
	})

});

module.exports = router; 