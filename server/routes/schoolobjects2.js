const controllers = require("../controllers");
const router = require("express").Router();
const bodyParser = require("body-parser");
const { auth } = require("../utils");

router.get("/", controllers.schoolobjects2.get);

router.post("/", auth(), controllers.schoolobjects2.post);

// router.put("/:id", auth(), controllers.movie.put);

// router.delete("/:id", auth(), controllers.movie.delete);

module.exports = router;