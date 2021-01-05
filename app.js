const express = require('express');
const app = express();

//MIDDLEWARES
app.use((req, res, next) => {
	console.log('all Middleware');
	next();
});

app.use('/api', (req, res, next) => {
	console.log('api Middleware');
	next();
});

//ROUTES
app.get('/', (req, res) => {
	res.send('app.js Index page');
});

app.get('/api', (req, res) => {
	res.send('app.js API Index page');
});

app.listen(3000, () => {
	console.log('Jamming on port 3000');
});
