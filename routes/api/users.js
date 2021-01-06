const router = require('express').Router();
const users_ctr = require('../../controllers/users');

//CRUD
//CREATE
router.post('/', users_ctr.createUser); //POST http://localhost:3000/api/users/

//READ
router.get('/', users_ctr.listAll); //GET http://localhost:3000/api/users/
router.get('/:id', users_ctr.singleUser); //GET http://localhost:3000/api/users/:id
// router.get('/list', users_ctr.listAll); //GET http://localhost:3000/api/users/list
// router.get(['/', '/list'], users_ctr.listAll); //GET http://localhost:3000/api/users/list

//UPDATE
router.patch('/', users_ctr.index);
//router.put('/', users_ctr.index);

//DELETE
router.delete('/', users_ctr.index);

module.exports = router;
