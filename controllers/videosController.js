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

exports.addVideo = (req, res) => {
	// Validate the request body for required data
	if (
		!req.body.time_witness_first_name ||
		!req.body.time_witness_surname ||
		!req.body.gender ||
		!req.body.topics ||
		!req.body.video_link ||
		!req.body.user_id ||
		!req.body.date_of_interview
	) {
		return res
			.status(400)
			.send(
				"Please make sure to provide first name, surname, gender, topics, video link, user id and date of interview fields in a request"
			);
	}

	knex("videos")
		.insert(req.body)
		.then((data) => {
			// For POST requests we need to respond with 201 and the location of the newly created record
			const newVideoURL = `/upload/${data[0]}`;
			res.status(201).location(newVideoURL).send(newVideoURL);
		})
		.catch((err) => res.status(400).send(`Error creating video: ${err}`));
};