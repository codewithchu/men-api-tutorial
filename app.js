const express = require('express');
const app = express();

//MIDDLEWARES
app.use(require('./routes'));

app.listen(3000, () => {
	console.log('listening to port 3000');
});
