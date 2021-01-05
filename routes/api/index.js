const router = require('express').Router();

router.use('/users', require('./users'));

router.get('/', (req, res) => {
	res.send('app.js API Index page');
});

module.exports = router;
