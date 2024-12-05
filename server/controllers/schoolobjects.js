const models = require("../models");

module.exports = {
	get: (req, res, next) => {
		models.SchoolObject.find()
			.then((schoolobject) => res.send(schoolobject))
			.catch(next);
	},
	post: (req, res, next) => {
		const {
			schoolName,
			location,
			control,
			carnegieClassification,
			enrollment,
			founded,
			schoolLink
		} = req.body;
		const { _id } = req.user;

		models.SchoolObject.create({
			schoolName,
			location,
			control,
			carnegieClassification,
			enrollment,
			founded,
			schoolLink
		})
			.then((createdSchoolObject) => {
				return Promise.all([
					models.SchoolObject.updateOne(
						{ _id },
						{ $push: { movies: createdSchoolObject } }
					),
					models.SchoolObject.findOne({ _id: createdSchoolObject._id }),
				]);
			})
			.then(([modifiedObj, schoolObjectObj]) => {
				res.send(schoolObjectObj);
			})
			.catch(next);
	},

};
