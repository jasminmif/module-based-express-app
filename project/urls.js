const express = require("express");
var router = express.Router();

const baseAuthentication = require("../middleware/baseAuthentication");

const projectCtrl = require("./controller");

router.post("/", baseAuthentication.authUser, projectCtrl.createProject);

module.exports = router;
