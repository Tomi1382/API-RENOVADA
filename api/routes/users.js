var express = require('express');
var router = express.Router();
var db = require('./conexion.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  const sql = 'SELECT * FROM  nacionalidades';
  db.query(sql, function(error, resul){
    if (error) {
      console.log(error);
      res.send('ocurio un error');
    }else{
      res.send(resul);
    } 
  })
});

module.exports = router; 
