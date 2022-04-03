const knex = require("knex")(require("../knexfile").development);

exports.index = (_req, res) => {
	knex("videos")
		.then((data) => {
			res.status(200).json(data);
		})
		.catch((err) => res.status(400).send(`Error retrieving Videos: ${err}`));
};

exports.singleVideo = (req, res) => {
	knex("videos")
		.where({ video_id: req.params.id })
		.then((data) => {
			if (!data.length) {
				return res.status(400).send(`Video with id ${req.params.id} not found`);
			}

			res.status(200).json(data[0]);
		})
		.catch((err) =>
			res.status(400).send(`Error retrieving video ${req.params.id}: ${err}`)
		);
};
