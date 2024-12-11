const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String} = Schema.Types;

const schoolObjectSchema = new Schema({
	schoolname: [{
		type: Array,
		required: false,
	},{type: String,
	required: false,
},
],
	Established:{
		type: String,
		required: false,
	},
	President:{
		type: String,
		required: false,
	},
	Religiousaffiliation:{
		type: String,
		required: false,
	},
	Academicstaff:[{
		type: Array,
		required: false,
	},{type: String,
	required: false,
},
],
	Campus:[{
		type: Array,
		required: false,
	},{type: String,
	required: false,
},
],
	Website:{
		type: String,
		required: false,
	},
	Type:{
		type: String,
		required: false,
	},
	Dean:[{
		type: Array,
		required: false,
	},{type: String,
	required: false,
},
],
	Formername:[{
		type: Array,
		required: false,
	},{type: String,
	required: false,
},
],
	Motto:[{
		type: Array,
		required: false,
	},{type: String,
	required: false,
},
],
	Nickname:[{
		type: Array,
		required: false,
	},{type: String,
	required: false,
},
],
	Mascot:[{
		type: Array,
		required: false,
	},{type: String,
	required: false,
},
],
	Sportingaffiliations:[{
		type: Array,
		required: false,
	},{type: String,
	required: false,
},
],
	Location: [{
		type: Array,
		required: false,
	},{type: String,
	required: false,
},
],
	Students:{
	type: Array,
	required: false,
},
});
module.exports = new Model("SchoolObject", schoolObjectSchema);
