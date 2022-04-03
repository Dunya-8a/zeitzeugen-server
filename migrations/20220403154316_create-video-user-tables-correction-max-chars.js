/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
	return knex.schema
		.createTable("users", (table) => {
			table.increments("id").primary();
			table.string("user_first_name").notNullable();
			table.string("user_surname").notNullable();
			table.string("email").notNullable();
			table.boolean("sample_user").defaultTo(false);
			table.timestamp("updated_at").defaultTo(knex.fn.now());
		})
		.createTable("videos", (table) => {
			table.increments("video_id").primary();
			table.string("time_witness_first_name").notNullable();
			table.string("time_witness_surname").notNullable();
			table.string("age");
			table.timestamp("date_of_birth");
			table.string("place_of_birth");
			table.string("places_lived");
			table.string("gender").notNullable();
			table.string("topics").notNullable();
			table.string("story_summary", 300).notNullable();
			table.boolean("sample_video").notNullable().defaultTo(false);
			table.string("video_link").notNullable();
			table
				.integer("user_id")
				.unsigned()
				.notNullable()
				.references("id")
				.inTable("users")
				.onUpdate("CASCADE")
				.onDelete("CASCADE");
			table.date("date_of_interview").notNullable();
			table.timestamp("updated_at").defaultTo(knex.fn.now());
		});
};

exports.down = function (knex) {
	return knex.schema.dropTable("users").dropTable("videos");
};
