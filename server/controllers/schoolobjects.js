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
			Provost,
			Students,
			Undergraduates,
			Postgraduates,
			Colors,
			Endowements,
			Chancellor,
			Parentinstitution,
			MottoinEnglish,
			Newspaper,
			WSJCollegePulse,
			WashingtonMontly,
			Othername,
			Formernames,
			Admitrate,
			SATTotal,
			ACTComposite,
			HighschoolGPAAverage,
			Academicaffiliations,
			Accreditation,
			Forbes,
			Founder,
			schoolWikiPage

			
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
			MottoinEnglish,
			Nickname,
			Mascot,
			Sportingaffiliations,
			Location,
			Provost,
			Students,
			Undergraduates,
			Postgraduates,
			Colors,
			Endowements,
			Chancellor,
			Parentinstitution,
			Newspaper,
			WSJCollegePulse,
			WashingtonMontly,
			Othername,
			Formernames,
			Admitrate,
			SATTotal,
			ACTComposite,
			HighschoolGPAAverage,
			Academicaffiliations,
			Accreditation,
			Forbes,
			Founder,
			schoolWikiPage
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
