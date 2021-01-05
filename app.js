const express = require('express');
const app = express();
require('dotenv').config(); //dotenv
require('./config/db'); //database connection

//const mongoose = require('mongoose');
// // DB connection
// mongoose
// 	.connect(process.env.DB_URI, {
// 		dbName: process.env.DB_NAME,
// 		user: process.env.DB_USER,
// 		pass: process.env.DB_PASS,
// 		useNewUrlParser: true,
// 		useUnifiedTopology: true,
// 		useCreateIndex: true,
// 		useFindAndModify: false,
// 	})
// 	.then(() => {
// 		console.log('Connection estabislished with MongoDB');
// 	})
// 	.catch((error) => console.error(error.message));

// const db = mongoose.connection;
// db.on('error', () => {
// 	console.log('Error occurred from the database');
// });

// db.once('open', () => {
// 	console.log('Successfully accessed the database');
// });

//MIDDLEWARES
app.use(require('./routes'));

app.listen(3000, () => {
	console.log('listening to port 3000');
});
