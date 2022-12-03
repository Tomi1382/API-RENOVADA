var mysql = require('mysql');
var conexion = mysql.createConnection({
	host:'192.168.0.19',
	user:'escalerac',
	password:'43691209',
	database:'escalerac'
})

conexion.connect(function(error){
	if (error) throw error;
	console.log("Conetado a La DB");
})

module.exports = conexion;
