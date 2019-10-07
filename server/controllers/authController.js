const express = require('express');
const router = express.Router();
const fs   = require('fs');
const jwt  = require('jsonwebtoken');
const db 	= require('./../models');
const bcrypt = require('bcrypt');

router.post('/register', function(req, res){
	
	res.send('Registeration will be done here');
});

router.post('/login', async function(req, res){

	// console.dir(req.body);return "LALA";
	console.log(req.body.username, req.body.password, req.body.email);

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
		var token = jwt.sign(payload, app.get('Secret'), {
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


	res.send('Login will be done here');
});

module.exports = router;