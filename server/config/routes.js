const router = require("../routes");

module.exports = (app) => {
	app.use("/api/schoolobjects", router.schoolobjects);

	app.use("/api/schoolobjects1", router.schoolobjects1);

	app.use("/api/schoolobjects2", router.schoolobjects2);

	app.use("/api/user", router.user);

	app.use("*", (req, res, next) => {
		console.log(req.url);
		res.status(500).json({ error: "Route not matching" });
	});
};
