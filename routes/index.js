const router = require('express').Router();

router.use('/api', require('./api'));
// router.get('/api', (req, res) => {
// 	res.send('app.js API Index page');
// });

router.get('/', (req, res) => {
	res.send('app.js Index page');
});

module.exports = router;
