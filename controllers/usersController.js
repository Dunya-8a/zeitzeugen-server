const knex = require("knex")(require("../knexfile").development);

exports.index = (_req, res) => {
	knex("users")
		.then((data) => {
			res.status(200).json(data);
		})
		.catch((err) => res.status(400).send(`Error retrieving Users: ${err}`));
};

exports.singleUser = (req, res) => {
	knex("users")
		.where({ id: req.params.id })
		.then((data) => {
			if (!data.length) {
				return res.status(400).send(`User with id ${req.params.id} not found`);
			}

			res.status(200).json(data[0]);
		})
		.catch((err) =>
			res.status(400).send(`Error retrieving user ${req.params.id}: ${err}`)
		);
};

exports.userVideos = (req, res) => {
	knex("videos")
		.where({ user_id: req.params.id })
		.then((data) => {
			res.status(200).json(data);
		})
		.catch((err) =>
			res
				.status(400)
				.send(`Error retrieving inventories for video ${req.params.id}: ${err}`)
		);
};
