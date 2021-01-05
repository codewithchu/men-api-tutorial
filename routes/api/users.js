const router = require('express').Router();
const users_ctr = require('../../controllers/users');

router.get('/', users_ctr.index);
router.get('/list', users_ctr.listAll);

module.exports = router;
