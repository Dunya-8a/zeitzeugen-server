/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

const userData = require("../seed_data/users");
const videoData = require("../seed_data/videos");

exports.seed = async function (knex) {
	await knex("users").del();
	await knex("users").insert(userData);
	await knex("videos").del();
	await knex("videos").insert(videoData);
};
