const router = require("express").Router();
const videosController = require("../controllers/videosController");

router.route("/").get(videosController.index);
router.route("/:id").get(videosController.singleVideo);
router.route("/upload").post(videosController.addVideo)

module.exports = router;
