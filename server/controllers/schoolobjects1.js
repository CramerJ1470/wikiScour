const models = require("../models");

module.exports = {
	get: (req, res, next) => {
		models.SchoolObject1.find()
			.then((schoolobject1) => res.send(schoolobject1))
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
			schoolWikiPage,
			schoolImages,
			paragraphs,
            USNewsWorldReport

			
		} = req.body;
		const { _id } = req.user;

		models.SchoolObject1.create({
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
			schoolWikiPage,
			schoolImages,
			paragraphs,
            USNewsWorldReport

		})
			.then((createdSchoolObject1) => {
				return Promise.all([
					models.SchoolObject1.updateOne(
						{ _id },
						{ $push: { school: createdSchoolObject1 } }
					),
					models.SchoolObject1.findOne({ _id: createdSchoolObject1._id }),
				]);
			})
			.then(([modifiedObj1, schoolObjectObj1]) => {
				res.send(schoolObjectObj1);
			})
			.catch(next);
	},

};