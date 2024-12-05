const controllers = require("../controllers");
const router = require("express").Router();
const { auth } = require("../utils");

router.get("/", controllers.schoolobjects.get);

router.post("/", auth(), controllers.schoolobjects.post);

// router.put("/:id", auth(), controllers.movie.put);

// router.delete("/:id", auth(), controllers.movie.delete);

module.exports = router;
