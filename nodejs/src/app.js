const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const app = express();

const indiceRutas=require('./rutas/index');

//Config
app.set('port', process.env.PORT || 3001);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));

//Middleware 
app.use(morgan('dev'));
app.use(myConnection(mysql,{
	host: 'localhost',
	user: 'root',
	password: '',
	port: 3306,
	database: 'crudnodejsmysql'
},'single'));
app.use(express.urlencoded({extended: false}))

//Routes
app.use('/',indiceRutas); 

app.listen(app.get('port'), () => {
	console.log("Escuchando en puerto 3001");
})