const express = require('express');
const router = express.Router();
const { auth } = require('../middlewares');

router.use(auth);

router.post('/save/:itemId?', function(req, res){
	res.json({message: 'An Item will be added or updated here'});
});

router.get('/get/:itemId', function(req, res){
	res.send({message: 'The specific item with id ' + req.params.itemId + ' will be returned from here'});
});

router.get('/', function(req, res){
	res.send({message: 'All items will be returned from here'});
});

module.exports = router;