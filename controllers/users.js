const User = require('../models/User');

exports.index = (req, res) => {
	res.send('USERS INDEX');
};

exports.listAll = (req, res) => {
	res.send('LIST ALL USERS');
};
