const express = require('express');
const app = express();
const cors = require('cors');

require('dotenv').config(); //dotenv
require('./config/db'); //database connection

//MIDDLEWARES
app.use(cors());

//Parsing Body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(require('./routes'));

app.listen(3000, () => {
	console.log('listening to port 3000');
});
