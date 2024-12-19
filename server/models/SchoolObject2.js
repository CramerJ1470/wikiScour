const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String} = Schema.Types;

const schoolObject2Schema = new Schema({
	schoolname: {
		type: String,
		required: true,
	},
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
	Academicstaff:{
		type: String,
		required: false,
	},
	Campus:{
		type: String,
		required: false,
	},
	Website:{
		type: String,
		required: false,
	},
	Type:{
		type: String,
		required: false,
	},
	Dean:{
		type: String,
		required: false,
	},
	Formername:{
		type: String,
		required: false,
	},
	Motto:{
		type: String,
		required: false,
	},
	Nickname:{
		type: String,
		required: false,
	},
	Mascot:{
		type: String,
		required: false,
	},
	Sportingaffiliations:{
		type: String,
		required: false,
	},
	Location: 
	{type: String,
		required: false,
	},
	Students:{
		type: String,
		required: false,
	},
	Provost: {
		type: String,
		required: false,
	},
	Undergraduates: {
		type: String,
		required: false,
	},
	Postgraduates :{
		type: String,
		required: false,
	},
	Colors: {
		type: String,
		required: false,
	},
	Endowements: {
		type: String,
		required: false,
	},
	Chancellor: {
		type: String,
		required: false,
	},
	Parentinstitution: {
		type: String,
		required: false,
	},
	Newspaper: {
		type: String,
		required: false,
	},
	WSJCollegePulse: {type: String,
		required: false,
	},
	WashingtonMontly: {
		type: String,
		required: false,
	},
	Othername: {type: String,
		required: false,
	},
	Formernames: {type: String,
		required: false,
	},
	Admitrate: {type: String,
		required: false,
	},
	SATTotal: {type: String,
		required: false,
	},
	ACTComposite: {type: String,
		required: false,
	},
	HighschoolGPAAverage: {type: String,
		required: false,
	},
	Academicaffiliations: {type: String,
		required: false,
	},
	Accreditation: {type: String,
		required: false,
	},
	Forbes: {type: String,
		required: false,
	},
	Founder: {type: String,
		required: false,
	},
	MottoinEnglish: {type: String,
		required: false,
	},
	schoolWikiPage: {type: String,
		required: false,
	},
	schoolImages: {type: Array,
	required: false,
	},
	paragraphs: {type: String,
		required: false,
	},
	USNewsWorldReport: {type: String,
		required: false,
	},

});
module.exports = new Model("SchoolObject2", schoolObject2Schema);