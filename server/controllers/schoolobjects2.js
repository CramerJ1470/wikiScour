const models = require("../models");

module.exports = {
	get: (req, res, next) => {
		models.SchoolObject2.find()
			.then((schoolobject2) => res.send(schoolobject2))
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

		models.SchoolObject2.create({
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
			.then((createdSchoolObject2) => {
				return Promise.all([
					models.SchoolObject2.updateOne(
						{ _id },
						{ $push: { school: createdSchoolObject2 } }
					),
					models.SchoolObject2.findOne({ _id: createdSchoolObject2._id }),
				]);
			})
			.then(([modifiedObj2, schoolObjectObj2]) => {
				res.send(schoolObjectObj2);
			})
			.catch(next);
	},

};