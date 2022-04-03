const router = require("express").Router();
const videosController = require("../controllers/videosController");

router.route("/").get(videosController.index);
router.route("/:id").get(videosController.singleVideo);

module.exports = router;
