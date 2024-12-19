const controllers = require("../controllers");
const router = require("express").Router();
const { auth } = require("../utils");

router.get("/", controllers.schoolobjects1.get);

router.post("/", auth(), controllers.schoolobjects1.post);

// router.put("/:id", auth(), controllers.movie.put);

// router.delete("/:id", auth(), controllers.movie.delete);

module.exports = router;