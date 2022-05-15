const express = require ('express');
const morgan = require('morgan');
const app = express ();

//settings
app.set('port', process.env.PORT || 4000);

//middleware
app.use(morgan('devs'));

// variables 



// rutas 
app.use(require('./routes'));

// public

//start server
app.listen(app.get('port'),() =>{
    console.log('server on port ', app.get('port'))
})