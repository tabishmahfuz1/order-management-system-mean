const express = require('express');
const router = express.Router();

router.post('/register', function(req, res){
	res.send('Registeration will be done here');
});

router.post('/login', function(req, res){
	res.send('Login will be done here');
});

module.exports = router;