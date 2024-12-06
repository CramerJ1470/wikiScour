const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String} = Schema.Types;

const schoolObjectSchema = new Schema({
	schoolName: {
		type: String,
		required: true,
	},
	location: {
		type: String,
		required: false,
	},
	control: {
		type: String,
		required: false,
	},
	carnegieClassification: {
		type: String,
		required: false,
	},
	enrollment: { type: String, required: false, },
	founded: { type: String, required: false, },
	schoolLink: { type: String, required: false, },
});
module.exports = new Model("SchoolObject", schoolObjectSchema);
