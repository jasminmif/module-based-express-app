const express = require("express");
var router = express.Router();

const githubController = require("./controller");

router.get("/", githubController.authorizeGithubView);
router.get("/auth-cb/", githubController.githubAuthCallback);
router.put("/invite-user-to-repo/", githubController.inviteUserToRepo);
router.delete("/remove-user-from-repo/", githubController.removeUserFromRepo);

module.exports = router;
