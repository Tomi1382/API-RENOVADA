var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var apiRouter = require('./routes/api');
var generoRouter = require('./routes/genero');
var afiliadosRouter = require('./routes/afiliados');
var autoresRouter = require('./routes/autores');
var alquilerRouter = require('./routes/alquiler');
var librosRouter = require('./routes/libros');


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api',apiRouter);
app.use('/genero',generoRouter);
app.use('/afiliados',afiliadosRouter);
app.use('/autores',autoresRouter);
app.use('/alquiler',alquilerRouter);
app.use('/libros',librosRouter);

module.exports = app;
