const express = require('express');
const router = express.Router();
const fs   = require('fs');
const jwt  = require('jsonwebtoken');
const db 	= require('./../models');
const bcrypt = require('bcrypt');

var register = async function(req, res){
	
	if ( ! req.body.email || ! req.body.password || ! req.body.name ) {
		res.json({
			error: "Invalid or missing required field"
		});
	} else {
		let encryptedPassword = await bcrypt.hash(req.body.password, 10);

		let user = await db.user.create({
			name: req.body.name,
			email: req.body.email,
			password: encryptedPassword
		});

		return login(req, res);
	}
}


var login = async function(req, res){

	// console.dir(req.body);return "LALA";
	console.log(req.body);
	try {
		let user = await db.user.findOne({
			where: {
				email: req.body.email
			}
		});

		if(!user) {
			throw "User not found exception";
			// TODO: Throw A nice Exception
		}

		let userHashedPass = user.password.replace(/^\$2y(.+)$/i, '$2a$1');

		if(bcrypt.compareSync(req.body.password, userHashedPass)) {
			// User was authenticated
			var token = jwt.sign(req.body, req.app.get('secret'), {
	            expiresIn: 1440 // expires in 24 hours
	      	});
	      	res.json({
		        message: 'Successfully Authorized ',
		        token: token
		    });
		} else {
			res.json({
				message: 'Invalid Credentials'
			}, 401);
		}
	} catch(err) {
		console.error(err);
		res.json({
			message: "The server encountered an error"
		}, 500);
	}
	// res.send('Login will be done here');
}

router.post('/register', register);
router.post('/login', login);

module.exports = router;