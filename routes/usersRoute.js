const router = require("express").Router();
const usersController = require("../controllers/usersController");

router.route("/").get(usersController.index);
router.route("/:id").get(usersController.singleUser);
router.route("/:id/videos").get(usersController.userVideos);

module.exports = router;
