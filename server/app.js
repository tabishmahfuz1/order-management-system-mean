const express = require('express');
const router = express.Router();
const authController = require('./controllers/authController');
const itemController = require('./controllers/itemController');
const app = express();

app.use('/auth', authController);
app.use('/item', itemController);

// https://github.com/emabishi/node-jwt
// npm i bcrypt body-parser dotenv jsonwebtoken mongoose --save
module.exports = app;