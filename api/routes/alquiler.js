//esqueleto p´a todo
var express = require('express');
var router = express.Router();
var db = require('./conexion.js');

router.get('/detalles', function(req,res,next){
	const {alquiler_id} = req.query;
	const sql = 'SELECT A.*, F.apellido, F.nombre, L.nombre '+
	'FROM alquiler AS A '+
	'LEFT JOIN afiliados AS F ON A.afiliado_id = F.id '+
	'LEFT JOIN libros AS L ON A.libro_isbn = L.isbn '+
	'WHERE A.id = ' + alquiler_id;

	db.query(sql, function(error,resul) {
		if (error){
			console.log(error);
			res.send(error);

		}else{

			res.send(resul);
		}
	})

})

router.post('/devuelto',function(req,res,next) {
	const {alquiler_id} = req.body;
	const fechaActual = "2022-10-05";
	const sql = 'UPDATE alquiler SET fecha_final = "'+fechaActual+'",  devuelto = 1 WHERE id ='+alquiler_id; 
	db.query(sql, function(error,resul) {
		if (error){
			console.log(error)
			res.send("Ocurrio un error");

		}else{

			res.send("devuelto");
		}
	})
})



router.get('/', function(req, res, next) {
	const sql= 'SELECT * FROM alquiler';
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
		const {id,libro_isbn,afiliado_id,fecha_inicio,fecha_final,devuelto} = req.body;
	const sql= "UPDATE alquiler SET libro_isbn = '"+libro_isbn+"',afiliado_id = '"+afiliado_id+"',fecha_inicio = '"+fecha_inicio+"',fecha_final = '"+fecha_final+"',devuelto = '"+devuelto+"' WHERE id = " + id;
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
	const sql= "DELETE  FROM alquiler WHERE id = " + id;
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
	const {libro_isbn,afiliado_id,fecha_inicio} =req.body;
	const sql= 'INSERT INTO alquiler (libro_isbn,afiliado_id,fecha_inicio) VALUES (?)'; 
	db.query(sql,[[libro_isbn,afiliado_id,fecha_inicio]], function(error, resul){
		if (error) {
			console.log(error);
			res.send("Ocurrio un error");
		} else {
			res.send("Guardado");
		}
	})

});

module.exports = router; 