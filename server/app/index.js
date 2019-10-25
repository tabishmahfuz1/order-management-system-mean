const express 			= require('express');
const app 				= express();
const bodyParser 		= require('body-parser');
const cors 				= require('cors');
const { errorHandler } 	= require('./middlewares');
const routes 			= require('./routes');
const path 				= require('path');
const publicDist 		= __dirname + '/../public'


app.use(bodyParser.json());
app.use(cors());
app.use(express.static(publicDist));

function getRoot(request, response) {
   response.sendFile(path.resolve(publicDist + '/index.html'));
}

function getUndefined(request, response) {
   response.sendFile(path.resolve(publicDist +  '/index.html'));
}


/**
* Providing Routes 
*/
app.use(routes);

app.use(errorHandler);

app.get('/', getRoot);
app.get('/*', getUndefined);

module.exports = app;