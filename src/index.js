const express = require ('express');
const morgan = require('morgan');
const {engine} = require('express-handlebars');
const path = require('path');

const app = express ();

//settings
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', engine({
    defaultLayout: "main",
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    extname: ".hbs",
    helpers: require("./lib/handlebars"),
}));

app.set('view engine', '.hbs');
//middleware
app.use(morgan('devs'));
app.use(express.urlencoded({extended : false}));
app.use(express.json());

// variables  
app.use((req, res, next) => {

    next();
})


// rutas 
app.use(require('./routes'));

// public

//start server
app.listen(app.get('port'),() =>{
    console.log('server on port ', app.get('port'))
})