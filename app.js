const express = require('express');
const app = express();
require('dotenv').config(); //dotenv
require('./config/db'); //database connection

//MIDDLEWARES
//Parsing Body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(require('./routes'));

app.listen(3000, () => {
	console.log('listening to port 3000');
});
