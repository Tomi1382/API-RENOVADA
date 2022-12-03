//esqueleto p´a todo
var express = require('express');
var router = express.Router();
var db = require('./conexion.js');


router.get('/', function(req, res, next) {
	const sql= 'SELECT libros.nombre,libros.isbn,libros.imagen,genero.descripcion,autores.autor FROM libros LEFT JOIN genero ON genero.id = libros.genero LEFT JOIN autores ON autores.id = libros.autor';
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
		const {isbn,genero,nombre,autor} = req.body;
	const sql= "UPDATE libros SET genero = '"+genero+"',nombre = '"+nombre+"',autor = '"+autor+"' WHERE isbn = " + isbn;
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
	const {isbn} = req.body;
	const sql= "DELETE  FROM libros WHERE isbn = " + isbn;
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
	const {isbn,genero,nombre,autor} =req.body;
	const sql= 'INSERT INTO libros (isbn,genero,nombre,autor) VALUES (?)'; 
	db.query(sql,[[isbn,genero,nombre,autor]], function(error, resul){
		if (error) {
			console.log(error);
			res.send("Ocurrio un error");
		} else {
			res.send("Guardado");
		}
	})

});

module.exports = router; 