const User = require('../models/User');

exports.index = (req, res) => {
	res.send('USERS INDEX');
};

//CRUD CREATE
exports.createUser = async (req, res) => {
	const user = new User({
		name: req.body.name,
		title: req.body.title,
		bio: req.body.bio,
	});
	try {
		const createUser = await user.save();
		res.status(201).json(user);
	} catch (err) {
		res.status(400).json({ msg: err });
	}
};

//CRUD - READ
exports.listAll = async (req, res) => {
	try {
		const query = await User.find();
		res.status(200).json(query);
	} catch (err) {
		res.status(400).json({ msg: err });
	}
};

exports.singleUser = async (req, res) => {
	// res.send(req.params.id);
	try {
		const query = await User.findById(req.params.id);
		if (!query) {
			res.status(400).json({ msg: 'invalid user' });
		}
		res.status(200).json(query);
	} catch (err) {
		res.status(400).json({ msg: err });
	}
};
