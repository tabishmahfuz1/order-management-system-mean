const express = require('express');
const router = express.Router();
const authController = require('./controllers/authController');
const itemController = require('./controllers/itemController');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const tokenValidator = require('./tokenValidator');

app.use(bodyParser.json())
app.use(cors())
app.use('/auth', authController);
app.use('/item', itemController);
// app.use('/graphql', tokenValidator);

app.use((err, req, res, next) => {
    console.log("YEEEES")

	// The global error handler middleware 
    if (! err) {
        return next();
    }
    console.error(err.name, err, err.stack)

    if(process.env.NODE_ENV != 'production') {
    	res.json({
    		description: err.message,
	    	stack: err.stack
	    }, 500);
    } else {
    	res.json({
	    	message: "500: Internal server error"
	    }, 500);
    }
});



// https://github.com/emabishi/node-jwt
// npm i bcrypt body-parser dotenv jsonwebtoken mongoose --save
module.exports = app;