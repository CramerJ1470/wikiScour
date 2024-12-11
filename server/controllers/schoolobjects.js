const models = require("../models");

module.exports = {
	get: (req, res, next) => {
		models.SchoolObject.find()
			.then((schoolobject) => res.send(schoolobject))
			.catch(next);
	},
	post: (req, res, next) => {
		const {
			schoolname,
			Established,
			President,
			Religiousaffiliation,
			Academicstaff,
			Campus,
			Website,
			Type,
			Dean,
			Formername,
			Motto,
			Nickname,
			Mascot,
			Sportingaffiliations,
			Location,
		} = req.body;
		const { _id } = req.user;

		models.SchoolObject.create({
			schoolname,
			Established,
			President,
			Religiousaffiliation,
			Academicstaff,
			Campus,
			Website,
			Type,
			Dean,
			Formername,
			Motto,
			Nickname,
			Mascot,
			Sportingaffiliations,
			Location,
		})
			.then((createdSchoolObject) => {
				return Promise.all([
					models.SchoolObject.updateOne(
						{ _id },
						{ $push: { school: createdSchoolObject } }
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
