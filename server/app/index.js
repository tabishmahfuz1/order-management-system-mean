const app 				= require('express')();
const bodyParser 		= require('body-parser');
const cors 				= require('cors');
const { errorHandler } 	= require('./middlewares');
const routes 			= require('./routes');


app.use(bodyParser.json());
app.use(cors());

/**
* Providing Routes 
*/
app.use(routes);

app.use(errorHandler);

module.exports = app;