const jwt  				= require('jsonwebtoken');
const { validateToken } = require('./utils.js');
module.exports = {
	auth: (req, res, next) => {
	    const authorizationHeaader = req.headers.authorization;
	    let result = validateToken(authorizationHeaader, req.app.get('secret'));

	    if(result.error) {
	      res.status(result.status).json(result);
	    } else {
	      console.log("This is the GREAT Middleware");
	      req.user = result.user;
	      next();
	    }
	},
	errorHandler: (err, req, res, next) => {
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
	}

};