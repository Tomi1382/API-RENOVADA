//esqueleto p´a todo
var express = require('express');
var router = express.Router();
var db = require('./conexion.js');


router.get('/', function(req, res, next) {
	const sql= 'SELECT * FROM autores';
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
		const {autor,id} = req.body;
	const sql= "UPDATE autores SET autor = '"+autor+"' WHERE id = " + id;
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
	const sql= "DELETE  FROM autores WHERE id = " + id;
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
	const {autor} =req.body;
	const sql= 'INSERT INTO autores (autor) VALUES (?)'; 
	db.query(sql,[[autor]], function(error, resul){
		if (error) {
			console.log(error);
			res.send("Ocurrio un error");
		} else {
			res.send("Guardado");
		}
	})

});

module.exports = router; 