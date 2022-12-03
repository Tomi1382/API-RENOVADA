//esqueleto p´a todo
var express = require('express');
var router = express.Router();
var db = require('./conexion.js');


router.get('/', function(req, res, next) {
	const sql= 'SELECT * FROM libros';
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
		const {codigo,autor,genero,precio} = req.body;
	const sql= "UPDATE libros SET codigo = '"+codigo+"',autor = '"+autor+"',genero = '"+genero+"',precio = '"+precio+"' WHERE id = " + id;
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
	const sql= "DELETE  FROM libros WHERE id = " + id;
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
	const {codigo,autor,genero,precio} =req.body;
	const sql= 'INSERT INTO libros (codigo,autor,genero,precio) VALUES (?)'; 
	db.query(sql,[[codigo,autor,genero,precio]], function(error, resul){
		if (error) {
			console.log(error);
			res.send("Ocurrio un error");
		} else {
			res.send("Guardado");
		}
	})

});

module.exports = router; 