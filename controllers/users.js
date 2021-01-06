const User = require('../models/User');

exports.index = (req, res) => {
	res.send('USERS INDEX');
};

exports.listAll = (req, res) => {
	res.send('LIST ALL USERS');
};

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

	// user
	// 	.save()
	// 	.then((data) => {
	// 		res.status(201).json(user);
	// 	})
	// 	.catch((err) => {
	// 		res.status(400).json({ msg: err });
	// 	});
};
