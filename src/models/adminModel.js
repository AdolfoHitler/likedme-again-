const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const adminSchema = new Schema({
	firtsName: {
		type: String,
		required: [true, "firtsName null"],
		unique: true,
	},
	lastsName: {
		type: String,
		required: [true, "lastsName null"],
		unique: true,
	},
	enrollment: {
		type: Number,
		required: [true, "enrollment null"],
		unique: true,
	},
	email: {
		type: String,
		required: [true, "email null"],
		unique: true,
	},
	password: {
		type: String,
		required: [true, "password null"],
	},
});
module.exports = mongoose.model("Admin", adminSchema);
